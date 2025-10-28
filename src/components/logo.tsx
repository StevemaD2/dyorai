import { Bot } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Bot className="h-8 w-8 text-accent-foreground/80" />
      <span className="font-headline text-2xl font-bold tracking-tight text-foreground">
        DyorAI
      </span>
    </div>
  );
}
