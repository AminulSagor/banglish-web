'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { MoreVertical, ImageIcon, X } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const REPORT_TYPES = [
  'Spam or Scam',
  'Harassment or Bullying',
  'Hate Speech',
  'Inappropriate Content',
  'Others',
];

const ReportMenu = () => {
  const [selectedType, setSelectedType] = useState('');
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const handleScreenshotUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setScreenshot(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-1 rounded-full hover:bg-purple-100 transition">
          <MoreVertical size={16} />
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-sm space-y-4 border border-purple-300 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-base text-purple-700">
            Report Message
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-3">
          {/* Report Types */}
          <div className="flex flex-col gap-2">
            {REPORT_TYPES.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? 'default' : 'outline'}
                className={`justify-start border-purple-300  hover:bg-purple-50 ${
                  selectedType === type
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : ''
                }`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </Button>
            ))}
          </div>

          {/* Screenshot Upload */}
          <div className="space-y-2 mt-3">
            <p className="text-sm font-medium text-purple-700">
              Attach Screenshot (optional)
            </p>

            <label className="flex items-center gap-3 border border-purple-300 rounded-md p-3 cursor-pointer hover:bg-purple-50 transition">
              <ImageIcon size={18} />
              <span className="text-sm ">Upload Screenshot</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleScreenshotUpload}
              />
            </label>

            {/* Screenshot Preview */}
            {screenshot && (
              <div className="relative w-full border border-purple-300 rounded-md overflow-hidden">
                <img
                  src={screenshot}
                  alt="screenshot"
                  className="w-full h-auto"
                />
                <button
                  className="absolute top-1 right-1 bg-white rounded-full p-1 shadow"
                  onClick={() => setScreenshot(null)}
                >
                  <X size={14} className="text-purple-600" />
                </button>
              </div>
            )}
          </div>

          {/* Textarea */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-purple-700">
              Additional Details
            </p>
            <Textarea
              placeholder="Write something..."
              className="min-h-[100px] border-purple-300 focus:border-purple-500 focus:ring-purple-200 focus-visible:border-purple-500 focus-visible:ring-purple-300 focus-visible:ring-[1px] resize-none"
            />
          </div>
        </ScrollArea>

        {/* Submit */}
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white border border-purple-700">
          Submit Report
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ReportMenu;
