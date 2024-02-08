'use client';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
      <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-10 md:pt-40 md:pb-16">

                  <div className="max-w-4xl mx-auto px-4 py-8">
                      <h1 className="text-3xl font-bold mb-4 uppercase">{t('title')}</h1>
                      <p className="mb-4">{t('introduction')}</p>

                      <h2 className="text-2xl font-bold mt-6 mb-4 uppercase">{t('section1Title')}</h2>
                      <p className="mb-4">{t('section1Content1')}</p>
                      <p className="mb-4">{t('section1Content2')}</p>
                      <p className="mb-4">{t('section1Content3')}</p>

                      <h2 className="text-2xl font-bold mt-6 mb-4 uppercase">{t('section2Title')}</h2>
                      <p className="mb-4">{t('section2Content')}</p>

                      <h2 className="text-2xl font-bold mt-6 mb-4 uppercase">{t('section3Title')}</h2>
                      <p className="mb-4">{t('section3Content')}</p>

                      <h2 className="text-2xl font-bold mt-6 mb-4 uppercase">{t('section4Title')}</h2>
                      <p className="mb-4">{t('section4Content')}</p>

                      <h2 className="text-2xl font-bold mt-6 mb-4 uppercase">{t('section5Title')}</h2>
                      <p className="mb-4">{t('section5Content')}</p>

                      <h2 className="text-2xl font-bold mt-6 mb-4 uppercase">{t('section6Title')}</h2>
                      <p className="mb-4">{t('section6Content')} <a className="mb-4 text-orange-500" href='mailto:hello@dallio.io'>hello@dallio.io</a></p>
                  </div>
              </div>
          </div>
      </section>
  )
}
