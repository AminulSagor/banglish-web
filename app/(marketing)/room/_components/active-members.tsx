import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import React from 'react';

const ActiveMembers = () => {
  return (
    <Card className="border-purple-300">
      <CardHeader>
        <CardTitle className=" text-base">Active Members</CardTitle>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-80">
          <div className="flex flex-col gap-3 pr-3">
            {/* Dummy Active Members */}
            {[
              'Siam Ahmed',
              'John Doe',
              'Sarah Khan',
              'Michael Lee',
              'Ariana Smith',
              'David Miller',
              'Emily Wilson',
              'Chris Brown',
            ].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-2 border rounded-md bg-white shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center font-medium">
                  {name.charAt(0)}
                </div>
                <span className="text-sm text-gray-700">{name}</span>
              </div>
            ))}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ActiveMembers;
