
import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import { useTranslation } from "react-i18next";


const CookieConsent = () => {
    const { t } = useTranslation();

    const [showConsent, setShowConsent] = React.useState(true);

    React.useEffect(() => {
        setShowConsent(hasCookie("localConsent"));
    }, []);

    const acceptCookie = () => {
        setShowConsent(true);
        setCookie("localConsent", "true", {});
    };

    if (showConsent) {
        return null;
    }

    return (
        <div className="fixed z-50 inset-x-0 bottom-0 bg-white shadow-md p-4">
            <div className="cookie-consent max-w-screen-md mx-auto flex justify-between items-center">
                <p className="text-sm text-gray-600 whitespace-pre-line">{t('cookiesConsent')}{" "}<a
                    href={"/privacy-policy"} className="text-orange-500 hover:underline">{t('cookiesLink')}</a></p>
                <button onClick={() => acceptCookie()}
                        className="btn text-white bg-green-500 hover:bg-green-400">{t('cookiesButton')}</button>
            </div>
        </div>
    );
};

export default CookieConsent;
