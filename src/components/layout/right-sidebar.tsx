'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AiChat from '@/components/ai-chat';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot } from 'lucide-react';

interface RightSidebarProps {
  isConnected: boolean;
}

export default function RightSidebar({ isConnected }: RightSidebarProps) {
  const aiAvatar = PlaceHolderImages.find((img) => img.id === 'ai-avatar');

  return (
    <aside className="hidden lg:block w-80 xl:w-96 flex-shrink-0 p-4">
      <div className="h-full rounded-lg bg-card border border-border flex flex-col">
        <div className="p-4 flex flex-col items-center border-b border-border">
          {aiAvatar && (
            <Image
              src={aiAvatar.imageUrl}
              alt={aiAvatar.description}
              width={100}
              height={100}
              data-ai-hint={aiAvatar.imageHint}
              className="rounded-full border-4 border-primary/50 shadow-lg"
            />
          )}
          <h3 className="font-headline text-lg font-semibold mt-4">DyorAI Assistant</h3>
          <p className="text-sm text-muted-foreground">Your guide to crypto</p>
        </div>
        <div className="flex-1 flex flex-col min-h-0">
          {isConnected ? (
            <AiChat isConnected={isConnected} />
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <Bot className="w-16 h-16 text-muted-foreground/50" />
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
