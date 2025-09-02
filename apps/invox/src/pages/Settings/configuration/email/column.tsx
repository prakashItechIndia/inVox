import { ColumnDef } from '@tanstack/react-table';
import {
  GetUserResponse
} from 'shared';
import { ActionMenu } from '@/components/actionMenu';
import { MyProfileImage } from '@/components/myProfileImage';
import { Checkbox } from '@shared/components/ui/checkbox';

// Replace it with the actual type of your data
export const Columns = (): ColumnDef<GetUserResponse>[] => [
  {
    accessorKey: 'checkbox',
    header: () => <div className="text-md">
      <Checkbox
        className="border-dividerColor h-6 w-6"
        disabled={true}
      />
    </div>,
    cell: () => (
      <div className="text-blueDark flex items-center gap-1 text-md">
        <Checkbox
          className="border-dividerColor h-6 w-6"
          disabled={true}
        />
      </div>
    ),
  },
  {
    accessorKey: 'firstName',
    header: () => <div className="text-md">Name</div>,
    cell: ({ row }) => (
      <div className="text-blueDark  flex items-center gap-1 text-md">
        <MyProfileImage
          loaded={true}
          className="flex h-[32px] w-[32px] items-center justify-center rounded-full object-cover"
          imageUrl={row?.original?.profilePicture?.url}
          initials={`${row.original?.firstName?.charAt(0)}${row.original?.lastName?.charAt(0)}`}
          fileId={row.original?.profilePicture?.id}
          textClassName={'rounded-full text-md uppercase'}
        />
        {row.original?.firstName} {row.original?.lastName || ''}
      </div>
    ),
  },
  {
    accessorKey: 'email',
    header: () => <div className="text-md">Emails</div>,
    cell: ({ row }) => (
      <div className="text-blueDark text-md font-normal">
        {row.getValue('email') || '-'}
      </div>
    ),
  },
  {
    accessorKey: 'location',
    header: () => <div className="text-md"> Location</div>,
    cell: ({ row }) => (
      <div className="text-blueDark text-md font-normal">
        {row.getValue('location') || '-'}
      </div>
    ),
  },
  {
    accessorKey: 'action',
    header: () => <div className="text-md"></div>,
    cell: () => (
      <div className="text-tableHeaderTextColor flex cursor-pointer items-center justify-end text-md font-normal">
        <ActionMenu />
      </div>
    ),
  },
];
