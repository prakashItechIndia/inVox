

import { ProfileGrid } from '@/components/tableGrid';
import { observer } from 'mobx-react-lite';
import { cn, GetUserResponse } from 'shared';

interface Props {
  data: GetUserResponse[] | undefined;
  isLoading: boolean;
  handleOpenAndClose: () => void;
};

export const UsersGridView = observer(function(props: Props) {
  const {
    data,
    isLoading,
    handleOpenAndClose
  } = props;

  return (
    <div className="bg-white w-full max-w-full overflow-y-auto">
      <div
        className={cn(
          'flex h-full w-full flex-col p-6',
        )}>
        <ProfileGrid  onCardClick={handleOpenAndClose} data={data?.length ? data : []} isLoading={isLoading} columns={2} />
      </div>
    </div>
  );
});
