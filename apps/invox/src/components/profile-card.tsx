import React from 'react';
import { cn } from 'shared';
import { ReactTickCircle } from '@shared/components/icons/user';
import { MyProfileImage } from './myProfileImage';

// Extended interface to include role property that might be added dynamically
interface ExtendedUserResponse {
  id: string;
  firstName: string;
  lastName: string;
  role?: {
    name: string;
  };
  status: boolean | null;
  profilePicture?: {
    id: string;
    url: string;
  } | null;
  profilePictureId: string | null;
}

export interface ProfileCardProps {
  profile: ExtendedUserResponse;
  isSelected?: boolean;
  className?: string;
  onClick?: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  isSelected = false,
  className,
  onClick
}) => {
  const { firstName, lastName, role, status, profilePicture, profilePictureId } = profile;

  const fullName = `${firstName || ''} ${lastName || ''}`.trim() || '-';
  const roleName = role?.name ?? '-';
  const isActive = Boolean(status);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      className={cn(
        'relative bg-white rounded-xl border-[1px] border-[#E0E0E0] p-6 cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02]',
        isSelected && 'ring-2 ring-blue-500 ring-offset-2',
        className
      )}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-selected={isSelected}
    >
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <MyProfileImage
          className="h-[140px] w-[140px]"
          textClassName="text-sm"
          fileId={profilePicture?.id || undefined}
          imageUrl={profilePicture?.url || profilePictureId || undefined}
          isProfileUpdate={true}
          initials={`${profile.firstName?.charAt(0)}${profile.lastName?.charAt(0)}`}
          loaded={true}
        />
      </div>

      {/* Name */}
      <h3 className="text-lg text-gray-900 text-center mb-2 line-clamp-1">
        {fullName}
      </h3>

      {/* Role */}
      <p className="text-sm text-gray-600 text-center mb-4 line-clamp-1">
        {roleName}
      </p>

      {/* Separator */}
      <div className="w-full h-px bg-[#E0E0E0] mb-4" />

      {/* Status */}
      <div className="flex items-center justify-center">
        <ReactTickCircle
          className="w-4 h-4 mr-2"
          variant={isActive ? 'on' : 'off'}
        />
        <span className="text-sm text-gray-600">
          {isActive ? 'Active' : 'Inactive'}
        </span>
      </div>
    </div>
  );
};
