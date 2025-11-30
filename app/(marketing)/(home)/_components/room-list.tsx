import { GradientButton } from '@/components/custom-button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'Akatsuki Rooms',
    language: 'English',
    isLive: true,
    listeners: 23,
  },
  {
    id: 2,
    name: 'Leaf Village Chat',
    language: 'English',
    isLive: true,
    listeners: 15,
  },
  {
    id: 3,
    name: 'Konoha Devs',
    language: 'Bangla',
    isLive: false,
    listeners: 8,
  },
  {
    id: 4,
    name: 'Anime Only Zone',
    language: 'English',
    isLive: true,
    listeners: 42,
  },
  {
    id: 5,
    name: 'Fullstack Warriors',
    language: 'English',
    isLive: true,
    listeners: 17,
  },
  {
    id: 6,
    name: 'Chill & Code',
    language: 'Bangla',
    isLive: false,
    listeners: 9,
  },
  {
    id: 7,
    name: 'Night Owls Room',
    language: 'English',
    isLive: true,
    listeners: 31,
  },
  {
    id: 8,
    name: 'UI/UX Hangout',
    language: 'English',
    isLive: false,
    listeners: 11,
  },
  {
    id: 9,
    name: 'Flutter Squad',
    language: 'English',
    isLive: true,
    listeners: 19,
  },
  {
    id: 10,
    name: 'NestJS Ninjas',
    language: 'English',
    isLive: true,
    listeners: 27,
  },
  {
    id: 11,
    name: 'React Room',
    language: 'English',
    isLive: false,
    listeners: 6,
  },
  {
    id: 12,
    name: 'Bangla Chitchat',
    language: 'Bangla',
    isLive: true,
    listeners: 35,
  },
  {
    id: 13,
    name: 'Dev Memes Only',
    language: 'English',
    isLive: true,
    listeners: 21,
  },
  {
    id: 14,
    name: 'Startup Lounge',
    language: 'English',
    isLive: false,
    listeners: 10,
  },
  {
    id: 15,
    name: 'Night Study Room',
    language: 'English',
    isLive: true,
    listeners: 29,
  },
  {
    id: 16,
    name: 'Gaming & Chill',
    language: 'English',
    isLive: true,
    listeners: 24,
  },
  {
    id: 17,
    name: 'Daily Standup',
    language: 'English',
    isLive: false,
    listeners: 5,
  },
  {
    id: 18,
    name: 'Product Builders',
    language: 'English',
    isLive: true,
    listeners: 18,
  },
  {
    id: 19,
    name: 'Remote Work Vibes',
    language: 'English',
    isLive: true,
    listeners: 14,
  },
  {
    id: 20,
    name: 'Focus Session',
    language: 'English',
    isLive: false,
    listeners: 7,
  },
];

const RoomList = () => {
  return (
    <div className="border border-purple-300 rounded-md p-4 bg-white space-y-4">
      <div className="flex gap-4 items-center">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-500" />
          <Input
            placeholder="Search rooms..."
            className="
              pl-9
              border-purple-300
              focus-visible:ring-2
              focus-visible:ring-purple-400
              focus-visible:ring-offset-0
              focus-visible:border-purple-500
              focus:border-purple-500
            "
          />
        </div>

        <Button className="bg-purple-400 hover:bg-purple-500">
          Create New Room
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-linear-to-br from-white to-purple-100 p-2 rounded-md border border-purple-300 space-y-8"
          >
            <div className="flex justify-between items-center">
              <Badge
                className="border border-purple-200 rounded-md text-purple-600"
                variant="outline"
              >
                {room.name}
              </Badge>
              <p className="text-xs text-purple-600">{room.language}</p>
              {room.isLive ? (
                <Badge className="px-4" variant="destructive">
                  Live
                </Badge>
              ) : (
                <Badge className="px-4" variant="outline">
                  Offline
                </Badge>
              )}
            </div>

            <div className="flex -space-x-4">
              <Avatar className="border border-purple-300 h-12 w-12">
                <AvatarImage src="/images/avatar1.png" />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
              <Avatar className="border border-purple-300 h-12 w-12">
                <AvatarImage src="/images/avatar2.png" />
                <AvatarFallback>SH</AvatarFallback>
              </Avatar>
              <Avatar className="border border-purple-300 h-12 w-12">
                <AvatarImage src="/images/avatar3.png" />
                <AvatarFallback>NM</AvatarFallback>
              </Avatar>
              <Avatar className="border border-purple-300 h-12 w-12">
                <AvatarImage src="/images/avatar3.png" />
                <AvatarFallback className="text-xs">
                  {room.listeners}+
                </AvatarFallback>
              </Avatar>
            </div>

            <div>
              <GradientButton className="w-full rounded-md py-1 text-sm">
                Join Room
              </GradientButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
