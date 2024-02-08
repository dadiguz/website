import React from 'react';
import initTranslations from "@/app/i18n";
import PrivacyPolicy from '@/components/privacy-policy';
import TranslationsProvider from '@/components/TranslationsProvider';

const i18nNamespaces = ['privacy'];

interface AboutProps {
  params: {
    locale: string;
  };
}

export default async function About({ params: { locale } }: AboutProps) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces, null, null);

  return (
      <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}>
        <PrivacyPolicy />
      </TranslationsProvider>
  );
}
