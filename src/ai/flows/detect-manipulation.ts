'use server';
/**
 * @fileOverview Detects whether an image or video is AI-generated.
 *
 * - detectManipulation - A function that handles the detection process.
 * - DetectManipulationInput - The input type for the detectManipulation function.
 * - DetectManipulationOutput - The return type for the detectManipulation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DetectManipulationInputSchema = z.object({
  mediaDataUri: z
    .string()
    .describe(
      "A photo or video, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type DetectManipulationInput = z.infer<typeof DetectManipulationInputSchema>;

const DetectManipulationOutputSchema = z.object({
  label: z.enum(['Real', 'AI-Generated']).describe('The verdict on whether the media is real or AI-generated.'),
  confidence: z.number().min(0).max(100).describe('The confidence score of the prediction, from 0 to 100.'),
});
export type DetectManipulationOutput = z.infer<typeof DetectManipulationOutputSchema>;

export async function detectManipulation(input: DetectManipulationInput): Promise<DetectManipulationOutput> {
  return detectManipulationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'detectManipulationPrompt',
  input: {schema: DetectManipulationInputSchema},
  output: {schema: DetectManipulationOutputSchema},
  prompt: `You are an expert in digital forensics and deepfake detection. Analyze the provided media to determine if it is AI-generated or real.

Your task is to evaluate the media for common artifacts of AI generation, such as inconsistencies in lighting, shadows, textures, backgrounds, or unnatural features. For videos, also consider temporal inconsistencies like unnatural motion or blinking patterns.

Based on your analysis, provide a 'Real' or 'AI-Generated' label and a confidence score representing your certainty in the verdict. A higher confidence score for an 'AI-Generated' label means you are more certain it is a deepfake. A higher confidence score for a 'Real' label means you are more certain it is authentic.

Media: {{media url=mediaDataUri}}`,
});

const detectManipulationFlow = ai.defineFlow(
  {
    name: 'detectManipulationFlow',
    inputSchema: DetectManipulationInputSchema,
    outputSchema: DetectManipulationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
