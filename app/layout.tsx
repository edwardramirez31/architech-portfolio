import React from 'react';

import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

import './globals.css';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
  title: 'Edward Ramirez',
  description: 'Primer Architech portfolio',
};

const RootLayout: React.FunctionComponent<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
