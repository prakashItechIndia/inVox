import React, { useState } from 'react';
import { ProfileGrid } from './tableGrid';

// Sample data matching the image description
const sampleProfiles: any = [
  {
    id: '1',
    name: 'Wilson Workman',
    role: 'Recruiter',
    status: 'active',
    profileImage: '/api/placeholder/80/80?text=WW',
  },
  {
    id: '2',
    name: 'Emerson Bator',
    role: 'Recruiter',
    status: 'active',
    profileImage: '/api/placeholder/80/80?text=EB',
  },
  {
    id: '3',
    name: 'Phillip Franci',
    role: 'Recruiter',
    status: 'active',
    profileImage: '/api/placeholder/80/80?text=PF',
  },
  {
    id: '4',
    name: 'Davis Saris',
    role: 'Recruiter',
    status: 'active',
    profileImage: '/api/placeholder/80/80?text=DS',
  },
  {
    id: '5',
    name: 'Jaxson Dias',
    role: 'Recruiter',
    status: 'active',
    profileImage: '/api/placeholder/80/80?text=JD',
  },
  {
    id: '6',
    name: 'Jaydon Geidt',
    role: 'Recruiter',
    status: 'inactive',
    profileImage: '/api/placeholder/80/80?text=JG',
  },
  {
    id: '7',
    name: 'Angel Franci',
    role: 'Recruiter',
    status: 'active',
    profileImage: '/api/placeholder/80/80?text=AF',
  },
  {
    id: '8',
    name: 'Serena Davis',
    role: 'Recruiter',
    status: 'active',
    profileImage: '/api/placeholder/80/80?text=SD',
  },
  {
    id: '9',
    name: 'Emerson Saris',
    role: 'Recruiter',
    status: 'active',
    profileImage: '/api/placeholder/80/80?text=ES',
  },
  {
    id: '10',
    name: 'Leo Levin',
    role: 'Recruiter Head',
    status: 'active',
    profileImage: '/api/placeholder/80/80?text=LL',
  },
];

export const ProfileGridExample: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleProfileClick = (profile: any) => {
    setSelectedProfile(profile.id);
    console.log('Selected profile:', profile);
  };

  const handleToggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Profile Grid Example</h1>
        <p className="text-gray-600 mb-6">
          This demonstrates the reusable ProfileGrid component with various configurations.
        </p>

        <div className="flex gap-4 mb-6">
          <button
            onClick={handleToggleLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isLoading ? 'Stop Loading' : 'Show Loading State'}
          </button>

          <button
            onClick={() => setSelectedProfile(null)}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Clear Selection
          </button>
        </div>

        {selectedProfile && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800">
              Selected Profile ID: <strong>{selectedProfile}</strong>
            </p>
          </div>
        )}
      </div>

      {/* Default Profile Grid (5 columns) */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Default Grid (5 columns)</h2>
        <ProfileGrid
          data={sampleProfiles}
          isLoading={isLoading}
          onCardClick={handleProfileClick}
          selectedCardId={selectedProfile}
        />
      </div>

      {/* Responsive Grid (3 columns) */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Responsive Grid (3 columns)</h2>
        <ProfileGrid
          data={sampleProfiles.slice(0, 6)}
          columns={3}
          onCardClick={handleProfileClick}
          selectedCardId={selectedProfile}
        />
      </div>

      {/* Custom Styling */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Custom Styling</h2>
        <ProfileGrid
          data={sampleProfiles.slice(0, 4)}
          columns={4}
          className="bg-gray-50 p-6 rounded-xl"
          onCardClick={handleProfileClick}
          selectedCardId={selectedProfile}
        />
      </div>

      {/* Empty State Example */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Empty State</h2>
        <ProfileGrid
          data={[]}
          emptyStateMessage="No recruiters available at the moment."
        />
      </div>
    </div>
  );
};

export default ProfileGridExample;
