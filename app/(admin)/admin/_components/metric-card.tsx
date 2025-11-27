import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

interface Props {
  title: string;
  value: number;
  icon: React.ReactNode;
  footerText: string;
  footerBadge: string;
}

const MetricCard = ({ title, footerBadge, footerText, icon, value }: Props) => {
  return (
    <Card>
      <CardHeader className="flex items-center">
        <span>{icon}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-purple-600">{value}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-sm text-muted-foreground">{footerText}</p>
        <Badge variant={'secondary'} className="px-4">
          {footerBadge}
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default MetricCard;
