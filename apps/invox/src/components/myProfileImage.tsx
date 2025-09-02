import { appState } from '@/state';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Skeleton } from '@shared/components/ui/skeleton';
import { observer } from 'mobx-react-lite';
import { cn } from 'shared';

type Props = {
  className?: string;
  imageUrl?: string;
  showInitials?: boolean;
  textClassName?: string;
  fileId?: string;
  initials?: string;
  isProfileUpdate?: boolean;
  loaded?: boolean;
};

export const MyProfileImage = observer(
  ({
    className,
    imageUrl,
    showInitials,
    textClassName,
    fileId,
    initials: defaultInitials = '',
    isProfileUpdate = false,
    loaded = false
  }: Props) => {
    const userInfo = appState.userInfo;
    const initials = defaultInitials
      ? defaultInitials
      : userInfo
        ? userInfo?.firstName[0] + userInfo?.lastName[0]
        : '';

    // Determine which image to use
    const src = imageUrl ? imageUrl : '';

    var isFileError = false;
    // var loaded = false;
    var tempUrl = '';
    return (
      <Avatar
        className={cn(
          'bg-[#C8D1FA] flex items-center justify-center rounded-full object-cover',
          className,
        )}>
        {false ? (
          <Skeleton className="bg-dividerColor h-full w-full rounded-full border-none object-cover" />
        ) : (
          <>
            {(isProfileUpdate && (src || tempUrl) && !isFileError) ||
              (!showInitials && (src || tempUrl) && !isFileError && fileId) ? (
              <>
                <AvatarImage
                  className="h-full w-full rounded-full border-none object-cover"
                  src={tempUrl ? tempUrl : src || ''}
                  alt="avatar"
                  loading="lazy"
                // onLoadingStatusChange={(s) =>
                //   s === 'error' ? setRecallFileId(fileId || '') : null
                // }
                // onLoad={handleLoad}
                />
                {loaded ? (
                  <AvatarFallback
                    className={cn(
                      'rounded-full text-xl uppercase',
                      textClassName,
                    )}>
                    {initials}
                  </AvatarFallback>
                ) : (
                  <Skeleton className="bg-dividerColor h-full w-full rounded-full border-none object-cover" />
                )}
              </>
            ) : (
              <div
                className={cn('rounded-full text-xl uppercase', textClassName)}>
                {initials}
              </div>
            )}
          </>
        )}
      </Avatar>
    );
  },
);
