import React from 'react';
import { Check, CheckCheck } from 'lucide-react';
import { Message } from './types';

interface MessageBubbleProps {
  message: Message;
  showAvatar: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  showAvatar,
}) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div
      className={`flex items-end space-x-2 ${
        message.isOwn ? 'justify-end' : 'justify-start'
      }`}
    >
      {/* Other user's avatar */}
      {!message.isOwn && showAvatar && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium">
            {message.sender.name.charAt(0)}
          </div>
        </div>
      )}

      {/* Message bubble */}
      <div
        className={`flex flex-col space-y-1 max-w-[70%] ${
          message.isOwn ? 'items-end' : 'items-start'
        }`}
      >
        {!message.isOwn && showAvatar && (
          <span className="text-xs text-gray-600 px-2">
            {message.sender.name}
          </span>
        )}

        <div
          className={`flex items-end space-x-2 ${
            message.isOwn ? 'flex-row-reverse space-x-reverse' : ''
          }`}
        >
          <div
            className={`px-4 py-2 rounded-2xl ${
              message.isOwn
                ? 'bg-blue-500 text-white rounded-br-md'
                : 'bg-white border border-gray-200 rounded-bl-md'
            }`}
          >
            <p className="text-sm">{message.content}</p>
          </div>

          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <span>{formatTime(message.timestamp)}</span>
            {message.isOwn && <CheckCheck className="w-3 h-3 text-blue-500" />}
          </div>
        </div>
      </div>

      {/* Current user's avatar (hidden but for spacing) */}
      {message.isOwn && <div className="w-8 h-8 flex-shrink-0" />}
    </div>
  );
};

export default MessageBubble;
