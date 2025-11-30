import React, { useState } from 'react';
import { CheckCheck, MoreVertical } from 'lucide-react';
import { Message } from './types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ReportMenu from './report-menu';

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

      {/* Bubble + Menu */}
      <div className="relative flex flex-col max-w-[70%]">
        {/* Sender name */}
        {!message.isOwn && showAvatar && (
          <span className="text-xs text-gray-600 px-2">
            {message.sender.name}
          </span>
        )}

        <div
          className={`flex items-start gap-1 ${
            message.isOwn ? 'flex-row-reverse' : ''
          }`}
        >
          {/* Message Bubble */}
          <div
            className={`px-4 py-2 rounded-2xl relative ${
              message.isOwn
                ? 'bg-blue-500 text-white rounded-br-md'
                : 'bg-white border border-gray-200 rounded-bl-md'
            }`}
          >
            <p className="text-sm leading-relaxed break-words">
              {message.content}
            </p>

            {/* Time + ticks INSIDE bubble */}
            <div
              className={`flex items-center gap-1 text-[10px] mt-1 opacity-80 ${
                message.isOwn ? 'justify-end' : 'justify-start'
              }`}
            >
              <span>{formatTime(message.timestamp)}</span>

              {message.isOwn && (
                <CheckCheck className="w-3 h-3 text-white opacity-80" />
              )}
            </div>
          </div>

          {/* 3-dot menu ONLY for other user's messages */}
          {!message.isOwn && <ReportMenu />}
        </div>
      </div>

      {/* Placeholder for own message alignment */}
      {message.isOwn && <div className="w-8 h-8 flex-shrink-0" />}
    </div>
  );
};

export default MessageBubble;
