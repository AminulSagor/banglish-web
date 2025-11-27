'use client';
import { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TrashIcon, Search, EyeIcon, X, XIcon } from 'lucide-react';
import { rooms } from '@/data/rooms';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { reportsData } from '@/data/reports';
import Image from 'next/image';

const users = [
  {
    id: 'BD-001',
    name: 'Arun Jyoti Mondal',
    email: 'arun001@example.com',
    avatar: '',
  },
  {
    id: 'BD-002',
    name: 'Siam Rahman',
    email: 'siam2025@example.com',
    avatar: '',
  },
  {
    id: 'BD-003',
    name: 'Jannat Akter',
    email: 'jannat@example.com',
    avatar: '',
  },
  {
    id: 'BD-004',
    name: 'Rafiul Islam',
    email: 'rafiul@example.com',
    avatar: '',
  },
  {
    id: 'BD-005',
    name: 'Tonmoy Hasan',
    email: 'tonmoy@example.com',
    avatar: '',
  },
  {
    id: 'BD-006',
    name: 'Shamim Hossain',
    email: 'shamim@example.com',
    avatar: '',
  },
  { id: 'BD-007', name: 'Niloy Das', email: 'niloy@example.com', avatar: '' },
  { id: 'BD-008', name: 'Mimi Akter', email: 'mimi@example.com', avatar: '' },
  {
    id: 'BD-009',
    name: 'Hasib Mahmud',
    email: 'hasib@example.com',
    avatar: '',
  },
  {
    id: 'BD-010',
    name: 'Nadia Sultana',
    email: 'nadia@example.com',
    avatar: '',
  },
];

const RowTwo = () => {
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const statusList = useMemo(() => {
    return [...new Set(reportsData.map((r) => r.status))];
  }, []);

  // Filter + search
  const filteredReports = useMemo(() => {
    let data = reportsData;

    if (searchTerm.trim() !== '') {
      const s = searchTerm.toLowerCase();
      data = data.filter(
        (r) =>
          r.reportBy.toLowerCase().includes(s) ||
          r.roomReportedFrom.toLowerCase().includes(s) ||
          r.id.toLowerCase().includes(s)
      );
    }

    if (statusFilter) {
      data = data.filter((r) => r.status === statusFilter);
    }

    return data;
  }, [searchTerm, statusFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredReports.length / pageSize);
  const paginatedReports = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredReports.slice(start, start + pageSize);
  }, [filteredReports, currentPage, pageSize]);

  useMemo(() => setCurrentPage(1), [searchTerm, statusFilter, pageSize]);

  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <CardTitle className="text-lg shrink-0">Report List</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by room name, creator or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="flex gap-4">
            {/* Status Filter */}
            <Select onValueChange={(value) => setStatusFilter(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                {statusList.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Page Size Selector */}
            <Select onValueChange={(v) => setPageSize(Number(v))}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Page size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Report By</TableHead>
              <TableHead>Room Reported From</TableHead>
              <TableHead>Report Type</TableHead>
              <TableHead>Reported On</TableHead>
              <TableHead>Report Details</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.id}</TableCell>
                <TableCell>{report.reportBy}</TableCell>
                <TableCell>{report.roomReportedFrom}</TableCell>
                <TableCell>{report.reportType}</TableCell>
                <TableCell>{report.reportedOn}</TableCell>
                <TableCell>{report.reportDetails}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      report.status === 'Active'
                        ? 'default'
                        : report.status === 'Pending'
                        ? 'secondary'
                        : report.status === 'Reviewed'
                        ? 'destructive'
                        : 'secondary'
                    }
                  >
                    {report.status}
                  </Badge>
                </TableCell>

                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline">
                        <EyeIcon className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent showCloseButton={false} className="min-w-xl">
                      <DialogHeader>
                        <div className="flex justify-between items-center">
                          <div>
                            <DialogTitle>Report Details</DialogTitle>
                            <DialogDescription>
                              See the details of the report below.
                            </DialogDescription>
                          </div>
                          <div>
                            <DialogClose asChild>
                              <Button variant="outline" size="sm">
                                <XIcon className="h-4 w-4" />
                              </Button>
                            </DialogClose>
                          </div>
                        </div>
                      </DialogHeader>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <h3 className="font-semibold text-sm text-purple-600">
                            Reported By
                          </h3>
                          <p className="font-medium text-sm">
                            {report.reportBy}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm text-purple-600">
                            Room Reported From
                          </h3>
                          <p className="font-medium text-sm">
                            {report.roomReportedFrom}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm text-purple-600">
                            Report On
                          </h3>
                          <p className="font-medium text-sm">
                            {report.reportedOn}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm text-purple-600">
                            Report Type
                          </h3>
                          <Badge>{report.reportType}</Badge>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm text-purple-600">
                            Report Date
                          </h3>
                          <p className="font-medium text-sm">
                            {report.reportedOn}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <h3 className="font-semibold text-sm text-purple-600 ">
                            Report Details
                          </h3>
                          <div className="border border-rose-200 bg-rose-100 px-4 py-2 mt-2 rounded-sm">
                            <p className="font-medium text-sm">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Praesentium sequi quae nesciunt
                              excepturi est rerum facilis nostrum in illo ipsa
                              placeat, molestias eius, dicta doloribus!
                              Praesentium, obcaecati fuga. Error nihil ducimus
                              perspiciatis eius qui inventore, deserunt
                              accusamus libero a tenetur!
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold text-sm text-purple-600">
                            View Attachment
                          </h3>
                          <div className="w-[400px] aspect-square relative mt-1">
                            <Image
                              src="/blog/blog-1.jpg"
                              alt="Attachment"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      <DialogFooter className="sm:justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-sm text-purple-600">
                            Take Action
                          </h3>
                          <div className="space-x-2">
                            <Button variant="default">Kick</Button>
                            <Button variant="destructive">Ban</Button>
                          </div>
                        </div>

                        <div>
                          <Button variant="outline">Resolve</Button>
                        </div>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Button size="sm" variant="outline" className="ml-2">
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </p>

          <div className="flex gap-2">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Previous
            </Button>

            <Button
              variant="outline"
              disabled={currentPage === totalPages || totalPages === 0}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RowTwo;
