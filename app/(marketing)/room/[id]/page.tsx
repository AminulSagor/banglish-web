import { Button } from '@/components/ui/button';
import { ArrowLeftCircle } from 'lucide-react';
import Link from 'next/link';
import RecentVisits from '../../(home)/_components/recent-visits';
import ActiveMembers from '../_components/active-members';
import ChatContainer from '../_components/chat-container';
import RoomInfo from '../_components/room-info';

const DynamicRoomPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <div className="max-w-7xl mx-auto space-y-4">
      <RecentVisits />
      <div>
        <Button
          variant="outline"
          size="sm"
          className="bg-purple-300 border border-purple-400 hover:bg-purple-200 hover:border-purple-400"
          asChild
        >
          <Link href="/">
            <ArrowLeftCircle />
            Go Back To Home
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-6 gap-4">
        <div className=" col-span-4 self-start border border-purple-300 rounded-md overflow-hidden ">
          <ChatContainer
            roomId={id}
            currentUser={{ id: '1', name: 'John Doe' }}
          />
        </div>
        <div className="col-span-2 space-y-4">
          <RoomInfo />
          <ActiveMembers />
        </div>
      </div>
    </div>
  );
};

export default DynamicRoomPage;
