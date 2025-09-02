import DataCard from "@/components/data-card";
import { SectionHeaderWithDescription } from "@/components/title-with-des";
import { ReactArrowUpIcon, ReactCutIcon, ReactDoccTextIcon, ReactHourLoadingIcon, ReactRadarIcon } from "@shared/components/icons/dashboard";
import { InvoxUserType } from "@shared/lib/utils";
import { Verifier } from "../Verifier";
interface Props {
  portalType: InvoxUserType;
}
export const Dashboard = (props: Props) => {
  const { portalType } = props;

  const getWidgetData = () => {
    return [
      {
        title: 'Files Pending Verification',
        value: '100',
        icon: <ReactDoccTextIcon />
      },
      {
        title: 'Files Reaching Due Date',
        value: '23',
        icon: <ReactRadarIcon />
      },
      {
        title: 'Files in Priority list',
        value: '58',
        icon: <ReactArrowUpIcon />
      },
      {
        title: 'Your Verification Speed Per file',
        value: '3.5 Mins',
        icon: <ReactHourLoadingIcon />
      }
    ]
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
            icon: <ReactRadarIcon />,
          },
          {
            title: 'Files in Priority list',
            value: '58',
            icon: <ReactArrowUpIcon />
          },
          {
            title: 'Your Verification Speed Per file',
            value: '3.5 Mins',
            icon: <ReactHourLoadingIcon />
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
          <DataCard isLoading={false} isbordered={getWidgetData()?.length - 1 !== index} key={index} label='' description={item.title} amount={item.value} icon={item.icon} />
        ))}
      </div>
      <Verifier isHiddenHeader={true} />
    </div>
  );
}