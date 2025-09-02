
import { cn } from '@/lib/utils';
import {
  ReactSettingsMenuIcon
} from '@shared/components/icons/nav-bar';
import { ReactManageUserIcon, ReactReportIcon, ReactRolesIcon } from '@shared/components/icons/settings';
import { Button } from '@shared/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@shared/components/ui/sheet';
import { useLanguageTranslation } from '@shared/hooks/ui/useLanguageTranslation';
import { ChevronLeft, ChevronRight, MenuIcon } from 'lucide-react';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import { SubNav } from './nav';


interface SideNavbarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapse: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavMenu = observer(
  ({
    isCollapsed,
    lockToCollapse,
    activeTab,
    setActiveTab,
  }: any) => {

    const { t } = useLanguageTranslation();
    const userLinks: any[] = [
      {
        title: t('SETTINGS.NAVBAR.MANAGER_USERS'),
        icon: ReactManageUserIcon,
        variant: 'ghost',
        visible: true,
      },
      {
        title: t('SETTINGS.NAVBAR.ROLES_PERMISSION'),
        icon: ReactRolesIcon,
        variant: 'ghost',
        visible: true,
      },
      {
        title: t('SETTINGS.NAVBAR.REPORTS'),
        icon: ReactReportIcon,
        variant: 'ghost',
        visible: true,
      },
      {
        title: t('SETTINGS.NAVBAR.CONFIGURATIONS'),
        icon: ReactSettingsMenuIcon,
        variant: 'ghost',
        visible: true,
      }
    ].filter((link) => link.visible)


    return (
      <SubNav
        activeTab={activeTab}
        isCollapsed={lockToCollapse ? true : isCollapsed}
        onLinkClicked={setActiveTab}
        links={userLinks}
      />
    );
  },
);

const NavSheet = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void; }) => {
  const [isSheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    () => {
      setSheetOpen(false);
    };
  }, []);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="fixed left-3 top-3 h-8 w-8 border-0 p-1">
          <MenuIcon></MenuIcon>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className=" bg-blueDark px-0 py-20 text-white">
        <NavMenu
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isCollapsed={false}
          lockToCollapse={false}
        />
      </SheetContent>
      <SheetClose />
    </Sheet>
  );
};

export default function SideNavbar({
  isCollapsed,
  setIsCollapsed,
  activeTab,
  setActiveTab
}: SideNavbarProps) {
  const { width: windowWidth = 0 } = useWindowSize();
  const mobileWidth = windowWidth < 450;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  if (mobileWidth) {
    return <NavSheet activeTab={activeTab} setActiveTab={setActiveTab} />;
  }

  return (
    <div
      className={cn(
        'bg-white relative max-w-full border-r py-2 transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-[68px]' : 'w-[270px]',
      )}>
      <div className="absolute right-[-12px] top-[5%]">
        <Button
          onClick={toggleSidebar}
          variant="outline"
          className=" bg-highlight text-white relative z-50 h-8 w-8 rounded-full p-1.5 !hover:bg:highlight">
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>
      <NavMenu isCollapsed={isCollapsed} lockToCollapse={false} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
