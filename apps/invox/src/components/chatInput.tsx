import {
  ReactEmojiIcon,
  ReactUploadIcon,
} from "@shared/components/icons/invoice";
import { Button } from "@shared/components/ui/button";
import { cn } from "shared";

interface Props {
  cancelText?: string;
  submitText?: string;
  className?: string;
}

export const ChatInput = ({ submitText, cancelText, className }: Props) => (
  <div
    className={cn(
      "flex flex-col gap-3 rounded-lg bg-[#F5F5F5] m-4 p-4",
      className
    )}
  >
    <textarea
      placeholder="Add your feedback notes or comments here..."
      className="w-full resize-y bg-transparent border-0 focus:outline-none focus:ring-0 text-base leading-6 placeholder-gray-500"
    />

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Button variant={"outline"} className="p-2" size={"empty"}>
          <ReactEmojiIcon />
        </Button>
        <Button variant={"outline"} className="p-2" size={"empty"}>
          <ReactUploadIcon />
        </Button>
      </div>

      <div className="flex items-center gap-1">
        {cancelText && (
          <Button className="!p-2" size={"empty"}>
            {cancelText}
          </Button>
        )}
        {submitText && (
          <Button className="!p-2" size={"empty"}>
            {submitText}
          </Button>
        )}
      </div>
    </div>
  </div>
);
