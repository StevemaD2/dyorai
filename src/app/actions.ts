'use server';

import { onboardingAssistance, OnboardingAssistanceInput } from '@/ai/flows/onboarding-assistance';

export async function getOnboardingResponse(input: OnboardingAssistanceInput): Promise<string> {
  try {
    const result = await onboardingAssistance(input);
    return result.response;
  } catch (error) {
    console.error('Error getting onboarding assistance:', error);
    return "I'm sorry, I encountered an error while processing your request. Please try again later.";
  }
}
