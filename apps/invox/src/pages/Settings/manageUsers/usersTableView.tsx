

import { CustomTable } from '@/components/custom-table';
import { ColumnDef } from '@tanstack/react-table';
import { observer } from 'mobx-react-lite';
import { GetUserResponse } from 'shared';

interface Props {
  data: GetUserResponse[] | undefined;
  isLoading: boolean;
  columns: ColumnDef<GetUserResponse>[];
  handleOpenAndClose?: () => void;
};

export const UsersTableView = observer(function(props: Props) {
  const {
    data,
    isLoading,
    columns,
    handleOpenAndClose
  } = props;

  return (
    <div className="!bg-white w-full max-w-full overflow-y-auto">
      <CustomTable
        columns={columns}
        data={data?.length ? data : []}
        isLoading={isLoading}
        selectedRow={() => {
          handleOpenAndClose?.();
        }}
        tableClassName='!border-none !rounded-none'
      />
    </div>
  );
});
