'use client'

import './css/style.css'

import { Inter, Red_Hat_Display } from 'next/font/google'
import Theme from './theme-provider'
import React from 'react';
import Header from '../../components/ui/header'
import Footer from '@/components/ui/footer'
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider'
const i18nNamespaces = ['home'];

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const redhat = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-red-hat-display',
  display: 'swap'
})
interface RootLayoutProps {
    children: React.ReactNode;
    params: {
        locale: string;
    };
}

// Usar el tipo definido para las props del componente
const RootLayout: React.FC<RootLayoutProps> = async ({ children, params }) => {
    const { locale } = params;

    const { t, resources } = await initTranslations(locale, i18nNamespaces, null, null);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <html lang="en" suppressHydrationWarning>{/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
            <body className={`${inter.variable} ${redhat.variable} font-inter antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 tracking-tight`}>
            <Theme>
                <div className="flex flex-col min-h-screen overflow-hidden">
                    <Header />
                    <main className="grow">
                        {children}
                    </main>
                    <Footer />
                </div>
            </Theme>
            </body>
            </html>

        </TranslationsProvider>
    );
};

export default RootLayout;
