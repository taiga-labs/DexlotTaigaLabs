'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import dynamic from 'next/dynamic';

const TonConnectUIProvider = dynamic(() => import('@tonconnect/ui-react').then((mod) => mod.TonConnectUIProvider), { ssr: false });
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
