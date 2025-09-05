import { NavigationRoutes } from "@/common/constant";
import { appState } from "@/state";
import {
  ReactAlertIcon,
  ReactPremiumIcon,
  ReactThemeIcon,
} from "@shared/components/icons/nav-bar";
import { BadgeWrapper } from "@shared/components/ui/badge";
import { Button } from "@shared/components/ui/button";
import { Separator } from "@shared/components/ui/separator";
import { EllipsisVertical, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MyProfileImage } from "./myProfileImage";
import OnboardingPopover from "./onBoardingPoppver";
import PageTitle from "./page-title";
import { useTheme } from "@shared/components/theme-provider";

export default function TopNavbar() {
  const { setTheme } = useTheme();
  const [showPopover, setShowPopover] = useState(false);
  const profileRef = useRef<HTMLDivElement | null>(null);
  const [theme, setCurrentTheme] = useState("light");
 
  useEffect(() => {
    const hasOnboarded = localStorage.getItem("hasOnboardedProfile");
    if (!hasOnboarded) {
      setShowPopover(true);
    }
  }, []);

  const handleFinish = () => {
    localStorage.setItem("hasOnboardedProfile", "true");
    setShowPopover(false);
  };

  return (
    <div className="relative">
      <div className="w-full flex items-center justify-between bg-white p-4 border-b gap-8 z-10 relative">
        {/* Left */}
        <div className="flex items-center gap-3">
          <MyProfileImage
            className="h-[40px] w-[40px]"
            textClassName="text-sm"
            fileId={appState?.userInfo?.profilePicture?.id}
            imageUrl={appState?.userInfo?.profilePicture?.url}
            loaded={true}
          />
          <PageTitle title="Sun Shine Private Limited" />
          <Button
            variant="default"
            className="bg-[#5347CD] h-8 px-2 rounded-[0.6rem]"
            onClick={() => {}}
          >
            <ReactPremiumIcon className="h-6 w-6 mr-2" />
            Upgrade
          </Button>
          <EllipsisVertical className="h-6 w-6 text-gray-600 cursor-pointer" />
        </div>

        {/* Right */}
        <div className="flex items-center space-x-6">
          <div
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
              setCurrentTheme(theme === "light" ? "dark" : "light");
            }}
          >
            {" "}
            <ReactThemeIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
          </div>
          <Search className="h-6 w-6 text-[#616161ab] cursor-pointer" />
          <ReactAlertIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
          <Separator
            orientation="vertical"
            className="border-dividerColor !h-10"
          />

          <Link to={NavigationRoutes.Profile}>
            <BadgeWrapper badgePosition="bottom-0 right-0">
              <div ref={profileRef}>
                <MyProfileImage
                  className="h-[40px] w-[40px]"
                  textClassName="text-sm"
                  fileId={appState?.userInfo?.profilePicture?.id}
                  imageUrl={appState?.userInfo?.profilePicture?.url}
                  loaded={true}
                />
              </div>
            </BadgeWrapper>
          </Link>
        </div>
      </div>

      {/* Onboarding spotlight for profile only */}
      {showPopover && profileRef.current && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          {/* Background Blur */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>

          {/* Spotlight */}
          <div
            className="spotlight"
            style={getSpotlightStyle(profileRef)}
          ></div>

          {/* Popover */}
          <OnboardingPopover
            targetRef={profileRef}
            message="This is your profile! Click here to manage your account settings"
            onNext={handleFinish}
            isLastStep
          />
        </div>
      )}
    </div>
  );
}

// Spotlight circle style
function getSpotlightStyle(ref: React.RefObject<HTMLElement | null>) {
  if (!ref.current) return {};
  const rect = ref.current.getBoundingClientRect();
  return {
    clipPath: `circle(80px at ${rect.left + rect.width / 2}px ${rect.top + rect.height / 2}px)`,
  };
}
