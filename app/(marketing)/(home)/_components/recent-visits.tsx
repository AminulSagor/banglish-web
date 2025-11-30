import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const RecentVisits = () => {
  const visits = [
    { id: 1, name: "Ninja Hatori", avatar: "/images/avatar1.png" },
    { id: 2, name: "Shinchan", avatar: "/images/avatar2.png" },
    { id: 3, name: "Doraemon", avatar: "/images/avatar3.png" },
    { id: 4, name: "Nobita Nobi", avatar: "/images/avatar4.png" },
    { id: 5, name: "Sunio Honekawa", avatar: "/images/avatar5.png" },
    { id: 6, name: "Gian Goda", avatar: "/images/avatar6.png" },
    { id: 7, name: "Minnie Mouse", avatar: "/images/avatar7.png" },
    { id: 8, name: "Mickey Mouse", avatar: "/images/avatar8.png" },
    { id: 9, name: "Donald Duck", avatar: "/images/avatar9.png" },
    { id: 10, name: "Goofy", avatar: "/images/avatar10.png" },
    { id: 11, name: "Tom Cat", avatar: "/images/avatar11.png" },
    { id: 12, name: "Jerry Mouse", avatar: "/images/avatar12.png" },
    { id: 13, name: "Ben Tennyson", avatar: "/images/avatar13.png" },
    { id: 14, name: "Goku", avatar: "/images/avatar14.png" },
    { id: 15, name: "Vegeta", avatar: "/images/avatar15.png" },
    { id: 16, name: "Ash Ketchum", avatar: "/images/avatar16.png" },
    { id: 17, name: "Pikachu", avatar: "/images/avatar17.png" },
    { id: 18, name: "Homer Simpson", avatar: "/images/avatar18.png" },
    { id: 19, name: "Bart Simpson", avatar: "/images/avatar19.png" },
    { id: 20, name: "SpongeBob", avatar: "/images/avatar20.png" },
    { id: 21, name: "Patrick Star", avatar: "/images/avatar21.png" },
    { id: 22, name: "Scooby Doo", avatar: "/images/avatar22.png" },
    { id: 23, name: "Shaggy Rogers", avatar: "/images/avatar23.png" },
    { id: 24, name: "Phineas Flynn", avatar: "/images/avatar24.png" },
    { id: 25, name: "Ferb Fletcher", avatar: "/images/avatar25.png" },
    { id: 26, name: "Jimmy Neutron", avatar: "/images/avatar26.png" },
    { id: 27, name: "Timmy Turner", avatar: "/images/avatar27.png" },
    { id: 28, name: "Jake Long", avatar: "/images/avatar28.png" },
    { id: 29, name: "Avatar Aang", avatar: "/images/avatar29.png" },
    { id: 30, name: "Zuko", avatar: "/images/avatar30.png" },
  ];

  const truncate = (str: string, len = 6) =>
    str.length > len ? str.slice(0, len) + "..." : str;

  return (
    <div className="bg-white border p-4 rounded-md border-purple-300">
      <h3 className="text-purple-600 font-medium">Recently Visits</h3>

      <ScrollArea className="w-full mt-2">
        <div className="flex gap-2 pb-2">
          {visits.map((user) => (
            <div key={user.id} className="flex flex-col items-center">
              <Avatar className="w-16 h-16">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>
                  {user.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <p className="text-xs mt-2 text-purple-600">
                {truncate(user.name)}
              </p>
            </div>
          ))}
        </div>
        <div className="py-2"></div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default RecentVisits;
