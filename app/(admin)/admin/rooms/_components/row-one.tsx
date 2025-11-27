import { MailMinus, MailOpen, MailPlus } from 'lucide-react';
import MetricCard from '../../_components/metric-card';

const roomsMetricsData = [
  {
    title: 'Total Rooms',
    value: 10,
    icon: <MailOpen size={22} />,
    footerText: 'Last 30 days',
    footerBadge: '+34.5%',
  },
  {
    title: 'Active Rooms',
    value: 200,
    icon: <MailPlus size={22} />,
    footerText: 'Last 30 days',
    footerBadge: '+34.5%',
  },
  {
    title: 'Banned Rooms',
    value: 45,
    icon: <MailMinus size={22} />,
    footerText: 'Last 30 days',
    footerBadge: '+34.5%',
  },
];
const RowOne = () => {
  return (
    <>
      {roomsMetricsData.map((metric) => (
        <MetricCard
          key={metric.title}
          footerBadge={metric.footerBadge}
          footerText={metric.footerText}
          icon={metric.icon}
          title={metric.title}
          value={metric.value}
        />
      ))}
    </>
  );
};

export default RowOne;
