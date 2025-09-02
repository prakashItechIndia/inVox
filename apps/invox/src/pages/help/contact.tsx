import { useLanguageTranslation } from '@shared/hooks/ui/useLanguageTranslation';
import { Link } from 'react-router-dom';

export const Contact = () => {
  const { t } = useLanguageTranslation();

  return (
    <div className="relative">
      <div className="bg-grayMediumColor sticky top-0 z-10 flex w-full max-w-[420px] flex-col ">
        <div className="text-blueDark  w-full  pb-4 pt-10 text-base font-bold">
          {t('CONTACT.TITLE')}
        </div>
        <div className="  flex w-full  flex-col gap-1 rounded-[20px] bg-white p-4 px-8">
          <h2 className="text-blueDark text-base font-bold">
            {t('CONTACT.NAME')}
          </h2>
          <div className="text-highlight text-sm font-normal underline">
            <Link to={`mailto:${t('CONTACT.EMAIL')}`} target="_blank">
              {t('CONTACT.EMAIL')}{' '}
            </Link>
          </div>
          <div className="text-blueDark text-sm font-normal">
            {t('CONTACT.PHONE')}
          </div>
        </div>
      </div>
    </div>
  );
};
