import { ReactCloseIcon } from "@shared/components/icons/nav-bar";
import { Button } from "@shared/components/ui/button";

interface Props {
  onClose?: () => void;
  submitButtonDisabled: boolean;
  title: string;
  description: string;
  icon: any;
}

export const UserProfileHeader = (props: Props) => {
  const { submitButtonDisabled, onClose, title, description, icon } = props;
  return (
    <div className="flex justify-between items-start w-full p-6 pb-2">
      <div className="flex items-center w-full">
        <Button variant="outline" className="rounded-full w-16 h-16">
          {icon}
        </Button>
        <div className="ml-4">
          <div className="text-lg font-semibold text-gray-900">{title}</div>
          <div className="text-gray-500 text-xs">{description}</div>
        </div>
      </div>
      <Button
        variant="ghost"
        className="text-gray-400 hover:bg-transparent hover:text-gray-600"
        onClick={() => {
          if (!submitButtonDisabled) onClose?.();
        }}
      >
        <ReactCloseIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};
