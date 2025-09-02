import DataCard from "@/components/data-card";
import { SectionHeaderWithDescription } from "@/components/title-with-des";
import { ReactArrowUpIcon, ReactCutIcon, ReactDoccTextIcon, ReactHourLoadingIcon, ReactRadarIcon } from "@shared/components/icons/dashboard";
import { InvoxUserType } from "@shared/lib/utils";
import { LucideIceCreamCone } from "lucide-react";
import { Verifier } from "../Verifier";

  // const dashboardStash = [
  //   {
  //     title: 'Organisations Using iNvox',
  //     value: '100',
  //     icon: <LucideIceCreamCone />
  //   },
  //   {
  //     title: 'Organisation’s Subscription About to End',
  //     value: '23',
  //     icon: <LucideIceCreamCone />,
  //     amountDescription: 'Organisation’s'
  //   },
  //   {
  //     title: 'Premium Users',
  //     value: '58',
  //     icon: <LucideIceCreamCone />
  //   },
  //   {
  //     title: 'Avg. AI Processing speed',
  //     value: '3.5 Mins',
  //     icon: <LucideIceCreamCone />
  //   }
  // ]



  interface Props {
  portalType: InvoxUserType;
}
export const Dashboard = ( props:Props) => {
  const { portalType } = props;

const getWidgetData = () => {
    switch (portalType) {
      case InvoxUserType.verifier:
        return [
          {
            title: 'Files Pending Verification',
            value: '100',
            icon: <ReactDoccTextIcon />
          },
          {
            title: 'Files Reaching Due Date',
            value: '23',
            icon: <LucideIceCreamCone />,
            amountDescription: 'Organisation’s'
          },
          {
            title: 'Files in Priority list',
            value: '58',
            icon: <LucideIceCreamCone />
          },
          {
            title: 'Your Verification Speed Per file',
            value: '3.5 Mins',
            icon: <LucideIceCreamCone />
          }
        ]
      case InvoxUserType.indexer:
        return [
          {
            title: 'Files Pending Indexing',
            value: '1,234',
            icon: <ReactCutIcon />
          },
          {
            title: 'Files Reaching Due Date',
            value: '56',
            icon: <ReactRadarIcon />
          },
          {
            title: 'Files in Priority list',
            value: '2.1 Mins',
            icon: <ReactArrowUpIcon />
          },
          {
            title: 'Your Indexing Speed Per file',
            value: '2.1 Mins',
            icon: <ReactHourLoadingIcon />
          }
        ]
        default:
          return []
    }
}

  return (
    <div className="bg-white min-h-screen space-y-6">
      <SectionHeaderWithDescription
        className="p-8"
        titleClassName="text-2xl font-semibold"
        title={'Hello, User!'}
        description={'Welcome back to your verify portal...'}
      />
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 !m-0">
        {getWidgetData()?.map((item, index) => (
          <DataCard amountDescription={item.amountDescription} isbordered={getWidgetData()?.length - 1 !== index} key={index} label='' description={item.title} amount={item.value} icon={item.icon} />
        ))}
      </div>
      <Verifier isHiddenHeader={true} />
    </div>
  );
}