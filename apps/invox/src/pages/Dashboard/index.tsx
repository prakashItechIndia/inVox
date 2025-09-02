import DataCard from "@/components/data-card";
import { LucideIceCreamCone } from "lucide-react";
import { Verifier } from "../Verifier";
import { SectionHeaderWithDescription } from "@/components/title-with-des";

export const Dashboard = () => {
  const dashboardStash = [
    {
      title: 'Organisations Using iNvox',
      value: '100',
      icon: <LucideIceCreamCone />
    },
    {
      title: 'Organisation’s Subscription About to End',
      value: '23',
      icon: <LucideIceCreamCone />,
      amountDescription: 'Organisation’s'
    },
    {
      title: 'Premium Users',
      value: '58',
      icon: <LucideIceCreamCone />
    },
    {
      title: 'Avg. AI Processing speed',
      value: '3.5 Mins',
      icon: <LucideIceCreamCone />
    }
  ]
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
        {dashboardStash?.map((item, index) => (
          <DataCard amountDescription={item.amountDescription} isbordered={dashboardStash?.length - 1 !== index} key={index} label='' description={item.title} amount={item.value} icon={item.icon} />
        ))}
      </div>
      <Verifier isHiddenHeader={true} />
    </div>
  );
}