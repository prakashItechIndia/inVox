import React from 'react';

interface EmptyStateProps {
  message: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ message }) => (
  <div className="flex flex-col items-center justify-center py-12 text-center">
    <div className="text-tableHeaderTextColor text-center text-sm font-bold">
      No results found.
    </div>
    <p className="text-gray-500">{message}</p>
  </div>
);
