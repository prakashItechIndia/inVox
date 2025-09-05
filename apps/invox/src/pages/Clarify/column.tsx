import { ActionMenu } from "@/components/actionMenu";
import { StatusIcons } from "@/components/status";
import {
  ReactInvoiceDueIcon,
  ReactPdfIcon
} from "@shared/components/icons/invoice";
import { Checkbox } from "@shared/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import {
  formatTimestampOrHoursLeft,
  GetInvoiceResponse,
  truncateString
} from "shared";

export const Columns = (): ColumnDef<GetInvoiceResponse>[] => [
  {
    accessorKey: "checkbox",
    header: () => (
      <div className="text-md">
        <Checkbox className="border-dividerColor h-6 w-6" disabled={true} />
      </div>
    ),
    cell: () => (
      <div className="text-blueDark flex items-center gap-1 text-md">
        <Checkbox className="border-dividerColor h-6 w-6" disabled={true} />
      </div>
    )
  },
  {
    accessorKey: "fileName",
    header: () => <div className="text-md">File Name</div>,
    cell: ({ row }) => (
      <div className="text-blueDark  flex items-center text-md">
        {row.getValue("fileName") || "-"}
      </div>
    )
  },
  {
    accessorKey: "location",
    header: () => <div className="text-md">Location</div>,
    cell: ({ row }) => (
      <div className="text-blueDark  flex items-center text-md">
        {row.getValue("location") || "-"}
      </div>
    )
  },
  {
    accessorKey: "assignedon",
    header: () => <div className="text-md">Assigned On</div>,
    cell: ({ row }) => {
      const TimeStampHours = formatTimestampOrHoursLeft(
        row.getValue("assignedon")
      );
      return (
        <div
          className="text-blueDark  flex items-center text-md"
          title={TimeStampHours}
        >
          {TimeStampHours ? truncateString(TimeStampHours, 15) : "-"}
        </div>
      );
    }
  },
  {
    accessorKey: "dueon",
    header: () => <div className="text-md">Due on</div>,
    cell: ({ row }) => {
      const tempDate = formatTimestampOrHoursLeft(row.getValue("dueon"), true);
      const exists =
        tempDate && String(tempDate).toLowerCase().includes("hours");
      return (
        <div
          className={`flex text-md ${exists ? "bg-dueRed  gap-[0.3125rem] rounded max-w-fit" : ""}`}
        >
          <div
            className={`${exists ? "text-white leading-4 py-[0.25rem] p-2" : "text-blueDark"}  flex items-center text-md`}
          >
            {!exists && tempDate
              ? truncateString(tempDate, 15)
              : tempDate || "-"}
          </div>
          {exists && (
            <div className="flex justify-center items-center transform translate-y-px mr-2">
              <ReactInvoiceDueIcon />
            </div>
          )}
        </div>
      );
    }
  },
  {
    accessorKey: "filedetails",
    header: () => <div className="text-md">File Details</div>,
    cell: ({ row }) => {
      return (
        <div
          className={`flex justify-start content-center text-md gap-[0.3125rem]`}
        >
          <div className={`flex justify-center content-center text-md`}>
            <ReactPdfIcon />
          </div>
          <div className="text-blueDark  flex items-center text-md">
            {row.getValue("filedetails") || "-"}
          </div>
        </div>
      );
    }
  },
  {
    accessorKey: "status",
    header: () => <div className="text-md">Status</div>,
    cell: ({ row }) => {
      const status: string | undefined | null = row.getValue("status");

      return (
        <div
          className={`flex justify-start content-center items-center text-md gap-[0.3125rem]`}
        >
          <div className={`flex justify-center content-center text-md`}>
            {StatusIcons({ status }) || null}
          </div>
          <div className="text-blueDark  flex items-center text-md">
            {status || "-"}
          </div>
        </div>
      );
    }
  },
  {
    accessorKey: 'action',
    header: () => <div className="text-md"></div>,
    cell: () => (
      <div className="text-tableHeaderTextColor flex cursor-pointer items-center justify-end text-md font-normal">
        <ActionMenu />
      </div>
    ),
  }
];
