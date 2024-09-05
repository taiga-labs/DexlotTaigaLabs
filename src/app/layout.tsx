import { GlobalProvider } from '@/components/Provider/GlobalProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { StaticImageData } from 'next/image';
import ico from './favicon.svg';
import './globals.css';

const favicon: StaticImageData = ico;
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Taiga Labs DexLOT',
  description: 'taiga labs dexlot webapp',
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
