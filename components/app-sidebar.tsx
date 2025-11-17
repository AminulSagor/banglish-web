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
} from "@/components/ui/sidebar";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar>
      {/*<SidebarHeader className="bg-amber-50" />*/}
      <SidebarContent className="bg-amber-50">
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuSubButton
                  className="hover:bg-purple-700 py-6 hover:text-white"
                  asChild
                >
                  <Link href="/">
                    <LayoutDashboard className="hover:text-white" />
                    Home
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/*<SidebarFooter className="bg-amber-50" />*/}
    </Sidebar>
  );
}
