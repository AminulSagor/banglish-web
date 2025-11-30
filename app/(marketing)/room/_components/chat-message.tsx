import React, { useEffect, useMemo, useRef } from 'react';
import MessageBubble from './message-bubble';
import { Message, User } from './types';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ChatMessagesProps {
  messages: Message[];
  currentUser: User;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  currentUser,
}) => {
  // Group messages by date
  const groupedMessages = useMemo(() => {
    const groups: Record<string, Message[]> = {};

    messages.forEach((message) => {
      const dateKey = message.timestamp.toDateString();
      if (!groups[dateKey]) groups[dateKey] = [];
      groups[dateKey].push(message);
    });

    // sort inside each day (optional)
    Object.values(groups).forEach((dayMessages) =>
      dayMessages.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
    );

    return groups;
  }, [messages]);

  const sortedDates = useMemo(
    () =>
      Object.keys(groupedMessages).sort(
        (a, b) => new Date(a).getTime() - new Date(b).getTime()
      ),
    [groupedMessages]
  );

  // Ref to the ScrollArea root
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  // Only scroll the chat viewport, not the page
  useEffect(() => {
    if (!scrollAreaRef.current) return;

    // shadcn ScrollArea uses a Radix viewport inside
    const viewport = scrollAreaRef.current.querySelector(
      '[data-radix-scroll-area-viewport]'
    ) as HTMLDivElement | null;

    if (!viewport) return;

    viewport.scrollTo({
      top: viewport.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages.length]); // run whenever a new message is added

  return (
    <div className="h-full">
      <ScrollArea className="h-full" ref={scrollAreaRef}>
        <div className="p-4 space-y-6">
          {sortedDates.map((date) => {
            const dayMessages = groupedMessages[date];

            return (
              <div key={date} className="space-y-1">
                {/* Date separator */}
                <div className="flex justify-center">
                  <div className="bg-gray-200 px-3 py-1 rounded-full text-xs text-gray-600">
                    {date === new Date().toDateString() ? 'Today' : date}
                  </div>
                </div>

                {/* Messages for this date */}
                {dayMessages.map((message, index) => {
                  const showAvatar =
                    index === dayMessages.length - 1 ||
                    dayMessages[index + 1]?.sender.id !== message.sender.id ||
                    dayMessages[index + 1]?.isOwn !== message.isOwn;

                  return (
                    <MessageBubble
                      key={message.id}
                      message={message}
                      showAvatar={showAvatar && !message.isOwn}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatMessages;
