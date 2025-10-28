'use client';

import { useAppContext } from '@/components/providers/app-provider';
import LeftSidebar from '@/components/layout/left-sidebar';
import RightSidebar from '@/components/layout/right-sidebar';
import Header from '@/components/layout/header';

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isConnected } = useAppContext();

  return (
    <>
      <LeftSidebar isConnected={isConnected} />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
      <RightSidebar isConnected={isConnected} />
    </>
  );
}