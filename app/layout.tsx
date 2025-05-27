import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Full-Stack Developer Portfolio',
  description: 'Interactive 3D portfolio showcasing full-stack development expertise',
  keywords: ['developer', 'portfolio', '3D', 'react', 'nextjs', 'three.js', 'full-stack'],
  authors: [{ name: 'Full-Stack Developer' }],
  creator: 'Full-Stack Developer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.example.com',
    title: 'Full-Stack Developer Portfolio',
    description: 'Interactive 3D portfolio showcasing full-stack development expertise',
    siteName: 'Full-Stack Developer Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Developer Portfolio',
    description: 'Interactive 3D portfolio showcasing full-stack development expertise',
    creator: '@developer',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navigation />
          <main className="relative">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}