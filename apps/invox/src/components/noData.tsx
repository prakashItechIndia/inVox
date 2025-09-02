

import { observer } from 'mobx-react-lite';

type Props = {
  error?: any;
  isLoading?: boolean;
  isNodata?: boolean;
  children?: React.ReactNode;
  title: string;
};

export const NoDataFound = observer(function(props: Props) {
  const {
    isLoading,
    error,
    isNodata,
    children,
    title
  } = props;

  return (

    <div className="w-full bg-white max-w-full overflow-y-auto">
      {error ? (
        <div className="p-6 text-center">
          <div className="text-red-600 mb-2">Error loading {title}</div>
          <div className="text-sm text-gray-600">{error.message}</div>
        </div>
      ) : !isLoading && (isNodata) ? (
        <div className="p-6 text-center">
          <div className="text-gray-600 mb-2">No {title} found</div>
          <div className="text-sm text-gray-500">
            {`No ${title} available`}
          </div>
        </div>
      ) : (
        <div className=''>
          {children}
        </div>)}
    </div>
  );
});
