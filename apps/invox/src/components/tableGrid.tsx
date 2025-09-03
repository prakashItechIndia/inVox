import { observer } from 'mobx-react-lite';
import { cn, GetUserResponse } from 'shared';
import { EmptyState } from './EmptyState';
import { ProfileCard } from './profile-card';
import { ProfileCardSkeleton } from './Skeletons';

interface ExtendedUserResponse extends GetUserResponse {
  role?: {
    name: string;
  };
}
// Types
export interface ProfileGridProps {
  data: ExtendedUserResponse[];
  isLoading?: boolean;
  columns?: number;
  className?: string;
  onCardClick?: (profile: ExtendedUserResponse) => void;
  selectedCardId?: string|null;
  emptyStateMessage?: string;
}

export const ProfileGrid = observer(({
  data,
  isLoading = false,
  columns = 5,
  className,
  onCardClick,
  selectedCardId,
  emptyStateMessage = "No profiles found."
}: ProfileGridProps) => {
  const handleCardClick = (profile: ExtendedUserResponse) => {
    onCardClick?.(profile);
  };

  if (isLoading) {
    return (
      <div className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6',
        className
      )}>
        {Array.from({ length: Math.min(columns * 3, 15) }).map((_, index) => (
          <ProfileCardSkeleton key={`skeleton-${index}`} />
        ))}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <EmptyState message={emptyStateMessage} />;
  }

  return (
    <div className={cn(
      'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6',
      className
    )}>
      {data.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          isSelected={selectedCardId === profile.id}
          onClick={() => handleCardClick(profile)}
        />
      ))}
    </div>
  );
});

export const TableGrid = ProfileGrid;
