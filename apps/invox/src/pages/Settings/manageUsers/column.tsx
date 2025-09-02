import { ActionMenu } from '@/components/actionMenu';
import { MyProfileImage } from '@/components/myProfileImage';
import { ReactTickCircle } from '@shared/components/icons/user';
import { Checkbox } from '@shared/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import {
  getParsedPhone,
  GetUserResponse
} from 'shared';

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
          disabled={true} />
      </div>
    ),
  },
  {
    accessorKey: 'firstName',
    header: () => <div className="text-md">Name</div>,
    cell: ({ row }) => {
      return <div className="text-blueDark  flex items-center gap-1 text-md">
        <MyProfileImage
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full object-cover"
          imageUrl={row?.original?.profilePicture?.url}
          initials={`${row.original?.firstName?.charAt(0)}${row.original?.lastName?.charAt(0)}`}
          fileId={row.original?.profilePicture?.id}
          textClassName={'rounded-full text-md uppercase'}
          loaded={true}
        />
        {row.original?.firstName} {row.original?.lastName || ''}
      </div>
    },
  },
  {
    accessorKey: 'email',
    header: () => <div className="text-md">Email</div>,
    cell: ({ row }) => (
      <div className="text-blueDark text-md font-normal">
        {row.getValue('email') || '-'}
      </div>
    ),
  },
  {
    accessorKey: 'phoneNumber',
    header: () => <div className="text-md"> Phone Number</div>,
    cell: ({ row }) => (
      <div className="text-blueDark text-md font-normal">
        {row.getValue('phoneNumber')
          ? getParsedPhone(row.getValue('phoneNumber')) || '-'
          : '-'}
      </div>
    ),
  },
  {
    accessorKey: 'role',
    header: () => <div className="text-md">Role</div>,
    cell: ({ row }: any) => {
      const role = row.original?.role;
      return (
        <div className="flex items-center gap-2">
          {role?.name ?? '-'}
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: () => <div className="text-md">Active</div>,
    cell: ({ row }) => {
      return <div className="text-blueDark text-md font-normal flex items-center">
        {row?.original?.status ? <ReactTickCircle className='w-4 h-4 mr-2' variant='on' /> : <ReactTickCircle className='w-4 h-4 mr-2' variant='off' />}
        {row?.original?.status ? 'Active' : 'Inactive'}</div>
    }
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
