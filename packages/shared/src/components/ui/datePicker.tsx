'use client';

import * as React from 'react';
import { format } from 'date-fns';

import { cn } from '../../lib';
import { Button } from './button';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Calendar } from './calendar';
import { ReactCalendarLogo } from '../icons/action';
import { CircleX } from 'lucide-react';

interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
  dateFormat?: string;
  onDateSelect?: (date: Date | undefined) => void;
  value?: string | Date;
  pickerClassName?: string;
  disabled?: boolean;
  isClearable?: boolean;
}

export function DatePicker({
  className,
  placeholder,
  dateFormat,
  onDateSelect,
  value,
  pickerClassName = '',
  disabled = false,
  isClearable = false,
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const closeRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (value) {
      setDate(typeof value === 'string' ? new Date(value) : value);
    }
  }, [value]);

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild ref={closeRef}>
          <Button
            id="date"
            variant={'outline'}
            disabled={disabled}
            className={cn(
              'relative justify-start pl-10 text-left font-normal',
              !date && 'text-muted-foreground',
              pickerClassName,
              disabled && '!pointer-events-auto cursor-not-allowed',
            )}>
            <ReactCalendarLogo className="text-grayLightWhite absolute left-2" />
            {date ? (
              <div className="flex w-full items-center justify-between gap-2">
                <span>
                  {' '}
                  {format(date, dateFormat ? dateFormat : 'MM/dd/yy')}{' '}
                </span>
                {isClearable ? (
                  <CircleX
                    className="text-tableHeaderTextColor h-5 w-5 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDate(undefined);
                      onDateSelect?.(undefined);
                    }}
                  />
                ) : null}
              </div>
            ) : (
              <span className="text-tableHeaderTextColor text-xs font-medium">
                {placeholder ? placeholder : 'Pick a date'}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            defaultMonth={date}
            selected={date}
            onSelect={(selectedDate) => {
              setDate(selectedDate);
              if (selectedDate) {
                onDateSelect?.(selectedDate);
                closeRef.current?.click();
              }
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
