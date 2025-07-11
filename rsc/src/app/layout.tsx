import { Inter } from 'next/font/google';
import './globals.css';

import Layout from '@/components/layout/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Events App',
  description: 'Discover and manage amazing events in one place.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
