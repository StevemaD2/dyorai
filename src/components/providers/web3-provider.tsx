"use client";

import { ThirdwebProvider } from "@thirdweb-dev/react";

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider
      clientId="ee9f28b57349df0047e49a8450a17599"
      activeChain="ethereum"
    >
      {children}
    </ThirdwebProvider>
  );
}
