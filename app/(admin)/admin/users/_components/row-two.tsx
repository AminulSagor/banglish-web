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
import { EyeIcon, EditIcon, TrashIcon, Search } from 'lucide-react';
import { users } from '@/data/users';

const RowTwo = () => {
  const [countryFilter, setCountryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Pagination states
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const countryList = useMemo(() => {
    return [...new Set(users.map((u) => u.country))];
  }, []);

  const statusList = useMemo(() => {
    return [...new Set(users.map((u) => u.status))];
  }, []);

  // Filter logic + search
  const filteredUsers = useMemo(() => {
    let data = users;

    if (searchTerm.trim() !== '') {
      const s = searchTerm.toLowerCase();
      data = data.filter(
        (u) =>
          u.name.toLowerCase().includes(s) ||
          u.email.toLowerCase().includes(s) ||
          u.id.toLowerCase().includes(s)
      );
    }

    if (countryFilter) {
      data = data.filter((u) => u.country === countryFilter);
    }

    if (statusFilter) {
      data = data.filter((u) => u.status === statusFilter);
    }

    return data;
  }, [searchTerm, countryFilter, statusFilter]);

  // PAGINATION LOGIC
  const totalPages = Math.ceil(filteredUsers.length / pageSize);

  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredUsers.slice(start, start + pageSize);
  }, [filteredUsers, currentPage, pageSize]);

  // Reset to page 1 whenever filters or page size changes
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, countryFilter, statusFilter, pageSize]);

  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <CardTitle className="text-lg shrink-0">Users List</CardTitle>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

              <Input
                placeholder="Search by name, email or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="flex gap-4">
            {/* Country Filter */}
            <Select onValueChange={(value) => setCountryFilter(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Country" />
              </SelectTrigger>
              <SelectContent>
                {countryList.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

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
        {/* TABLE */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Profile</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Member Since</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.country}</TableCell>
                <TableCell>{user.memberSince}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      user.status === 'Verified'
                        ? 'default'
                        : user.status === 'Banned'
                        ? 'destructive'
                        : 'secondary'
                    }
                  >
                    {user.status}
                  </Badge>
                </TableCell>

                <TableCell className="text-right">
                  <Button type="button" size="sm" variant="outline">
                    <EyeIcon className="h-4 w-4" />
                  </Button>

                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="ml-2"
                  >
                    <EditIcon className="h-4 w-4" />
                  </Button>

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

        {/* PAGINATION CONTROLS */}
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
