'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@shared/components/ui/pagination';
import { useMemo } from 'react';
import { CustomSelect } from './custom-select';
import { cn } from 'shared';

interface PaginationWrapperProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

const pageSizeOptions = [10, 20, 50, 100];

function getPageNumbers(current: number, total: number) {
  const delta = 2;
  const pages = [];
  for (
    let i = Math.max(1, current - delta);
    i <= Math.min(total, current + delta);
    i++
  ) {
    pages.push(i);
  }
  return pages;
}

export default function PaginationWrapper({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onPageSizeChange,
}: PaginationWrapperProps) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  // Calculate range
  const start = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalItems);

  // Page numbers to show
  const pageNumbers = useMemo(
    () => getPageNumbers(currentPage, pageCount),
    [currentPage, pageCount]
  );

  return (
    <div className="flex items-center justify-between bg-[#FAFAFA] h-16 px-4 !rounded-b-2xl">
      {/* Left: Range */}
      <div className="text-sm text-md">
        {start}-{end} of {totalItems} items
      </div>

      {/* Center: Pagination */}
      <Pagination>
        <PaginationContent className="flex items-center gap-1">
          {/* First */}
          <PaginationItem>
            <PaginationLink
              href="#"
              aria-label="First Page"
              onClick={e => {
                e.preventDefault();
                if (currentPage > 1) onPageChange(1);
              }}
              className={cn('w-10 h-10', currentPage === 1 ? 'cursor-not-allowed opacity-50' : '')}
            >
              <span className="text-3xl mb-2">&laquo;</span>
            </PaginationLink>
          </PaginationItem>
          {/* Prev */}
          <PaginationItem>
            <PaginationLink
              href="#"
              aria-label="Previous Page"
              onClick={e => {
                e.preventDefault();
                if (currentPage > 1) onPageChange(currentPage - 1);
              }}
              className={cn('w-10 h-10', currentPage === 1 ? 'cursor-not-allowed opacity-50' : '')}
            >
              <span className="text-3xl mb-2">&lsaquo;</span>
            </PaginationLink>
          </PaginationItem>
          {/* Page Numbers */}
          {pageNumbers.map(page => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                aria-label={`Page ${page}`}
                onClick={e => {
                  e.preventDefault();
                  if (page !== currentPage) onPageChange(page);
                }}
                className={
                  cn(
                    'w-10 h-10 mx-2',
                    {
                      'font-bold text-center': page === currentPage,
                      'bg-white font-normal': page !== currentPage,
                    }
                  )
                }
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          {/* Next */}
          <PaginationItem>
            <PaginationLink
              href="#"
              aria-label="Next Page"
              onClick={e => {
                e.preventDefault();
                if (currentPage < pageCount) onPageChange(currentPage + 1);
              }}
              className={cn('w-10 h-10', currentPage === pageCount ? 'cursor-not-allowed opacity-50' : '')}
            >
              <span className="text-3xl mb-2">&rsaquo;</span>
            </PaginationLink>
          </PaginationItem>
          {/* Last */}
          <PaginationItem>
            <PaginationLink
              href="#"
              aria-label="Last Page"
              onClick={e => {
                e.preventDefault();
                if (currentPage < pageCount) onPageChange(pageCount);
              }}
              className={cn('w-10 h-10', currentPage === pageCount ? 'cursor-not-allowed opacity-50' : '')}
            >
              <span className="text-3xl mb-2">&raquo;</span>
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {/* Right: Items per page */}
      <div className="flex items-center gap-2 text-sm">
        <CustomSelect
          onValueChange={e => onPageSizeChange(Number(e))}
          value={`${itemsPerPage}`}
          className="text-md w-14 rounded border px-2"
          options={pageSizeOptions.map(size => ({
            value: String(size),
            label: String(size),
          }))}
        />
        <div className='text-md'>Items per page</div>
      </div>
    </div>
  );
}