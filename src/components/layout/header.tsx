'use client';

import { useAppContext } from '@/components/providers/app-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { truncateAddress } from '@/lib/utils';

function ConnectButton() {
  const { isConnected, setIsConnected, address, setAddress } = useAppContext();

  const handleConnect = () => {
    // Mock connection logic
    setIsConnected(true);
    setAddress('0x1234...5678');
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setAddress(null);
  };

  if (isConnected) {
    return (
      <Button variant="secondary" onClick={handleDisconnect}>
        Disconnect {address ? `(${truncateAddress(address)})` : ''}
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Connect</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Connect a Wallet</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleConnect}>New on Crypto</DropdownMenuItem>
        <DropdownMenuItem onClick={handleConnect}>EVM</DropdownMenuItem>
        <DropdownMenuItem onClick={handleConnect}>Solana</DropdownMenuItem>
        <DropdownMenuItem onClick={handleConnect}>Bitcoin</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Header() {

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
      <ConnectButton />
    </header>
  );
}
