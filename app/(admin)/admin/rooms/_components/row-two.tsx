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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

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
    return [...new Set(rooms.map((r) => r.status))];
  }, []);

  // Filter + search
  const filteredRooms = useMemo(() => {
    let data = rooms;

    if (searchTerm.trim() !== '') {
      const s = searchTerm.toLowerCase();
      data = data.filter(
        (r) =>
          r.name.toLowerCase().includes(s) ||
          r.createdBy.toLowerCase().includes(s) ||
          r.id.toLowerCase().includes(s)
      );
    }

    if (statusFilter) {
      data = data.filter((r) => r.status === statusFilter);
    }

    return data;
  }, [searchTerm, statusFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredRooms.length / pageSize);
  const paginatedRooms = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredRooms.slice(start, start + pageSize);
  }, [filteredRooms, currentPage, pageSize]);

  useMemo(() => setCurrentPage(1), [searchTerm, statusFilter, pageSize]);

  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <CardTitle className="text-lg shrink-0">Rooms List</CardTitle>
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
              <TableHead>Room Name</TableHead>
              <TableHead>Created By</TableHead>
              <TableHead>No. of Members</TableHead>
              <TableHead>Languages</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedRooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell>{room.id}</TableCell>
                <TableCell>{room.name}</TableCell>
                <TableCell>{room.createdBy}</TableCell>
                <TableCell>{room.members}</TableCell>
                <TableCell>{room.languages}</TableCell>
                <TableCell>
                  <Badge
                    variant={room.status === 'Active' ? 'default' : 'secondary'}
                  >
                    {room.status}
                  </Badge>
                </TableCell>

                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button type="button" size="sm" variant="outline">
                        <EyeIcon className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent showCloseButton={false}>
                      <DialogHeader className="border-b pb-4">
                        <div className="flex justify-between">
                          <div>
                            <DialogTitle>Room Details - {room.id}</DialogTitle>
                            <DialogDescription>
                              See more details about this room here.
                            </DialogDescription>
                          </div>
                          <div>
                            <DialogClose asChild>
                              <Button size="sm" variant="outline">
                                <XIcon className="h-4 w-4" />
                              </Button>
                            </DialogClose>
                          </div>
                        </div>
                      </DialogHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-sm text-purple-600 mb-1">
                            Language Learning
                          </h3>
                          <p className="text-xs font-medium">
                            {room.languages}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm text-purple-600 mb-1">
                            Create By
                          </h3>
                          <p className="text-xs font-medium">
                            {room.createdBy}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm text-purple-600 mb-1">
                            Members
                          </h3>
                          <p className="text-xs font-medium text-center">
                            {room.members}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Search Users" className="pl-9" />
                        </div>
                      </div>
                      <ScrollArea className="h-90">
                        <div className="space-y-2">
                          {users.map((user) => (
                            <div
                              key={user.id}
                              className="flex items-center border-b py-2 px-3"
                            >
                              {/* Avatar */}

                              <div>
                                <Avatar className="h-10 w-10">
                                  {user.avatar ? (
                                    <AvatarImage
                                      src={user.avatar}
                                      alt={user.name}
                                    />
                                  ) : (
                                    <AvatarFallback>
                                      {user.name
                                        .split(' ')
                                        .map((n) => n[0])
                                        .join('')
                                        .toUpperCase()}
                                    </AvatarFallback>
                                  )}
                                </Avatar>
                              </div>

                              {/* Name + Email */}
                              <div className="flex flex-col ml-3 flex-1">
                                <span className="font-medium text-sm">
                                  {user.name}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {user.email}
                                </span>
                              </div>

                              {/* View Button */}

                              <div>
                                <Button
                                  type="button"
                                  size="sm"
                                  variant="outline"
                                >
                                  <EyeIcon className="h-4 w-4 text-muted-foreground" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>

                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="ml-2"
                  >
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
