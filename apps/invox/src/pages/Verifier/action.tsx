import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@shared/components/ui/dropdown-menu';
import { useLanguageTranslation } from '@shared/hooks/ui/useLanguageTranslation';
import { Edit2, EllipsisVertical } from 'lucide-react';

export const ActionMenu = () => {
  const { t } = useLanguageTranslation();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <EllipsisVertical />
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="bg-white min-w-[4vw]">
          <DropdownMenuItem
            className="text-blueDark cursor-pointer text-sm font-bold"
            onClick={() => {
              console.log('Edit clicked');
            }}>
            <Edit2 className='mr-1 w-4' /> {t('COMMON.EDIT')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
