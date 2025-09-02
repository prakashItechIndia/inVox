import { cn } from '@shared/lib/utils';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { ReactSettingsIcon } from '@shared/components/icons/settings';
import { useLanguageTranslation } from '@shared/hooks/ui/useLanguageTranslation';
import { observer } from 'mobx-react-lite';
import { NavButtonLink } from '../nav';
import PageTitle from '../page-title';

interface NavBarProps {
  activeTab: string;
  onLinkClicked?: (link: string) => void;
  isCollapsed: boolean;
  links: NavButtonLink[];
}

const NavLink = ({
  link,
  isCollapsed,
  isActive,
  onClick
}: {
  link: NavButtonLink;
  isCollapsed: boolean;
  isActive: boolean;
  onClick: () => void;
}) => {
  const iconColor = isActive ? '#1d4ed8' : '#6b7280';

  if (isCollapsed) {
    return (
      <div onClick={onClick} className="cursor-pointer py-2">
        <link.icon className="h-6 w-6" color={iconColor} />
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        'flex items-center h-8 text-sm cursor-pointer transition-all duration-200 pl-4',
        {
          'border-l-4 border-l-blue-500 font-semibold': isActive,
          'border-l-4 border-l-white': !isActive
        }
      )}
    >
      <link.icon className="mr-4 h-6 w-6" color={iconColor} />
      <span
        className={cn(
          'text-md',
          isActive ? 'font-semibold' : 'text-gray-500'
        )}
      >
        {link.title}
      </span>
    </div>
  );
};

const NavLinksList = ({ links, isCollapsed, onLinkClicked, activeTab }: NavBarProps) => (
  <>
    {links.map((link, index) => (
      <NavLink
        key={index}
        link={link}
        isCollapsed={isCollapsed}
        isActive={link.title === activeTab}
        onClick={() => onLinkClicked?.(link.title)}
      />
    ))}
  </>
);

export const SubNav = observer(({ links, isCollapsed, activeTab, onLinkClicked }: NavBarProps) => {
  const { t } = useLanguageTranslation();

  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className="group flex h-full flex-col justify-between gap-4 py-2 data-[collapsed=true]:py-2"
      >
        <div className="flex flex-col overflow-y-auto">
          <div className="pl-4 h-20 flex items-center gap-2 -mt-3">
            <ReactSettingsIcon className="h-6 w-6" color="#6b7280" />
            {!isCollapsed && (
              <PageTitle title={t('SETTINGS.TITLE')} className='text-md' />
            )}
          </div>
          <hr className="border-1 border-gray-200" />

          <nav className="grid h-full gap-1 overflow-y-auto pl-4 pt-4">
            <NavLinksList
              activeTab={activeTab}
              links={links}
              isCollapsed={isCollapsed}
              onLinkClicked={onLinkClicked}
            />
          </nav>
        </div>
      </div>
    </TooltipProvider>
  );
});