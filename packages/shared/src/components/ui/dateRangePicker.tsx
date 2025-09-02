'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';

import { cn } from '../../lib';
import { Button } from './button';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Calendar } from './calendar';
import { ReactCalendarLogo } from '../icons/action';
import { CircleX } from 'lucide-react';

type DatePickerWithRangeProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  onChangeDate?: (date: DateRange | undefined) => void;
  dateValue?: DateRange | undefined;
  btnClassName?: string;
  placeHolderClassName?: string;
};
export function DatePickerWithRange({
  className,
  onChangeDate,
  dateValue,
  btnClassName,
  placeHolderClassName,
}: DatePickerWithRangeProps) {
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  React.useEffect(() => {
    if (dateValue) {
      setDate(dateValue);
    }
  }, [dateValue]);

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild ref={closeRef}>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'border-dividerColor justify-start text-left font-normal',
              !date && 'text-muted-foreground',
              btnClassName,
            )}>
            <ReactCalendarLogo className="text-grayLightWhite mr-2" />
            {date?.from ? (
              date.to ? (
                <div className="flex w-full items-center justify-between gap-2">
                  <div className="text-blueDark flex w-full items-center gap-1 text-sm ">
                    <span> {format(date.from, 'MM/dd/yy')} </span> -{' '}
                    <span>{format(date.to, 'MM/dd/yy')}</span>
                  </div>
                  <CircleX
                    className="text-tableHeaderTextColor h-5 w-5 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDate(undefined);
                      onChangeDate && onChangeDate(undefined);
                    }}
                  />
                </div>
              ) : (
                format(date.from, 'MM/dd/yy')
              )
            ) : (
              <span className={cn(placeHolderClassName)}>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={(value) => {
              setDate(value);
              if (value?.from && value?.to) {
                onChangeDate && onChangeDate(value);
              }
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
