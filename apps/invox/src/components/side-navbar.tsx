import { Nav, NavButtonLink } from './nav';

import { NavigationRoutes } from '@/common/constant';
import { cn } from '@/lib/utils';
import { appState } from '@/state';
import {
  ReactClarifyMenuIcon,
  ReactDashboardMenuIcon,
  ReactHelpMenuIcon,
  ReactIndexingIcon,
  ReactInvoicesMenuIcon,
  ReactLogsMenuIcon,
  ReactSettingsMenuIcon,
  ReactVerifyIcon
} from '@shared/components/icons/nav-bar';
import { Button } from '@shared/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@shared/components/ui/sheet';
import { useLanguageTranslation } from '@shared/hooks/ui/useLanguageTranslation';
import { MenuIcon } from 'lucide-react';
import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useState } from 'react';
import { CurrentUserRole, InvoxUserType } from 'shared';
import { useWindowSize } from 'usehooks-ts';

const NavMenu = observer(
  ({
    lockToCollapse,
    onLinkClicked,
  }: {
    lockToCollapse: boolean;
    onLinkClicked?: (link: NavButtonLink) => void;
  }) => {
    // const userType: InvoxUserType | undefined = appState.user?.userType;
    const userType: InvoxUserType | undefined = CurrentUserRole;
    const { t } = useLanguageTranslation();

    type RoleMenuMap = {
      [key in InvoxUserType]?: NavButtonLink[];
    };

    const roleMenuMap: RoleMenuMap = {
      [InvoxUserType.organisationAdmin]: [
        {
          title: t('NAVBAR.DASHBOARD'),
          href: NavigationRoutes.Dashboard,
          icon: ReactDashboardMenuIcon,
          variant: 'ghost',
          visible: true,
        },
        {
          title: t('NAVBAR.INVOICES'),
          href: NavigationRoutes.Invoices,
          icon: ReactInvoicesMenuIcon,
          iconClassName:'w-6 h-6',
          variant: 'ghost',
          visible: true,
        },
        {
          title: t('NAVBAR.CLARIFY'),
          href: NavigationRoutes.Clarifier,
          icon: ReactClarifyMenuIcon,
          variant: 'ghost',
          visible: true,
        },
        {
          title: t('NAVBAR.LOGS'),
          href: NavigationRoutes.Logs,
          icon: ReactLogsMenuIcon,
          variant: 'ghost',
          visible: true,
        }
      ],
      [InvoxUserType.indexer]: [
        {
          title: t('NAVBAR.DASHBOARD'),
          href: NavigationRoutes.Dashboard,
          icon: ReactDashboardMenuIcon,
          variant: 'ghost',
          visible: true,
        },
        {
          title: t('NAVBAR.INDEXER'),
          href: NavigationRoutes.Indexer,
          icon: ReactIndexingIcon,
          variant: 'ghost',
          visible: true,
        }
      ],
      [InvoxUserType.verifier]: [
        {
          title: t('NAVBAR.DASHBOARD'),
          href: NavigationRoutes.Dashboard,
          icon: ReactDashboardMenuIcon,
          variant: 'ghost',
          visible: true,
        },
        {
          title: t('NAVBAR.VERIFIER'),
          href: NavigationRoutes.Verifier,
          icon: ReactVerifyIcon,
          variant: 'ghost',
          visible: true,
        }
      ],
      [InvoxUserType.clarifier]: [
        {
          title: t('NAVBAR.DASHBOARD'),
          href: NavigationRoutes.Dashboard,
          icon: ReactDashboardMenuIcon,
          variant: 'ghost',
          visible: true,
        },
        {
          title: t('NAVBAR.CLARIFIER'),
          href: NavigationRoutes.Clarifier,
          icon: ReactClarifyMenuIcon,
          variant: 'ghost',
          visible: true,
        }
      ]
    };

    return (
      <Nav
        isCollapsed={lockToCollapse ? true : false}
        onLinkClicked={onLinkClicked}
        links={userType ? roleMenuMap[userType] || [] : []}
        userInfo={appState?.userInfo}
        userType={userType}
        footer={
          [
            {
              title: t('TOP_NAVBAR.HELP'),
              href: NavigationRoutes.Help,
              icon: ReactHelpMenuIcon,
              variant: 'ghost' as const,
              visible: true,
            },
            (userType !== InvoxUserType.indexer && userType !== InvoxUserType.clarifier) && {
              title: t('TOP_NAVBAR.SETTINGS'),
              href: NavigationRoutes.Settings,
              icon: ReactSettingsMenuIcon,
              variant: 'ghost' as const,
              visible: true,
            }
          ].filter(Boolean) as NavButtonLink[]
        }
      />
    );
  },
);

const NavSheet = () => {
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
          lockToCollapse={false}
          onLinkClicked={useCallback(() => setSheetOpen(false), [])}
        />
      </SheetContent>
      <SheetClose />
    </Sheet>
  );
};

export default function SideNavbar() {
  const { width: windowWidth = 0 } = useWindowSize();
  const mobileWidth = windowWidth < 450;

  if (mobileWidth) {
    return <NavSheet />;
  }

  return (
    <div
      className={cn(
        'bg-[#5347CD] relative max-w-full border-r py-2 transition-all duration-300 ease-in-out w-[80px]',
      )}>
      <NavMenu lockToCollapse={false} />
    </div>
  );
}
