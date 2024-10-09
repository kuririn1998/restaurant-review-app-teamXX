import React from 'react';
import Head from 'next/head';
import DarkModeToggle from '@/components/molecules/DarkModeToggle';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'My App' }) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Head>
        <title>{title}</title>
        <meta name="description" content="My Next.js application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-4 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark">
            My App
          </h1>
          <DarkModeToggle />
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="py-4 px-4 sm:px-6 lg:px-8 text-center text-foreground-light dark:text-foreground-dark">
        © {new Date().getFullYear()} My App. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;