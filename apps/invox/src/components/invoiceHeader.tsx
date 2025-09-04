import { styles } from "@/styles/style";
import {
  ReactChatShareIcon,
  ReactClarifyChatIcon,
} from "@shared/components/icons/invoice";
import { Button } from "@shared/components/ui/button";
import { Separator } from "@shared/components/ui/separator";
import { ChevronLeft } from "lucide-react";
import { cn } from "shared";
import PageTitle from "./page-title";

interface InvoiceHeaderProps {
  handleSave?: () => void;
  isLoading?: boolean;
  title: string;
  className?: string;
  hiddenSort?: boolean;
  handleBack?: () => void;
  type: string;
  onClickClarify?: () => void;
  onClickReject?: () => void;
  onClickSkip?: () => void;
}

export const InvoiceHeader = ({
  title,
  className,
  handleSave,
  isLoading = false,
  hiddenSort = false,
  handleBack = () => null,
  type = "chat",
  onClickClarify = () => null,
  onClickReject = () => null,
  onClickSkip = () => null,
}: InvoiceHeaderProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-12 items-center py-5 bg-white gap-4",
        className
      )}
    >
      {/* Title spans 2 columns */}
      <div className="col-span-7 flex gap-3 items-center">
        <Button
          variant={"outline"}
          className={cn(styles.filterButton)}
          size={"empty"}
          onClick={() => handleBack?.()}
        >
          <ChevronLeft />
        </Button>
        <PageTitle title={title} />
      </div>

      {/* Actions span 4 columns */}
      {(type === "cut" || type === "table") && (
        <div className="col-span-5 flex items-center justify-between gap-3 w-full !pl-6">
          <Button
            variant="outline"
            className="gap-1"
            onClick={() => onClickClarify?.()}
          >
            <ReactClarifyChatIcon /> Clarify
          </Button>
          <div className="flex items-center justify-end gap-3 w-full">
            {type === "cut" && (
              <Button variant="outline" onClick={onClickReject}>
                Reject
              </Button>
            )}
            <Button variant="outline" onClick={onClickSkip}>
              Skip
            </Button>

            <Button onClick={handleSave} disabled={isLoading}>
              {isLoading ? "Saving..." : "Save"}
            </Button>

            <Separator orientation="vertical" className="h-10 mx-2" />

            {!hiddenSort && (
              <Button variant="outline" size={"empty"} className="p-2">
                <ReactChatShareIcon />
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
