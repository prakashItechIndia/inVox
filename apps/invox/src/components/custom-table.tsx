import { ReactSortIcon } from "@shared/components/icons/user";
import { Skeleton } from '@shared/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@shared/components/ui/table';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  useReactTable,
} from '@tanstack/react-table';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { cn } from 'shared';
type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Array<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<any>[];
  isLoading: boolean;
  headerClassName?: string;
  highLight?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedRow?: (src: any) => void;
  activeRow?: string;
  tableHeadWidth?: string; // width set tailwind syntax only works
  // missingFieldsMap?: Map<number, string[]>;
  currentPage?: number;
  itemsPerPage?: number;
  tableDataClassName?: string;
  tableClassName?: string
};

export const CustomTable = observer((props: Props) => {
  const {
    data,
    columns,
    isLoading,
    headerClassName,
    selectedRow,
    highLight = false,
    activeRow,
    currentPage = 0,
    itemsPerPage = 0,
    tableDataClassName = '',
    tableClassName = ''
  } = props;
  const [rowSelected, setRowSelected] = React.useState<string | null>(null);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      pagination: {
        pageIndex: currentPage ? currentPage - 1 : 0,
        pageSize: itemsPerPage ? itemsPerPage : data?.length, // Set pageSize to total number of records
      },
    },
  });
  React.useEffect(() => {
    if (activeRow) {
      setRowSelected(activeRow);
    }
  }, [activeRow]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getRowClassName = (row: Row<any>) => {
    return cn('h-14 text-md text-gray-700 cursor-pointer',
      highLight && rowSelected === row.id ? ` border-highlight !border` : ''
    );
  };

  return (
    <Table className={cn('rounded-t-2xl border border-gray-200 overflow-hidden', tableClassName)}>
      <TableHeader
        className={cn(
          headerClassName && `${headerClassName}`,
          'sticky	top-0',
        )}>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow
            key={headerGroup.id}
            className={cn('bg-[#FAFAFA] hover:bg-[#FAFAFA]')}
          >
            {headerGroup.headers.map((header) => {
              return (
                <TableHead
                  key={header.id}
                  className={cn(
                    'text-[#000]',
                    'h-auto pb-2 pt-4 !py-4 cursor-pointer select-none',
                    header.id === 'stickyAction' &&
                    'bg-grayMediumColor sticky right-0',
                  )}
                  onClick={header.column.getToggleSortingHandler?.()}
                >
                  <div className="flex items-center gap-1">
                    {!header.isPlaceholder &&
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}

                    {/* Sort icon */}
                    {(header?.id !== 'checkbox' && header?.id !== 'action') && <ReactSortIcon />
                    }
                  </div>
                </TableHead>

              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody className="bg-white">
        {isLoading ? (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              <Skeleton className="bg-dividerColor h-[20px] w-full" />
              <Skeleton className="bg-dividerColor mt-4 h-[20px] w-[80%]" />
            </TableCell>
          </TableRow>
        ) : table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => {
            return (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
                className={cn(getRowClassName(row))}
                {...{
                  onClick: () => {
                    setRowSelected(row.id);
                    selectedRow && selectedRow(row);
                  },
                }}>
                {row.getVisibleCells().map((cell) => {
                  const cellValue = flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext(),
                  );
                  const key = cell.column.id;

                  return (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        key === 'stickyAction' &&
                        'border-dividerColor sticky right-0 border-b-2 bg-white !py-4',
                        tableDataClassName,
                      )}>
                      {cellValue}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })
        ) : (
          <TableRow className="rowClassName">
            <TableCell
              colSpan={columns.length}
              className="tableDataClassName h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
});
