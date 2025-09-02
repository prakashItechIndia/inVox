import { NavigationRoutes } from '@/common/constant';
import { appState } from '@/state';
import { Button } from '@shared/components/ui/button';
import { Card, CardContent } from '@shared/components/ui/card';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { PleaseWaitLoadText } from '@/components/please-wait-load-text';
import { useLogout } from '@/hooks/rq/mutations/useLogout';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@shared/components/ui/alert-dialog';
import { useLanguageTranslation } from '@shared/hooks/ui/useLanguageTranslation';

import { MyProfileImage } from '@/components/myProfileImage';
import React from 'react';

const LogoutButtonAlert = React.forwardRef<
  HTMLElement,
  { onSuccess: () => void; isPending: boolean }
>(({ onSuccess, isPending }, ref) => {
  const { t } = useLanguageTranslation();
  const deleteDialogRef = React.useRef<HTMLButtonElement>(null);

  React.useImperativeHandle(ref, () => {
    return deleteDialogRef.current as HTMLButtonElement;
  }, []);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild ref={deleteDialogRef}>
        <div className="text-darkRedColor cursor-pointer pt-6 text-[15px] font-bold hover:underline">
          {t('DIALOG.LOGOUT.PARENT_TRIGGER_BUTTON')}
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t('DIALOG.LOGOUT.TITLE')}</AlertDialogTitle>
          <AlertDialogDescription>
            {t('DIALOG.LOGOUT.DESCRIPTION')}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-5 justify-center sm:justify-center">
          <AlertDialogCancel>
            {t('DIALOG.LOGOUT.CANCEL_ACTION')}
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onSuccess?.();
              }}>
              {!isPending ? (
                t('DIALOG.LOGOUT.LOGOUT_ACTION')
              ) : (
                <PleaseWaitLoadText />
              )}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
});

export const Profile = observer(function Profile() {
  const userId = appState.user?.id ?? '';
  const userInfo = appState?.userInfo;
  const deleteDialogRef = React.useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const { t } = useLanguageTranslation();
  const { mutate, isPending } = useLogout();

  const logout = () => {
    localStorage.clear();
    window.location.reload();
    return
    mutate(
      { userId },
      {
        onSuccess: () => {
          deleteDialogRef.current?.click();
          toast.success(t('DIALOG.LOGOUT.TOAST.SUCCESS'));
          appState.logout();
          navigate(NavigationRoutes.Home);
        },
      },
    );
  };

  return (
    <>
      <div className="bg-grayMediumColor flex w-full flex-col items-center gap-5 pt-8">
        <div>
          <div className="text-blackDark pb-4 text-lg font-bold">
            {t('SETTINGS.PROFILE')}
          </div>
          <Card className="rounded-[10px] border-none px-5 py-6 md:min-w-[389px]">
            <CardContent className="w-full ">
              <div className="row-span-2 flex cursor-pointer items-center gap-2 pl-3">
                <MyProfileImage
                  className="h-[60px] w-[60px]"
                  fileId={appState?.userInfo?.profilePicture?.id}
                  imageUrl={appState?.userInfo?.profilePicture?.url}
                  loaded={true}
                />
                <div className="flex flex-col">
                  <span className="text-blueDark text-lg font-semibold">
                    {userInfo?.firstName} {userInfo?.lastName}
                  </span>
                  <span className="text-highlight text-sm	font-medium">
                    {userInfo?.email}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <LogoutButtonAlert
            onSuccess={logout}
            isPending={isPending}
            ref={deleteDialogRef}
          />
        </div>
      </div>
    </>
  );
});
