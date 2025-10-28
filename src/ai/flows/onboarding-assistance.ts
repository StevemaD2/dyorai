'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing onboarding assistance to new users.
 *
 * The flow uses an AI agent to answer user questions about crypto and the platform.
 *
 * - onboardingAssistance - The main function that processes user queries and returns AI-generated responses.
 * - OnboardingAssistanceInput - The input type for the onboardingAssistance function.
 * - OnboardingAssistanceOutput - The output type for the onboardingAssistance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OnboardingAssistanceInputSchema = z.object({
  query: z.string().describe('The user query about crypto or the platform.'),
  isWalletConnected: z.boolean().describe('Indicates whether the user has connected their wallet.'),
});
export type OnboardingAssistanceInput = z.infer<typeof OnboardingAssistanceInputSchema>;

const OnboardingAssistanceOutputSchema = z.object({
  response: z.string().describe('The AI agent response to the user query.'),
});
export type OnboardingAssistanceOutput = z.infer<typeof OnboardingAssistanceOutputSchema>;

const walletConnectionTool = ai.defineTool({
  name: 'getWalletConnectionStatus',
  description: 'Determines if the user has connected their crypto wallet.',
  inputSchema: z.object({}),
  outputSchema: z.boolean(),
}, async () => {
  // In a real application, this would check the actual wallet connection status.
  // For this example, we simply return the value passed in the input.
  return false;
});


export async function onboardingAssistance(input: OnboardingAssistanceInput): Promise<OnboardingAssistanceOutput> {
  return onboardingAssistanceFlow(input);
}

const onboardingAssistancePrompt = ai.definePrompt({
  name: 'onboardingAssistancePrompt',
  input: {schema: OnboardingAssistanceInputSchema},
  output: {schema: OnboardingAssistanceOutputSchema},
  tools: [walletConnectionTool],
  prompt: `You are an AI assistant designed to help new users understand cryptocurrency and this platform.

  The user has asked the following question: {{{query}}}

  Consider whether the user's wallet is connected when answering. If the user asks questions specific to their portfolio you MUST use the getWalletConnectionStatus to check their wallet status.

  If the wallet is not connected, guide the user through the wallet connection process first. If the wallet is connected, answer the question directly, incorporating data related to the wallet if necessary.
  Focus on providing clear, concise, and helpful information.  `, 
});

const onboardingAssistanceFlow = ai.defineFlow(
  {
    name: 'onboardingAssistanceFlow',
    inputSchema: OnboardingAssistanceInputSchema,
    outputSchema: OnboardingAssistanceOutputSchema,
  },
  async input => {
    const {output} = await onboardingAssistancePrompt(input);
    return output!;
  }
);
