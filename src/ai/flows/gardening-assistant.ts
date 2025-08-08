// This is a server-side file!
'use server';

/**
 * @fileOverview A gardening assistant AI agent that provides tips and techniques tailored to local weather conditions.
 *
 * - gardeningAssistant - A function that provides gardening tips based on location.
 * - GardeningAssistantInput - The input type for the gardeningAssistant function.
 * - GardeningAssistantOutput - The return type for the gardeningAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GardeningAssistantInputSchema = z.object({
  location: z
    .string()
    .describe('The location for which to provide gardening tips.'),
});
export type GardeningAssistantInput = z.infer<typeof GardeningAssistantInputSchema>;

const GardeningAssistantOutputSchema = z.object({
  tips: z.string().describe('Gardening tips tailored to the specified location.'),
});
export type GardeningAssistantOutput = z.infer<typeof GardeningAssistantOutputSchema>;

export async function gardeningAssistant(input: GardeningAssistantInput): Promise<GardeningAssistantOutput> {
  return gardeningAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'gardeningAssistantPrompt',
  input: {schema: GardeningAssistantInputSchema},
  output: {schema: GardeningAssistantOutputSchema},
  prompt: `You are a gardening expert. Provide gardening tips and techniques tailored to the local weather conditions of the following location: {{{location}}}. Focus on seasonal advice and how to mitigate weather-related challenges.`,
});

const gardeningAssistantFlow = ai.defineFlow(
  {
    name: 'gardeningAssistantFlow',
    inputSchema: GardeningAssistantInputSchema,
    outputSchema: GardeningAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
