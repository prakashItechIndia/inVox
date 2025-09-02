import { TranslationTypeKeys } from '../../common/locales/en';
import { createUseLanguageTranslation } from 'shared';

export const useLanguageTranslation: ReturnType<
  typeof createUseLanguageTranslation<TranslationTypeKeys>
> = createUseLanguageTranslation<TranslationTypeKeys>();
