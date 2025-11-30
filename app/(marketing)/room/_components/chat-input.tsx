'use client';

import React, { useState, useRef } from 'react';
import { Send, Smile, Paperclip, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);

    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        120
      )}px`;
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 p-4">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        {/* Attachment button */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-gray-500"
        >
          <Paperclip className="w-5 h-5" />
        </Button>

        {/* Message input */}
        <div className="flex-1 relative ">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="w-full resize-none border border-gray-300 rounded-md px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent  "
            rows={2}
          />

          {/* Emoji button */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-2 bottom-2 text-gray-500"
          >
            <Smile className="w-5 h-5" />
          </Button>
        </div>

        {/* Voice/Send buttons */}
        {message.trim() ? (
          <Button
            type="submit"
            size="icon"
            className="bg-blue-500 hover:bg-blue-600"
          >
            <Send className="w-5 h-5" />
          </Button>
        ) : (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-gray-500"
          >
            <Mic className="w-5 h-5" />
          </Button>
        )}
      </form>
    </div>
  );
};

export default ChatInput;
