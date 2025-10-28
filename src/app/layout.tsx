import type {Metadata} from 'next';
import './globals.css';
import { AppProvider } from '@/components/providers/app-provider';
import { Toaster } from "@/components/ui/toaster";
import LayoutContent from '@/components/layout/layout-content';

export const metadata: Metadata = {
  title: 'DyorAI',
  description: 'AI-powered crypto assistant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen bg-secondary/50">
          <AppProvider>
            {/* LeftSidebar and RightSidebar need to be children of AppProvider to access context */}
            <LayoutContent>{children}</LayoutContent> 
            <Toaster />
          </AppProvider>
        </div>
      </body>
    </html>
  );
}
