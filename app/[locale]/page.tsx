
export const metadata = {
  title: 'Dallio',
  description: 'Our website showcases our commitment to delivering custom-built ecosystem solutions. From problem analysis to deploying tailored digital experiences, we employ a structured process and cutting-edge technology to meet your unique needs. ',
}

import PageIllustration from '@/components/page-illustration'
import Hero from '@/components/hero-home'
import FeaturesGallery from '@/components/features-gallery'
import FeaturesAnimation from '@/components/features-animation'
import CtaContact from '@/components/cta-contact'
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider'
import React from 'react';

const i18nNamespaces = ['home'];

interface HomeProps {
    params: {
        locale: string;
    };
}

const Home: React.FC<HomeProps> = async ({ params: { locale } }) => {
    const { t, resources } = await initTranslations(locale, i18nNamespaces, null, null);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
                <PageIllustration />
            </div>
            <Hero />
            <FeaturesGallery />
            <FeaturesAnimation />
            <CtaContact />
        </TranslationsProvider>
    );
};

export default Home;
