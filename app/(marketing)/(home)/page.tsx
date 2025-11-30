import RecentVisits from "./_components/recent-visits";
import RoomList from "./_components/room-list";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-4">
      <RecentVisits />
      <RoomList />
    </div>
  );
}
