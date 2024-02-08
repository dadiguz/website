'use client';
import { useTranslation } from 'react-i18next';
import CookieConsent from "@/components/cookie-consent";

export default function CtaContact() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="dark relative bg-gray-800 py-10 px-8 md:py-16 md:px-12">

          {/* Background illustration */}
          <div className="absolute inset-0 left-auto  pointer-events-none" aria-hidden="true">
            <svg className="h-full" width="400" height="232" viewBox="0 0 400 232" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-a">
                  <stop stopColor="#D5A768" offset="0%" />
                  <stop stopColor="#D5A768" stopOpacity="0" offset="100%" />
                </radialGradient>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-b">
                  <stop stopColor="#6D9B86" offset="0%" />
                  <stop stopColor="#6D9B86" stopOpacity="0" offset="100%" />
                </radialGradient>
              </defs>
              <g transform="translate(-85 -369)" fill="none" fillRule="evenodd">
                <circle fillOpacity=".16" fill="url(#box-gr-a)" cx="413" cy="688" r="240" />
                <circle fillOpacity=".24" fill="url(#box-gr-b)" cx="400" cy="400" r="400" />
              </g>
            </svg>
          </div>

          <div className="relative max-w-3xl mx-auto text-center">

            {/* CTA header */}
            <h4 className="h4 uppercase font-red-hat-display text-gray-100 mb-2">{t('contactUsTitle')}</h4>
            <p className="text-gray-400 text-xl">{t('contactUsDescription')}</p>

            {/* CTA button */}
            <div className="flex justify-center mt-8">
              <a className="btn text-white bg-green-500 hover:bg-green-400" href='mailto:hello@dallio.io?subject=&body='>{t('contactUsButton')}</a>
            </div>

          </div>
        </div>

      </div>
      <CookieConsent />

    </section>
  )
}
