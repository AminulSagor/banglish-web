import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Image from 'next/image';
import React from 'react';

const RoomInfo = () => {
  return (
    <Card className="border-purple-300 rounded-md">
      <CardHeader>
        <CardTitle>Room Info</CardTitle>
        <CardDescription className="text-purple-600 font-semibold">
          English
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-purple-600 font-medium text-base">Topic:</h3>
            <p className="text-purple-600 font-medium text-sm">#Movie</p>
          </div>
          <div>
            <h3 className="text-purple-600 font-medium text-base">Member:</h3>
            <p className="text-purple-600 font-medium text-sm">Joined(15/50)</p>
          </div>
        </div>
        <div>
          <h3 className="text-purple-600 font-medium text-base">Photos</h3>
          <div>
            <ScrollArea className="w-full py-3">
              <div className="flex gap-2">
                <div className="w-20 aspect-square relative">
                  <Image
                    src={'/blog/blog-1.jpg'}
                    fill
                    alt="Image"
                    className="object-cover"
                  />
                </div>
                <div className="w-20 aspect-square relative">
                  <Image
                    src={'/blog/blog-1.jpg'}
                    fill
                    alt="Image"
                    className="object-cover"
                  />
                </div>
                <div className="w-20 aspect-square relative">
                  <Image
                    src={'/blog/blog-1.jpg'}
                    fill
                    alt="Image"
                    className="object-cover"
                  />
                </div>
                <div className="w-20 aspect-square relative">
                  <Image
                    src={'/blog/blog-1.jpg'}
                    fill
                    alt="Image"
                    className="object-cover"
                  />
                </div>
                <div className="w-20 aspect-square relative">
                  <Image
                    src={'/blog/blog-1.jpg'}
                    fill
                    alt="Image"
                    className="object-cover"
                  />
                </div>
                <div className="w-20 aspect-square relative">
                  <Image
                    src={'/blog/blog-1.jpg'}
                    fill
                    alt="Image"
                    className="object-cover"
                  />
                </div>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>

        {/* <div>
          <h3 className="text-purple-600 font-medium text-base">Files</h3>
          <div>
            <ScrollArea className="h-32  py-3">
              <div className="space-y-2 px-3 flex flex-col">
                <a
                  href="https://example.com/file1.pdf"
                  target="_blank"
                  className="text-blue-600 underline text-sm"
                >
                  file1.pdf
                </a>

                <a
                  href="https://example.com/image.png"
                  target="_blank"
                  className="text-blue-600 underline text-sm"
                >
                  image.png
                </a>

                <a
                  href="https://example.com/document.docx"
                  target="_blank"
                  className="text-blue-600 underline text-sm"
                >
                  document.docx
                </a>

                <a
                  href="https://example.com/video.mp4"
                  target="_blank"
                  className="text-blue-600 underline text-sm"
                >
                  video.mp4
                </a>
                <a
                  href="https://example.com/video.mp4"
                  target="_blank"
                  className="text-blue-600 underline text-sm"
                >
                  video.mp4
                </a>

                <a
                  href="https://example.com/document.docx"
                  target="_blank"
                  className="text-blue-600 underline text-sm"
                >
                  document.docx
                </a>
              </div>

              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </div>
        </div> */}

        <div>
          <h3 className="text-purple-600 font-medium text-base">Links</h3>
          <div>
            <ScrollArea className="h-32  py-3">
              <div className="space-y-2 px-3 flex flex-col">
                <a
                  href="https://example.com/dashboard"
                  target="_blank"
                  className="text-blue-600 underline text-sm"
                >
                  Dashboard Overview
                </a>

                <a
                  href="https://example.com/profile-settings"
                  target="_blank"
                  className="text-blue-600 underline text-sm"
                >
                  Profile Settings
                </a>

                <a
                  href="https://example.com/support"
                  target="_blank"
                  className="text-blue-600 underline text-sm"
                >
                  Customer Support
                </a>

                <a
                  href="https://example.com/get-started"
                  target="_blank"
                  className="text-blue-600 underline text-sm"
                >
                  Getting Started Guide
                </a>

                <a
                  href="https://example.com/api-docs"
                  target="_blank"
                  className="text-blue-600 underline text-sm"
                >
                  API Documentation
                </a>

                <a
                  href="https://example.com/terms"
                  target="_blank"
                  className="text-blue-600 underline text-sm"
                >
                  Terms & Conditions
                </a>

                <a
                  href="https://example.com/privacy"
                  target="_blank"
                  className="text-blue-600 underline text-sm"
                >
                  Privacy Policy
                </a>
              </div>

              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomInfo;
