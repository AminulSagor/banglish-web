"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  LogOut,
  MessageCircleIcon,
  PersonStanding,
  UserRound,
  UsersRound,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/messages", label: "Messages", icon: MessageCircleIcon },
  { href: "/rooms", label: "My Rooms", icon: PersonStanding },
  { href: "/people", label: "Active People", icon: UsersRound },
  { href: "/profile", label: "My Profile", icon: UserRound },
  { href: "/logout", label: "Logout", icon: LogOut },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-purple-200/30">
      <div className="max-w-7xl mx-auto">
        <div className="pt-8 pb-4">
          <nav className="border border-purple-300 bg-white rounded-md">
            <div className="p-4">
              <div className="flex justify-between gap-4">
                {navItems.map(({ href, label, icon: Icon }) => {
                  const isActive = pathname === href;

                  return (
                    <Link
                      key={label}
                      href={href}
                      className={`group relative flex flex-col items-center justify-center gap-2 p-6 rounded-md border flex-1 transition
                        ${
                          isActive
                            ? "bg-purple-300 border-purple-500 text-black"
                            : "border-purple-300 hover:bg-purple-200"
                        }
                      `}
                    >
                      <Icon
                        size={40}
                        className={`${isActive ? "text-black" : "group-hover:text-black"}`}
                      />
                      <span
                        className={`text-lg font-semibold ${
                          isActive ? "text-black" : "group-hover:text-black"
                        }`}
                      >
                        {label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
