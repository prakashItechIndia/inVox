import { MyProfileImage, PageTitle } from "@/components";
import iTecghlogo from "@shared/assets/icons/Group 6.png";
import BannerImage from "@shared/assets/icons/login.jpg";
import { ReactLoginIcon } from "@shared/components/icons/register";
import { Button } from "@shared/components/ui/button";
import { useLanguageTranslation } from "@shared/hooks/ui/useLanguageTranslation";
import React from "react";
import { cn } from "shared";

interface WrapperProps {
  title: string;
  subtitle: string;
  footerContent: React.ReactNode;
  children: React.ReactNode;
  bannerTitle: string;
  bannerDescription: string;
  hiddenReset?: boolean;
  loginFormclassName?: string;
  handleReset?: () => void;
}

export const Wrapper: React.FC<WrapperProps> = ({
  title,
  subtitle,
  footerContent,
  children,
  bannerTitle,
  bannerDescription,
  hiddenReset = false,
  loginFormclassName = "",
  handleReset,
}) => {
  const { t } = useLanguageTranslation();

  return (
    <div className="p-6 pr-0 relative bg-[#e6e6e6] h-full overflow-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full">
        {/* Banner Section */}
        <div className="hidden lg:flex col-span-1 lg:col-span-8 relative flex-col justify-end rounded-[3rem] overflow-hidden !z-[1000] lg:mb-0 border-[6px] border-white">
          <MyProfileImage
            className="absolute inset-0 w-full h-full object-cover !rounded-none filter brightness-75 !z-[1000]  "
            imageUrl={BannerImage}
            loaded={true}
            avatarClassName="!rounded-none filter  !z-[1000]"
            fileId={"id"}
          />
          <div className="absolute inset-0 bg-black opacity-40 z-[1000]" />
          <div className="relative z-[2000] p-8 lg:p-[3rem] lg:pb-[4rem] text-center">
            <div className="m-auto w-[40vw]">
              <PageTitle
                className="text-2xl lg:text-[2.5rem] font-bold text-white mb-4 leading-tight"
                title={title}
              />
              <p className="text-white text-base opacity-90 drop-shadow-lg">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
        {/* Form Section */}
        <div className="col-span-1 lg:col-span-4 bg-white flex flex-col justify-between overflow-hidden z-10">
          <div
            className={cn("p-8 lg:p-[6rem] lg:pb-[0.5rem]", loginFormclassName)}
          >
            <div className="flex items-center !mb-[6rem]">
              <ReactLoginIcon className="w-10 h-10 mr-4" />
              <span className="font-semibold text-xl text-[#3d3d4e]">
                {t("LOGIN.BRAND")}
              </span>
            </div>
            <PageTitle
              className="text-3xl font-bold mb-2"
              title={bannerTitle}
            />
            <p className="text-gray-500 mb-8">{bannerDescription}</p>
            <div>{children}</div>
            <div className="mt-8">{footerContent}</div>
            <p className="text-[0.8rem] text-gray-400">
              {t("LOGIN.CONTINUE_AGREE")}{" "}
              <a href="#" className="font-medium text-gray-700">
                {t("LOGIN.TERMS")}
              </a>{" "}
              {t("LOGIN.AND")}{" "}
              <a href="#" className="font-medium text-gray-700">
                {t("LOGIN.PRIVACY")}
              </a>
              .
            </p>
            {!hiddenReset && (
              <div className="mt-[2.6rem]">
                <span className="text-md text-gray-500">
                  {t("LOGIN.FORGOT_PASSWORD_QUESTION")}{" "}
                  <Button
                    variant={"text"}
                    className="font-medium text-gray-700 text-md p-0 !underline-none"
                    onClick={handleReset}
                  >
                    {t("LOGIN.SEND_RESET_LINK")}
                  </Button>
                </span>
              </div>
            )}
          </div>
          <div className="absolute bottom-0 right-0 left-[44vw] flex justify-end bg-gradient-to-r from-[#f4f4f440] to-[#F5F5F5]">
            <div className="!w-[33vw] p-[6rem] pb-[3rem] pt-[2rem] flex items-center justify-between w-full !h-[18vh]">
              <div className="text-md text-gray-400">
                <div className="mb-2">
                  {t("LOGIN.NEED_HELP")}{" "}
                  <a href="#" className="underline font-medium text-gray-700">
                    {t("LOGIN.CONTACT_SUPPORT")}
                  </a>
                </div>
                <span>
                  © 2024 {t("LOGIN.BRAND")}. {t("LOGIN.ALL_RIGHTS_RESERVED")}
                </span>
              </div>
              <span className="ml-4 text-gray-400 text-[0.7rem]">
                {t("LOGIN.POWERED_BY")}
                <img
                  src={iTecghlogo}
                  alt={t("LOGIN.POWERED_BY_ALT")}
                  className="h-6 ml-1"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white absolute right-0 top-0 bottom-[19vh] rounded-tl-[6vh] rounded-bl-[4vh] w-[60%] h-full" />
    </div>
  );
};
