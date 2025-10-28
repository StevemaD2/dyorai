'use client';

import { useAddress } from '@thirdweb-dev/react';
import { useIsMobile } from '@/hooks/use-mobile';
import LeftSidebar from '@/components/layout/left-sidebar';
import RightSidebar from '@/components/layout/right-sidebar';
import Header from '@/components/layout/header';
import WelcomeContent from '@/components/welcome-content';
import DashboardContent from '@/components/dashboard-content';

export default function Home() {
  const address = useAddress();
  const isMobile = useIsMobile();
  const isConnected = !!address;

  return (
    <div className="flex min-h-screen bg-secondary/50">
      <LeftSidebar isConnected={isConnected} />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {isConnected ? <DashboardContent /> : <WelcomeContent />}
        </main>
      </div>
      <RightSidebar isConnected={isConnected} />
    </div>
  );
}
