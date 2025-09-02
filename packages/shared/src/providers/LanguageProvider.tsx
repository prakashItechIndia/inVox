import en, { type TranslationType } from '../common/locales/en';
import { LanguageProviderCreator, LanguageType } from 'shared';
import de from '../common/locales/de';

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
};
const defaultLang: LanguageType = 'en';

const { LanguageContext, LanguageProvider } = LanguageProviderCreator<
  LanguageType,
  TranslationType
>(defaultLang, resources);

export { LanguageContext, LanguageProvider };
