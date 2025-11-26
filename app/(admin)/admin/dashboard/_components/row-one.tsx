import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { MailCheck, UserRoundCheck, UsersRound } from 'lucide-react';
const RowOne = () => {
  return (
    <>
      {' '}
      <Card>
        <CardHeader className="flex items-center">
          <span>
            <UserRoundCheck size={22} className="" />
          </span>
          <h3 className="text-lg font-semibold">Active Users</h3>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-purple-600">10</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">Last 30 days</p>
          <Badge variant={'secondary'} className="px-4">
            +34.5%
          </Badge>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="flex items-center">
          <span>
            <UsersRound size={22} className="" />
          </span>
          <h3 className="text-lg font-semibold">Total Users</h3>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-purple-600">200</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">Last 30 days</p>
          <Badge variant={'secondary'} className="px-4">
            +34.5%
          </Badge>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="flex items-center">
          <span>
            <MailCheck size={22} className="" />
          </span>
          <h3 className="text-lg font-semibold">Active Rooms</h3>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-purple-600">45</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">Last 30 days</p>
          <Badge variant={'secondary'} className="px-4">
            +34.5%
          </Badge>
        </CardFooter>
      </Card>
      <Card></Card>
    </>
  );
};

export default RowOne;
