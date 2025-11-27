import { FlagOff, UserRoundCheck, UsersRound } from 'lucide-react';
import MetricCard from '../../_components/metric-card';

const usersMetricsData = [
  {
    title: 'Total Users',
    value: 10,
    icon: <UsersRound size={22} />,
    footerText: 'Last 30 days',
    footerBadge: '+34.5%',
  },
  {
    title: 'Verified Users',
    value: 200,
    icon: <UserRoundCheck size={22} />,
    footerText: 'Last 30 days',
    footerBadge: '+34.5%',
  },
  {
    title: 'Banned Users',
    value: 45,
    icon: <FlagOff size={22} />,
    footerText: 'Last 30 days',
    footerBadge: '+34.5%',
  },
];
const RowOne = () => {
  return (
    <>
      {usersMetricsData.map((metric) => (
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
