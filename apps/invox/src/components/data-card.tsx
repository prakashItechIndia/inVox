import { cn } from "@/lib/utils";
import { DashboardCardSkeleton } from "./Skeletons";

export type DataCardProps = {
  label: string;
  icon?: any;
  amount: string;
  description: string;
  isbordered: boolean;
  amountDescription?: string;
  isLoading?: boolean;
  columns?: number;
};

export default function DataCard({
  icon,
  amount,
  description,
  isbordered = false,
  amountDescription,
  isLoading = false,
  columns = 1,
}: DataCardProps) {
  return (
    <DataCardContent
      isbordered={isbordered}
      isLoading={isLoading}
      columns={columns}
    >
      <div className="flex items-center">
        <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-200 mr-4 bg-white">
          {icon}
        </div>
        <div>
          <div className="text-[3rem] font-semibold leading-none">
            {amount}
            <span className="!text-[20px]">{amountDescription} </span>
          </div>
          <div className="text-md text-gray-500 mt-1">{description}</div>
        </div>
      </div>
    </DataCardContent>
  );
}

export function DataCardContent({
  isbordered,
  className,
  isLoading,
  columns = 1,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  isbordered: boolean;
  isLoading?: boolean;
  columns: number;
}) {
  if (isLoading) {
    return (
      <div className="border border-gray-200 rounded-lg p-2 m-4">
        {Array.from({ length: columns }).map((_, index) => (
          <DashboardCardSkeleton key={`skeleton-${index}`} />
        ))}
      </div>
    );
  }

  return (
    <div
      {...rest}
      className={cn(
        "flex w-full flex-col gap-3 bg-gray-50 p-6",
        className,
        isbordered && "border-r border-dividerWhiteColor"
      )}
    />
  );
}
