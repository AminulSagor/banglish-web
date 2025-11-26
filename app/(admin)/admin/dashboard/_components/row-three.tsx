import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { EyeIcon } from 'lucide-react';

// ---------------------
// Dynamic Report Data
// ---------------------
const reports = [
  {
    id: 1,
    type: 'Spam & Phishing',
    user: 'anika_r',
    message:
      'This user just joined the room, posted a weird crypto link without .....',
  },
  {
    id: 2,
    type: 'Harassment & Bullying',
    user: 'david_jones',
    message:
      "I was in the 'Intermediate Chat' room and politely corrected this ....",
  },
  {
    id: 3,
    type: 'NSFW / Inappropriate Content',
    user: 'sofia_d',
    message:
      'This person joined our video call with their camera on and was ...',
  },

  {
    id: 4,
    type: 'Harassment & Bullying',
    user: 'nitin_la',
    message:
      "I was in the 'Intermediate Chat' room and politely corrected this ....",
  },
];

// ---------------------
// Color Map Based on Type
// ---------------------
const typeColorMap: Record<
  string,
  { bg: string; border: string; dot: string }
> = {
  'Spam & Phishing': {
    bg: 'bg-red-200/30',
    border: 'border-red-400/30',
    dot: 'bg-red-400',
  },
  'Harassment & Bullying': {
    bg: 'bg-purple-200/30',
    border: 'border-purple-400/30',
    dot: 'bg-purple-400',
  },
  'NSFW / Inappropriate Content': {
    bg: 'bg-gray-200/30',
    border: 'border-gray-400/30',
    dot: 'bg-gray-400',
  },
};

const RowThree = () => {
  return (
    <>
      {/* Left Table */}
      <Card className="col-span-3 self-start">
        <CardHeader>
          <CardTitle className="text-xl">Latest Registration</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Time</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>USA</TableCell>
                <TableCell>2 hours ago</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="outline">
                    <EyeIcon />
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Sarah Kim</TableCell>
                <TableCell>South Korea</TableCell>
                <TableCell>5 hours ago</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="outline">
                    <EyeIcon />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Right Reports */}
      <Card className="col-span-2 self-start">
        <CardHeader>
          <CardTitle className="text-xl">Recent Reports</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          {reports.map((report) => {
            const colors = typeColorMap[report.type];

            return (
              <div
                key={report.id}
                className={`${colors.bg} ${colors.border} border-2 rounded-sm px-4 py-2`}
              >
                <div className="flex items-center gap-2">
                  {/* Dot */}
                  <div
                    className={`w-4 h-4 rounded-full shrink-0 ${colors.dot}`}
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <p className="line-clamp-1">
                      <span className="font-semibold">Report Type :</span>&nbsp;
                      <span className="font-medium">{report.type}</span>
                    </p>
                    <p>
                      <span className="font-semibold">User :</span>&nbsp;
                      <span>{report.user}</span>
                    </p>
                    <p className="line-clamp-1 text-sm">{report.message}</p>
                  </div>

                  {/* Button */}
                  <Button
                    size="sm"
                    variant="destructive"
                    className="hover:cursor-pointer"
                  >
                    <EyeIcon />
                  </Button>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
};

export default RowThree;
