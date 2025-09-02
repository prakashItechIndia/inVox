import { cn, InvoxUserType } from '@shared/lib/utils';
import { LucideIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import {
  TooltipProvider
} from '@radix-ui/react-tooltip';
import { CustomSVGIconType } from '@shared/type';
import { GetUserResponse } from 'shared';
// import { Input } from '@shared/components/ui/input';
import { ReactIconAuthBanner } from '@shared/components/icons/register';
import { buttonVariants } from '@shared/components/ui/button';
import { observer } from 'mobx-react-lite';

export interface NavButtonLink {
  title: string;
  label?: string;
  icon: LucideIcon | CustomSVGIconType;
  variant: 'default' | 'ghost';
  href: string;
  visible: boolean;
}
interface OnClickProps {
  onLinkClicked?: (link: NavButtonLink) => void;

}
export interface NavButtonLinkProps extends OnClickProps {
  isCollapsed: boolean;
  links: NavButtonLink[];
}
interface NavProps extends NavButtonLinkProps {
  subLinks?: NavButtonLink[];
  userType?: InvoxUserType;
  userInfo: GetUserResponse | null;
  footer: any
}

export const NavLinksList = ({
  links,
  onLinkClicked,
}: NavButtonLinkProps) => {
  const location = useLocation();
  const pathName = location.pathname;
  return links.map((link) =>
    <Link
      key={link.href}
      to={link.href}
      onClick={() => {
        onLinkClicked?.(link);
      }}
      className={cn(
        buttonVariants({
          variant: pathName.includes(link?.href) ? 'highlight' : 'ghost',
          size: 'empty',
        }),
        'w-[4rem] h-[3.2rem] rounded-none m-[6px] p-2 rounded-lg flex items-center',
      )}>
      <div className='m-auto text-center'>
        <link.icon
          className={cn("h-5 w-5 m-auto",)}
          variant={pathName.includes(link?.href) ? 'on' : 'off'}
        />
        <div className='text-[10px] text-white'>{link?.title}</div>
      </div>
    </Link>
  );
};
export const Nav = observer(
  ({
    links,
    isCollapsed,
    onLinkClicked,
    footer
  }: NavProps) => {
    return (
      <TooltipProvider>
        <div
          data-collapsed={isCollapsed}
          className="group flex h-full flex-col justify-between gap-4 py-2 data-[collapsed=true]:py-2">
          <div className="flex flex-col gap-6 overflow-y-auto">
            <ReactIconAuthBanner className="h-8 mt-4 w-full" />
            <nav className="grid h-full gap-2 overflow-y-auto">
              <NavLinksList
                links={links}
                isCollapsed={isCollapsed}
                onLinkClicked={onLinkClicked}
              />
            </nav>
          </div>
          <div className="flex flex-col gap-5">
            <div
              className="grid h-full gap-2 overflow-y-auto"
            >
              <NavLinksList
                links={footer}
                isCollapsed={isCollapsed}
                onLinkClicked={onLinkClicked}
              />
            </div>
          </div>
        </div>
      </TooltipProvider>
    );
  },
);
