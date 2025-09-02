import { NavigationRoutes } from "@/common/constant";
import { appState } from "@/state";
import { BellIcon } from "@radix-ui/react-icons";
import { ReactPremiumIcon } from "@shared/components/icons/nav-bar";
import { BadgeWrapper } from "@shared/components/ui/badge";
import { Button } from "@shared/components/ui/button";
import { Separator } from "@shared/components/ui/separator";
import { EllipsisVertical, Moon, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { MyProfileImage } from "./myProfileImage";
import PageTitle from "./page-title";

export default function TopNavbar() {
  return (
    <div className="w-full flex items-center justify-between bg-white p-4 border-b gap-8">

      <div className="flex items-center gap-3">
        <MyProfileImage
          className="h-[40px] w-[40px]"
          textClassName="text-sm"
          fileId={appState?.userInfo?.profilePicture?.id}
          imageUrl={appState?.userInfo?.profilePicture?.url}
          loaded={true}
        />
        <PageTitle title={'Sun Shine Private Limited'} />
        <Button variant="default" className=" bg-[#5347CD] h-8 px-2" onClick={() => { }}>
          <ReactPremiumIcon className="h-6 w-6 mr-2" />
          Upgrade
        </Button>
        <EllipsisVertical className="h-6 w-6 text-gray-600 cursor-pointer" />
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-6">

        {/* Theme Toggle */}
        <Moon className="h-6 w-6 text-gray-600 cursor-pointer" />

        {/* Search */}
        <Search className="h-6 w-6 text-gray-600 cursor-pointer" />

        {/* Notification */}
        <BellIcon className="h-6 w-6 text-gray-600 cursor-pointer" />

        <Separator orientation="vertical" className="border-dividerColor !h-10" />

        {/* Avatar */}
        <Link to={NavigationRoutes.Profile}>
          <BadgeWrapper
            badgePosition="bottom-0 right-0"
          >
            <MyProfileImage
              className="h-[40px] w-[40px]"
              textClassName="text-sm"
              fileId={appState?.userInfo?.profilePicture?.id}
              imageUrl={appState?.userInfo?.profilePicture?.url}
              loaded={true}
            />
          </BadgeWrapper>
        </Link>
      </div>
    </div >
  );
}
