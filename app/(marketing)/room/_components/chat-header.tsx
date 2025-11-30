import React from 'react';
import { Users, Wifi, WifiOff, Video, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  roomId: string;
  isConnected: boolean;
  participantCount: number;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  roomId,
  isConnected,
  participantCount,
}) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div
              className={`w-3 h-3 rounded-full ${
                isConnected ? 'bg-green-500' : 'bg-red-500'
              }`}
            />
            <span className="text-sm text-gray-600">
              {isConnected ? 'Connected' : 'Disconnected'}
            </span>
          </div>

          <div className="flex items-center space-x-1 text-gray-600">
            <Users className="w-4 h-4" />
            <span className="text-sm">{participantCount} online</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>Voice</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="flex items-center space-x-2"
          >
            <Video className="w-4 h-4" />
            <span>Video</span>
          </Button>
        </div>
      </div>

      <h1 className="text-xl font-semibold text-gray-900 mt-2">
        Room: {roomId}
      </h1>
    </div>
  );
};

export default ChatHeader;
