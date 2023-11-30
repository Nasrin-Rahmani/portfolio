import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: require('./locales/en.json')
      },
      fa: {
        translation: require('./locales/fa.json')
      }
    },
    lng: 'fa', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default function Language() {
  return (
    <div>
      <h1>{i18n.t('welcome')}</h1>
      <p>{i18n.t('about')}</p>
    </div>
  );
}

