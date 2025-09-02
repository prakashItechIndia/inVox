import React from 'react';
import { Skeleton } from '@shared/components/ui/skeleton';

export const ProfileCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-xl border border-gray-100 p-6">
    <div className="flex justify-center mb-4">
      <Skeleton className="w-[140px] h-[140px] rounded-full" />
    </div>
    <Skeleton className="h-6 w-24 mx-auto mb-2" />
    <Skeleton className="h-4 w-20 mx-auto mb-4" />
    <div className="w-full h-px bg-gray-200 mb-4" />
    <Skeleton className="h-4 w-16 mx-auto" />
  </div>
);

export const DashboardCardSkeleton: React.FC = () => (
    <div className="flex items-center m-4 p-4">
      <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-200 mr-4 bg-white">
        <Skeleton className="w-6 h-6 rounded-full" />
      </div>
      <div>
        <div className="mb-2">
          <Skeleton className="h-10 w-32 rounded" />
        </div>
        <div className="mb-1">
          <Skeleton className="h-4 w-24 rounded" />
        </div>
    </div>
  </div>
);