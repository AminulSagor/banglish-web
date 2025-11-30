import React from 'react';
import RecentVisits from '../../(home)/_components/recent-visits';
import { Button } from '@/components/ui/button';
import { ArrowLeftCircle } from 'lucide-react';
import Link from 'next/link';
import ChatContainer from '../_components/chat-container';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

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
        <Button variant="outline" size="sm" asChild>
          <Link href="/">
            <ArrowLeftCircle />
            Go Back To Home
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-6 gap-4">
        <div className=" col-span-4 border border-purple-300 rounded-md overflow-hidden ">
          <ChatContainer
            roomId={id}
            currentUser={{ id: '1', name: 'John Doe' }}
          />
        </div>
        <div className="col-span-2 space-y-4">
          <Card className="border-purple-300 rounded-md">
            <CardHeader>
              <CardTitle>Room Info</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DynamicRoomPage;
