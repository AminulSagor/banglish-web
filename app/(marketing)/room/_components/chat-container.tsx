'use client';

import React, { useState, useRef, useEffect } from 'react';
import ChatHeader from './chat-header';
import ChatMessages from './chat-message';
import ChatInput from './chat-input';
import { Message, User } from './types';

interface ChatContainerProps {
  roomId: string;
  currentUser: User;
}

const ChatContainer: React.FC<ChatContainerProps> = ({
  roomId,
  currentUser,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Base 5 messages you already had
    const mockMessages: Message[] = [
      {
        id: '1',
        content: 'Hey everyone! 👋',
        sender: {
          id: '2',
          name: 'Alice Johnson',
          avatar: '/avatars/alice.jpg',
        },
        timestamp: new Date(Date.now() - 3600000),
        type: 'text',
      },
      {
        id: '2',
        content: 'Hello! How are you all doing?',
        sender: { id: '3', name: 'Bob Smith', avatar: '/avatars/bob.jpg' },
        timestamp: new Date(Date.now() - 1800000),
        type: 'text',
      },
      {
        id: '3',
        content: "I'm doing great! Just joined the room 🎉",
        sender: currentUser,
        timestamp: new Date(Date.now() - 600000),
        type: 'text',
        isOwn: true,
      },
      {
        id: '4',
        content: 'https://example.com/image.jpg',
        sender: {
          id: '2',
          name: 'Alice Johnson',
          avatar: '/avatars/alice.jpg',
        },
        timestamp: new Date(Date.now() - 1200000),
        type: 'image',
      },
      {
        id: '5',
        content: 'How are you doing today?',
        sender: {
          id: '3',
          name: 'Bob Smith',
          avatar: '/avatars/bob.jpg',
        },
        timestamp: new Date(Date.now() - 2400000),
        type: 'file',
      },
    ];

    // Some sample senders to rotate through
    const senders = [
      {
        id: '2',
        name: 'Alice Johnson',
        avatar: '/avatars/alice.jpg',
      },
      {
        id: '3',
        name: 'Bob Smith',
        avatar: '/avatars/bob.jpg',
      },
      currentUser, // use current user as one of the senders
    ];

    const extraMessages: Message[] = Array.from({ length: 200 }, (_, index) => {
      const i = index + 6; // ids start from 6
      const sender = senders[index % senders.length];

      // Rotate message types
      const types: Message['type'][] = ['text', 'image', 'file'];
      const type = types[index % types.length];

      let content: string;
      if (type === 'text') {
        content = `Mock message #${i} from ${sender.name}`;
      } else if (type === 'image') {
        content = `https://picsum.photos/seed/${i}/400/300`;
      } else {
        content = `Mock file #${i}.pdf`;
      }

      const isOwn = sender.id === currentUser.id;

      return {
        id: String(i),
        content,
        sender,
        timestamp: new Date(Date.now() - i * 60_000), // spread out by 1 minute each
        type,
        ...(isOwn ? { isOwn: true } : {}),
      };
    });

    setMessages([...mockMessages, ...extraMessages]);
  }, [currentUser]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: currentUser,
      timestamp: new Date(),
      type: 'text',
      isOwn: true,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="flex flex-col h-[80vh] bg-gray-50">
      <ChatHeader
        roomId={roomId}
        isConnected={isConnected}
        participantCount={3}
      />

      <div className="flex-1 overflow-hidden">
        <ChatMessages messages={messages} currentUser={currentUser} />
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
