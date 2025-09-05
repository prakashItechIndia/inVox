import DataCard from "@/components/data-card"; // Card component for dashboard stats
import { SectionHeaderWithDescription } from "@/components/title-with-des"; // Header with title and description
import {
  ReactArrowUpIcon,
  ReactCutIcon,
  ReactDoccTextIcon,
  ReactHourLoadingIcon,
  ReactRadarIcon,
} from "@shared/components/icons/dashboard"; // Dashboard icons
import { InvoxUserType } from "@shared/lib/utils"; // Enum for user types
import { Verifier } from "../Verifier"; // Verifier component

// Props interface for Dashboard component
interface Props {
  portalType: InvoxUserType; // Type of user portal
}

// Dashboard component
export const Dashboard = (props: Props) => {
  const { portalType } = props; // Destructure portalType from props

  // Function to get widget data based on user type
  const getWidgetData = () => {
    switch (portalType) {
      case InvoxUserType.verifier:
        // Data for verifier user
        return [
          {
            title: "Files Pending Verification",
            value: "100",
            icon: <ReactDoccTextIcon />,
          },
          {
            title: "Files Reaching Due Date",
            value: "23",
            icon: <ReactRadarIcon />,
          },
          {
            title: "Files in Priority list",
            value: "58",
            icon: <ReactArrowUpIcon />,
          },
          {
            title: "Your Verification Speed Per file",
            value: "3.5 Mins",
            icon: <ReactHourLoadingIcon />,
          },
        ];
      case InvoxUserType.indexer:
        // Data for indexer user
        return [
          {
            title: "Files Pending Indexing",
            value: "1,234",
            icon: <ReactCutIcon />,
          },
          {
            title: "Files Reaching Due Date",
            value: "56",
            icon: <ReactRadarIcon />,
          },
          {
            title: "Files in Priority list",
            value: "2.1 Mins",
            icon: <ReactArrowUpIcon />,
          },
          {
            title: "Your Indexing Speed Per file",
            value: "2.1 Mins",
            icon: <ReactHourLoadingIcon />,
          },
        ];
      default:
        // Default data (same as verifier)
        return [
          {
            title: "Files Pending Verification",
            value: "100",
            icon: <ReactDoccTextIcon />,
          },
          {
            title: "Files Reaching Due Date",
            value: "23",
            icon: <ReactRadarIcon />,
          },
          {
            title: "Files in Priority list",
            value: "58",
            icon: <ReactArrowUpIcon />,
          },
          {
            title: "Your Verification Speed Per file",
            value: "3.5 Mins",
            icon: <ReactHourLoadingIcon />,
          },
        ];
    }
  };

  // Store widget data to avoid multiple calls
  const widgetData = getWidgetData();

  return (
    <div className="bg-white min-h-screen space-y-6">
      {/* Section header with greeting and description */}
      <SectionHeaderWithDescription
        className="p-8"
        titleClassName="text-2xl font-semibold"
        title={"Hello, User!"}
        description={"Welcome back to your portal..."}
      />
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 !m-0">
        {/* Render DataCard for each widget item */}
        {widgetData.map((item, index) => (
          <DataCard
            isLoading={false} // No loading state
            isbordered={widgetData.length - 1 !== index} // Add border except for last card
            key={index} // Unique key for each card
            label="" // No label
            description={item.title} // Card description
            amount={item.value} // Card value
            icon={item.icon} // Card icon
          />
        ))}
      </div>
      {/* Verifier component, header hidden */}
      <Verifier isHiddenHeader={true} />
    </div>
  );
};
