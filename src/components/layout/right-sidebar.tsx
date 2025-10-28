'use client';

import Image from 'next/image';
import AIAgentIframe from "./ai-agent-iframe"; // Importa o componente do iframe
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot } from 'lucide-react';

interface RightSidebarProps {
  isConnected: boolean;
}

export default function RightSidebar({ isConnected }: RightSidebarProps) {
  return (
    <aside className="hidden lg:block w-80 xl:w-96 flex-shrink-0 p-4">
      <div className="h-full rounded-lg bg-card border border-border flex flex-col">
        <div className="p-4 flex flex-col items-center border-b border-border">
          <Image
            src="/icon.png"
            alt="DyorAI Assistant Avatar"
            width={100}
            height={100}
            className="rounded-full border-4 border-primary/50 shadow-lg"
          />
          <h3 className="font-headline text-lg font-semibold mt-4">DyorAI Assistant</h3>
          <p className="text-sm text-muted-foreground">Your guide to crypto</p>
        </div>
        <div className="flex-1 flex flex-col min-h-0">
          {isConnected ? (
            <AIAgentIframe />
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <div className="relative w-16 h-16">
                <Image src="/icon.png" alt="DyorAI Icon" layout="fill" className="opacity-50" />
              </div>
              <p className="mt-4 text-muted-foreground">
                Connect your wallet to start a conversation with the AI assistant.
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
