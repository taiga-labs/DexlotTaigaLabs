'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import dynamic from 'next/dynamic';
import { useLayoutEffect, useState } from 'react';

const TonConnectUIProvider = dynamic(() => import('@tonconnect/ui-react').then((mod) => mod.TonConnectUIProvider), { ssr: false });
export const GlobalProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 10 * 1000,
          },
        },
      }),
  );
  function isTonConnectSdkError(error: Error | string) {
    const tonConnectError = 'Error: [TON_CONNECT_SDK_ERROR] TonConnectError';
    if (typeof error === 'string') {
      return error.includes(tonConnectError);
    }

    return error.message?.includes(tonConnectError);
  }

  useLayoutEffect(() => {
    window.addEventListener('unhandledrejection', function (rejection: PromiseRejectionEvent) {
      if (isTonConnectSdkError(rejection.reason)) {
        return;
      }
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TonConnectUIProvider manifestUrl='https://taiga-labs.github.io/dexlot.json'>{children}</TonConnectUIProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
