
 "use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer, useOverlayState } from "@heroui/react";

import { BiPlusCircle } from "react-icons/bi";
import {
  BsFileEarmarkBarGraph,
  BsHouse,
  BsPeople,
  BsPerson,
} from "react-icons/bs";

import { FiBookOpen } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { AiOutlineTransaction } from "react-icons/ai";
import { IconType } from "react-icons";

interface UserInfo {
  id?: string;
  name?: string;
  email?: string;
  image?: string;
  role?: "Admin" | "User";
}

interface SideNavigationProps {
  Userinfo: UserInfo | null;
}

interface NavItem {
  href: string;
  label: string;
  icon: IconType;
}

export default function SideNavigation({ Userinfo }: SideNavigationProps) {
  const pathname = usePathname();
  const user = Userinfo;

  // Controlled overlay state — must be passed to <Drawer state={drawerState}>,
  // otherwise drawerState.close() on link click does nothing (bug in the pasted version).
  const drawerState = useOverlayState({ defaultOpen: false });

  const UserNavItems: NavItem[] = [
    { href: "/Dashboard/User", icon: BsHouse, label: "Overview" },
    { href: "/Dashboard/User/product", icon: BiPlusCircle, label: "Add Product" },
    { href: "/Dashboard/User/profile", icon: BsPerson, label: "Profile" },
  ];

  const AdminNavItems: NavItem[] = [
    { href: "/Dashboard/Admin", icon: BsHouse, label: "Overview" },
   
    { href: "/Dashboard/Admin/Manageproduct", icon: FiBookOpen, label: "Manage Product" },
   
    { href: "/Dashboard/Admin/profile", icon: BsPerson, label: "Profile" },
  ];

  const FinalLinks = user?.role === "Admin" ? AdminNavItems : UserNavItems;

  const renderNavmenu = (closeOnNavigate: boolean) => (
    <div className="w-full">
      <nav className="flex flex-col gap-2">
        <div className="mb-4 flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-zinc-900">
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-gray-200">
            <Image
              src={user?.image || "/default-avatar.png"}
              alt="User"
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <h2 className="truncate font-semibold text-gray-900 dark:text-white">
              {user?.name || "Guest"}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Welcome back 👋
            </p>
          </div>
        </div>

        {FinalLinks.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeOnNavigate ? () => drawerState.close() : undefined}
              className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-gray-600 hover:bg-orange-100 hover:text-orange-600 dark:text-gray-300 dark:hover:bg-zinc-800"
              }`}
            >
              <Icon
                className={`text-lg transition-transform duration-300 ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar — visible from lg breakpoint up, fixed width */}
      <aside className="hidden w-64 shrink-0 border-r border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-black lg:block">
        {renderNavmenu(false)}
      </aside>

      {/* Mobile: bottom navbar with centered open icon + drawer, hidden from lg up */}
      <div className="lg:hidden">
        <Drawer state={drawerState}>
          {/* Bottom navbar */}
          <div className="fixed bottom-0 left-0 right-0 z-40 flex h-16 items-center justify-center border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
            <Drawer.Trigger
              aria-label="Open sidebar"
              className="flex h-14 w-14 -translate-y-4 cursor-pointer items-center justify-center rounded-full bg-orange-500 text-white shadow-lg ring-4 ring-white transition-transform active:scale-95 dark:ring-black"
            >
              <IoMenu className="text-2xl" />
            </Drawer.Trigger>
          </div>

          <Drawer.Backdrop className="fixed inset-0 z-50 bg-black/50">
            <Drawer.Content
              placement="left"
              className="fixed inset-y-0 left-0 z-50 h-full w-72 max-w-[85vw]"
            >
              <Drawer.Dialog className="h-full w-72 max-w-[85vw] overflow-y-auto bg-white p-4 dark:bg-zinc-900">
                <Drawer.CloseTrigger className="ml-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-800" />

                <Drawer.Header>
                  <Drawer.Heading className="text-gray-900 dark:text-white">
                    Navigation
                  </Drawer.Heading>
                </Drawer.Header>

                <Drawer.Body className="overflow-y-auto">
                  {renderNavmenu(true)}
                </Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>

        {/* Spacer so page content doesn't hide behind the fixed bottom navbar */}
        <div className="h-16" />
      </div>
    </>
  );
}