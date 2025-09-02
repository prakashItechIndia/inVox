import { ActionMenu } from '@/components/actionMenu';
import { ReactPersonLogoIcon } from '@shared/components/icons/settings';
import { ReactTickCircle } from '@shared/components/icons/user';
import { Checkbox } from '@shared/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import {
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
          disabled={true}
        />
      </div>
    ),
  },
  {
    accessorKey: 'roles',
    header: () => <div className="text-md">Roles</div>,
    cell: ({ row }) => (
      <div className="text-blueDark  flex items-center gap-1 text-md">
        <ReactPersonLogoIcon className='!w-8 !h-8' />
        {row.original?.firstName} {row.original?.lastName || ''}
      </div>
    ),
  },
  {
    accessorKey: 'createdBy',
    header: () => <div className="text-md">Created By</div>,
    cell: ({ row }) => (
      <div className="text-blueDark text-md font-normal">
        {row.getValue('createdBy') || '-'}
      </div>
    ),
  },
  {
    accessorKey: 'createdOn',
    header: () => <div className="text-md"> Created On</div>,
    cell: ({ row }) => (
      <div className="text-blueDark text-md font-normal">
        {row.getValue('createdOn') || '-'}
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: () => <div className="text-md">Status</div>,
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
