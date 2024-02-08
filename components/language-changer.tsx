import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../i18Config';

export default function LanguageChanger() {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChangeLocale = (newLocale: string) => {
        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // redirect to the new locale path
        if (
            i18n.language === i18nConfig.defaultLocale
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${i18n.language}`, `/${newLocale}`)
            );
        }

        router.refresh();
    };

    return (
        <div >
            <a
                href="#/"
                onClick={() => handleChangeLocale('en')}
                className={`mr-2 ${i18n.language === 'en' ? 'font-bold text-orange-500' : ''}`}
            >
                EN
            </a>
            <a
                href="#/es"
                onClick={() => handleChangeLocale('es')}
                className={`${i18n.language === 'es' ? 'font-bold text-orange-500' : ''}`}
            >
                ES
            </a>
        </div>
    );
}
