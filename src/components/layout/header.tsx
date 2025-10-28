'use client';

import { ConnectWallet, lightTheme } from '@thirdweb-dev/react';
import { useAddress } from '@thirdweb-dev/react';

const customTheme = lightTheme({
  colors: {
    accentText: 'hsl(var(--accent-foreground))',
    accentButtonBg: 'hsl(var(--accent))',
    modalBg: 'hsl(var(--background))',
    primaryText: 'hsl(var(--foreground))',
    secondaryText: 'hsl(var(--muted-foreground))',
    borderColor: 'hsl(var(--border))',
    separatorLine: 'hsl(var(--border))',
    secondaryButtonBg: 'hsl(var(--secondary))',
    secondaryButtonText: 'hsl(var(--secondary-foreground))',
    connectedButtonBg: 'hsl(var(--secondary))',
    connectedButtonBgHover: 'hsl(var(--muted))',
  },
});

export default function Header() {
  const address = useAddress();

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'Good Morning';
    if (hours < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-xl font-semibold font-headline">
          {getGreeting()}
        </h1>
        <p className="text-sm text-muted-foreground">Welcome to DyorAI, your crypto co-pilot.</p>
      </div>
      <ConnectWallet
        theme={customTheme}
        btnTitle="Connect Wallet"
        modalSize="compact"
      />
    </header>
  );
}
