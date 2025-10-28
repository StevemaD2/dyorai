'use client';

import { useAppContext } from '@/components/providers/app-provider';
import WelcomeContent from '@/components/welcome-content'; // Mantém
import DashboardContent from '@/components/dashboard-content'; // Mantém

export default function Home() {
  const { isConnected } = useAppContext();

  return isConnected ? <DashboardContent /> : <WelcomeContent />;
}
