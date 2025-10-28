'use client';

import Link from 'next/link';
import { AreaChart,
  BookOpen,
  Bot,
  LayoutDashboard,
  Menu,
  Settings,
  WalletCards, } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';

interface LeftSidebarProps {
  isConnected: boolean;
}

const navLinks = [
  {
    href: '/dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard',
    requiresConnection: false,
  },
  {
    href: '/portfolio',
    icon: WalletCards,
    label: 'Portfolio',
    requiresConnection: true,
  },
  {
    href: '/markets',
    icon: AreaChart,
    label: 'Markets',
    requiresConnection: true,
  },
  {
    href: '/tutorials',
    icon: BookOpen,
    label: 'Tutorials',
    requiresConnection: true,
  },
  {
    href: '/settings',
    icon: Settings,
    label: 'Settings',
    requiresConnection: true,
  },
];

const NavContent = ({ isConnected }: LeftSidebarProps) => {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div className="p-4">
        <Logo />
      </div>
      <nav className="flex-1 space-y-2 px-4">
        {navLinks.map((link) => {
          const isDisabled = link.requiresConnection && !isConnected;
          const isActive = pathname === link.href;
          return (
            <Button
              key={link.label}
              asChild
              variant={isActive ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start',
                isDisabled && 'pointer-events-none opacity-50'
              )}
            >
              <Link href={isDisabled ? '#' : link.href}>
                <link.icon className="mr-2 h-4 w-4" />
                {link.label}
              </Link>
            </Button>
          );
        })}
      </nav>
      <div className="p-4">
        <div className="rounded-lg bg-card p-4 text-center text-sm">
          <h3 className="font-bold font-headline">DyorAI Pro</h3>
          <p className="text-muted-foreground mt-2">Unlock advanced features and insights.</p>
          <Button size="sm" className="w-full mt-3 bg-primary/80 hover:bg-primary text-primary-foreground">Upgrade</Button>
        </div>
      </div>
    </div>
  );
};


export default function LeftSidebar({ isConnected }: LeftSidebarProps) {
  return (
    <>
      <aside className="hidden md:block w-64 flex-shrink-0 border-r border-border bg-card">
        <NavContent isConnected={isConnected} />
      </aside>
      <div className="md:hidden fixed top-4 left-4 z-50">
         <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] p-0 bg-card">
                <NavContent isConnected={isConnected} />
            </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
