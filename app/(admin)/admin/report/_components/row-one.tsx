import {
  ClipboardClock,
  FlagOff,
  MailMinus,
  MailOpen,
  MailPlus,
  MessageSquareDot,
  ShieldBan,
} from 'lucide-react';
import MetricCard from '../../_components/metric-card';

const reportsMetricsData = [
  {
    title: 'Reports Resolved',
    value: 10,
    icon: <MessageSquareDot size={22} />,
    footerText: 'Last 30 days',
    footerBadge: '+34.5%',
  },
  {
    title: 'Pending Check',
    value: 200,
    icon: <ClipboardClock size={22} />,
    footerText: 'Last 30 days',
    footerBadge: '+34.5%',
  },
  {
    title: 'Banned Peoples',
    value: 45,
    icon: <FlagOff size={22} />,
    footerText: 'Last 30 days',
    footerBadge: '+34.5%',
  },
  {
    title: 'Banned IP Addresses',
    value: 200,
    icon: <ShieldBan size={22} />,
    footerText: 'Last 30 days',
    footerBadge: '+34.5%',
  },
];
const RowOne = () => {
  return (
    <>
      {reportsMetricsData.map((metric) => (
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
