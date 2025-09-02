import { ColumnDef } from '@tanstack/react-table';
import {
  GetLogResponse
} from 'shared';

import { Checkbox } from '@shared/components/ui/checkbox';

export const AuditColumns = (): ColumnDef<GetLogResponse>[] => [
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
    accessorKey: 'timestamp',
    header: () => <div className="text-md">Date & Time</div>,
    cell: ({ row }) => (
      <div className="text-blueDark  flex items-center gap-1 text-md">
        {row.original?.timestamp}
      </div>
    ),
  },
  {
    accessorKey: 'actionType',
    header: () => <div className="text-md">Action</div>,
    cell: ({ row }) => (
      <div className="text-blueDark  flex items-center gap-1 text-md">
        {row.original?.actionType}
      </div>
    ),
  },
  {
    accessorKey: 'type',
    header: () => <div className="text-md">type</div>,
    cell: ({ row }) => (
      <div className="text-blueDark  flex items-center gap-1 text-md">
        {row.original?.type}
      </div>
    ),
  },
  {
    accessorKey: 'firstName',
    header: () => <div className="text-md">User</div>,
    cell: ({ row }) => (
      <div className="text-blueDark  flex items-center gap-1 text-md">
        {row.original?.firstName} {row.original?.lastName || ''}
      </div>
    ),
  },
  {
    accessorKey: 'role',
    header: () => <div className="text-md">Role</div>,
    cell: ({ row }) => {
      const role = row.original?.role;
      return (
        <div className="flex items-center gap-2">
          {role?.name ?? '-'}
        </div>
      );
    },
  },
];

export const ActivityColumns = (): ColumnDef<GetLogResponse>[] => [
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
    accessorKey: 'timestamp',
    header: () => <div className="text-md">Date & Time</div>,
    cell: ({ row }) => (
      <div className="text-blueDark  flex items-center gap-1 text-md">
        {row.original?.timestamp}
      </div>
    ),
  },
  {
    accessorKey: 'actionType',
    header: () => <div className="text-md">Action</div>,
    cell: ({ row }) => (
      <div className="text-blueDark  flex items-center gap-1 text-md">
        {row.original?.actionType}
      </div>
    ),
  },
  {
    accessorKey: 'firstName',
    header: () => <div className="text-md">User</div>,
    cell: ({ row }) => (
      <div className="text-blueDark  flex items-center gap-1 text-md">
        {row.original?.firstName} {row.original?.lastName || ''}
      </div>
    ),
  },
  {
    accessorKey: 'role',
    header: () => <div className="text-md">Role</div>,
    cell: ({ row }) => {
      const role = row.original?.role;
      return (
        <div className="flex items-center gap-2">
          {role?.name ?? '-'}
        </div>
      );
    },
  },
  {
    accessorKey: 'description',
    header: () => <div className="text-md">Description</div>,
    cell: ({ row }) => (
      <div className="text-blueDark  flex items-center gap-1 text-md">
        {row.original?.description}
      </div>
    ),
  }
];

export const SystemColumns = (): ColumnDef<GetLogResponse>[] => [
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
    accessorKey: 'timestamp',
    header: () => <div className="text-md">Date & Time</div>,
    cell: ({ row }) => (
      <div className="text-blueDark  flex items-center gap-1 text-md">
        {row.original?.timestamp}
      </div>
    ),
  },
  {
    accessorKey: 'source',
    header: () => <div className="text-md">Source</div>,
    cell: ({ row }) => (
      <div className="text-blueDark  flex items-center gap-1 text-md">
        {row.original?.source}
      </div>
    ),
  },
  {
    accessorKey: 'host',
    header: () => <div className="text-md">Host</div>,
    cell: ({ row }) => (
      <div className="text-blueDark  flex items-center gap-1 text-md">
        {row.original?.host}
      </div>
    ),
  },
  {
    accessorKey: 'securityLevel',
    header: () => <div className="text-md">User</div>,
    cell: ({ row }) => (
      <div className="text-blueDark  flex items-center gap-1 text-md">
        {row.original?.securityLevel} {row.original?.lastName || ''}
      </div>
    ),
  },
  {
    accessorKey: 'description',
    header: () => <div className="text-md">Description</div>,
    cell: ({ row }) => {
      const description = row.original?.description;
      return (
        <div className="flex items-center gap-2">
          {description ?? '-'}
        </div>
      );
    },
  }
];