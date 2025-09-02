import { Search } from 'lucide-react';
import { Input } from './input';
import { useLanguageTranslation } from '../../hooks/ui/useLanguageTranslation';

type Props = {
  searchPlaceHolder?: string;
  onChange?: (value: string) => void; // Optional onChange handler
  searchValue?: string; // Optional prop to control search input value
  className?: string; // Optional className for custom styling
};
export const SearchFilter = (props: Props) => {
  const { t } = useLanguageTranslation();
  const { searchPlaceHolder, onChange, searchValue, className } = props;

  return (
    <Input
      placeholder={searchPlaceHolder || t('COMMON.SEARCH')}
      {...(typeof searchValue !== 'undefined' ? { value: searchValue } : {})}
      className={`border-dividerColor min-h-10 w-full max-w-[500px] placeholder:text-base placeholder:font-normal ${className}`}
      icon={<Search className="absolute left-0 top-2 ml-4 w-5" />}
      onChange={(e) => {
        // Handle search input change
        onChange?.(e.target.value);
      }}
    />
  );
};
