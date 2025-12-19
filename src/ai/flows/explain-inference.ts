'use server';
/**
 * @fileOverview Explains why an image or video frame was flagged as potentially AI-generated.
 *
 * - explainInference - A function that handles the explanation process.
 * - ExplainInferenceInput - The input type for the explainInference function.
 * - ExplainInferenceOutput - The return type for the explainInference function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainInferenceInputSchema = z.object({
  mediaDataUri: z
    .string()
    .describe(
      "A photo or video frame, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  reasoning: z.string().describe('The reasoning provided by the AI detection model.'),
});
export type ExplainInferenceInput = z.infer<typeof ExplainInferenceInputSchema>;

const ExplainInferenceOutputSchema = z.object({
  explanation: z.string().describe('The explanation of why the image or video frame was flagged as AI-generated.'),
});
export type ExplainInferenceOutput = z.infer<typeof ExplainInferenceOutputSchema>;

export async function explainInference(input: ExplainInferenceInput): Promise<ExplainInferenceOutput> {
  return explainInferenceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainInferencePrompt',
  input: {schema: ExplainInferenceInputSchema},
  output: {schema: ExplainInferenceOutputSchema},
  prompt: `You are an expert AI model explainer. You are given the following information about an image or video frame and the reasoning behind why it was flagged as potentially AI-generated. Your job is to create a human-readable explanation of the reasoning.

Reasoning: {{{reasoning}}}
Media: {{media url=mediaDataUri}}`,
});

const explainInferenceFlow = ai.defineFlow(
  {
    name: 'explainInferenceFlow',
    inputSchema: ExplainInferenceInputSchema,
    outputSchema: ExplainInferenceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
