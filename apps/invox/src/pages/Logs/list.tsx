

import { CustomTable } from '@/components/custom-table';
import { observer } from 'mobx-react-lite';
import { GetLogResponse } from 'shared';

interface Props {
  data: GetLogResponse[] | undefined;
  isLoading: boolean;
  columns: any;
  handleOpenAndClose?: () => void;
};

export const LogLists = observer(function(props: Props) {
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
