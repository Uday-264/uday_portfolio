import type { Metadata } from 'next';
import {  Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ subsets:['latin'],weight:'700'} );
export const metadata: Metadata = {
  title: 'Udaykumar Bethi - Web Developer',
  description: 'Personal portfolio website of Udaykumar Bethi, showcasing web development projects and skills.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        {children}
        </body>
    </html>
  );
}