import { cn } from '@/lib/utils';

export type DataCardProps = {
  label: string;
  icon?: any;
  amount: string;
  description: string;
  isbordered: boolean;
  amountDescription?: string;
};

export default function DataCard({ icon, amount, description, isbordered = false, amountDescription }: DataCardProps) {
  return (
    <DataCardContent isbordered={isbordered}>
      <div className="flex items-center">
        <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-200 mr-4 bg-white">
          {icon}
        </div>
        <div>
          <div className="text-[3rem] font-bold leading-none">{amount}<span className="!text-[20px]">{amountDescription} </span></div>
          <div className="text-md text-gray-500 mt-1">{description}</div>
        </div>
      </div>
    </DataCardContent>
  );
}
export function DataCardContent({
  isbordered,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & { isbordered: boolean }) {
  return (
    <div
      {...rest}
      className={cn(
        'flex w-full flex-col gap-3 bg-gray-50 p-6',
        className,
        isbordered && 'border-r border-dividerWhiteColor'
      )}
    />
  );
}
