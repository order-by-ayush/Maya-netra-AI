'use server';
/**
 * @fileOverview Summarizes the video analysis results, highlighting key moments and confidence scores.
 *
 * - summarizeVideoAnalysis - A function that summarizes the video analysis.
 * - SummarizeVideoAnalysisInput - The input type for the summarizeVideoAnalysis function.
 * - SummarizeVideoAnalysisOutput - The return type for the summarizeVideoAnalysis function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeVideoAnalysisInputSchema = z.object({
  analysisResult: z
    .string()
    .describe(
      'The detailed analysis result of the video, including confidence scores and timestamps of suspected AI-generated content.'
    ),
});
export type SummarizeVideoAnalysisInput = z.infer<typeof SummarizeVideoAnalysisInputSchema>;

const SummarizeVideoAnalysisOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A brief summary of the video analysis, highlighting key moments where AI-generated content was suspected and the overall confidence score.'
    ),
});
export type SummarizeVideoAnalysisOutput = z.infer<typeof SummarizeVideoAnalysisOutputSchema>;

export async function summarizeVideoAnalysis(
  input: SummarizeVideoAnalysisInput
): Promise<SummarizeVideoAnalysisOutput> {
  return summarizeVideoAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeVideoAnalysisPrompt',
  input: {schema: SummarizeVideoAnalysisInputSchema},
  output: {schema: SummarizeVideoAnalysisOutputSchema},
  prompt: `You are an expert in summarizing video analysis results for deepfake detection.

  Based on the analysis provided, create a concise summary (around 100 words) that highlights the key moments where AI-generated content was suspected and the overall confidence score.
  The goal is to provide a quick overview of the findings without requiring the user to review the entire analysis in detail.

  Analysis Result: {{{analysisResult}}}`,
});

const summarizeVideoAnalysisFlow = ai.defineFlow(
  {
    name: 'summarizeVideoAnalysisFlow',
    inputSchema: SummarizeVideoAnalysisInputSchema,
    outputSchema: SummarizeVideoAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
