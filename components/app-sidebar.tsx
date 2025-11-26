'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { ChartNoAxesCombined, UserRound, Headset, FlagOff } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const mainMenu = [
  {
    title: 'Dashboard',
    url: '/admin/dashboard',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Users',
    url: '/admin/users',
    icon: UserRound,
  },
  {
    title: 'Rooms',
    url: '/admin/rooms',
    icon: Headset,
  },
  {
    title: 'Report',
    url: '/admin/report',
    icon: FlagOff,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="bg-amber-50 border-b py-4">
        <h1 className="text-lg font-semibold">Admin Dashboard</h1>
      </SidebarHeader>
      <SidebarContent className="bg-amber-50">
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenu.map((item) => {
                const isActive = item.url === pathname;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuSubButton
                      asChild
                      className={cn(
                        isActive && 'bg-amber-100',
                        'py-4 hover:bg-amber-100 '
                      )}
                    >
                      <Link href={item.url} className="flex items-center gap-2">
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* <SidebarFooter className="bg-amber-50" /> */}
    </Sidebar>
  );
}
