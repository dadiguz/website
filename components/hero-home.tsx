'use client';
import Logo from "@/components/logo";
import { useTranslation } from 'react-i18next';

export default function HeroHome() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-9 mb-30">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h1 lg:text-6xl mb-4 font-red-hat-display font-black" >DALLIO</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400" >{t('hero')}</p>
            </div>

            <div className="md:col-span-5 lg:col-span-5 text-center md:text-right" >
              <Logo />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
