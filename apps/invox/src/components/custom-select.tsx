import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@shared/components/ui/select';
import { cn } from 'shared';
import { CircleX } from 'lucide-react';

type Props = SelectPrimitive.SelectProps & {
  onValueChange: (value: string) => void;
  value?: string;
  className?: string;
  options?: { value: string; label: string; hidden?: boolean }[];
  isSearchable?: boolean;
  placeHolder?: string;
  disabled?: boolean;
  optionsClassName?: string;
  isLoading?: boolean;
  isClearable?: boolean;
};
export function CustomSelect(props: Props) {
  const {
    onValueChange,
    value: selectValue,
    className,
    options = [],
    isSearchable = false,
    placeHolder = 'Select',
    disabled = false,
    optionsClassName = '',
    isLoading = false,
    isClearable = false,
  } = props;
  const [value, setValue] = React.useState('');
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    if (selectValue && options.length) {
      setValue(selectValue);
    }
  }, [selectValue, options]);
  return (
    <Select
      disabled={disabled}
      autoComplete="off"
      onOpenChange={(open) => {
        if (open) {
          setSearch('');
        }
      }}
      onValueChange={(val) => {
        if (value === val) {
          onValueChange && onValueChange('');
          setValue('');
          return;
        }
        onValueChange && onValueChange(val);
        setValue(val);
      }}
      value={value}>
      <div className="relative">
        <SelectTrigger className={cn('p-2 text-md', className)}>
          <SelectValue placeholder={placeHolder} />
        </SelectTrigger>
        {isClearable && value ? (
          <CircleX
            className="text-tableHeaderTextColor absolute right-7 top-3 h-5 w-5 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setValue('');
              onValueChange?.('');
            }}
          />
        ) : null}
      </div>

      <SelectContent
        optionsClassName={optionsClassName}
        items={options}
        searchable={isSearchable}
        search={search}
        setSearch={setSearch}
        isLoading={isLoading}
      />
    </Select>
  );
}
