"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Drawer } from "@heroui/react";

import {
  BiBookOpen,
  BiHeart,
  BiPlusCircle,
} from "react-icons/bi";
import {
  BsFileEarmarkBarGraph,
  BsHouse,
  BsPeople,
  BsPerson,
} from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { FiBookOpen } from "react-icons/fi";
import { AiOutlineTransaction } from "react-icons/ai";
import { IconType } from "react-icons";
import { GetUserInserver } from "@/lib/Actions/GetUser";

type UserInfo = NonNullable<
  Awaited<ReturnType<typeof GetUserInserver>>
>;

interface SideNavigationProps {
  Userinfo: UserInfo;
}

interface NavItem {
  href: string;
  label: string;
  icon: IconType;
}

export default function SideNavigation({
  Userinfo,
}: SideNavigationProps) {
  const pathname = usePathname();

  const user = Userinfo;

  const UserNavItems: NavItem[] = [
    {
      href: "/Dashboard/User",
      icon: BsHouse,
      label: "Overview",
    },
    {
      href: "/Dashboard/User/addrecipe",
      icon: BiPlusCircle,
      label: "Add Recipe",
    },
    {
      href: "/Dashboard/User/Myrecipe",
      icon: BiBookOpen,
      label: "My Recipes",
    },
    {
      href: "/Dashboard/User/MyBuyrecipe",
      icon: CgShoppingCart,
      label: "Purchased Recipes",
    },
    {
      href: "/Dashboard/User/favourite",
      icon: BiHeart,
      label: "Favorites",
    },
    {
      href: "/Dashboard/User/profile",
      icon: BsPerson,
      label: "Profile",
    },
  ];

  const AdminNavItems: NavItem[] = [
    {
      href: "/Dashboard/Admin",
      icon: BsHouse,
      label: "Overview",
    },
    {
      href: "/Dashboard/Admin/User",
      icon: BsPeople,
      label: "Manage User",
    },
    {
      href: "/Dashboard/Admin/Recipes",
      icon: FiBookOpen,
      label: "Manage Recipes",
    },
    {
      href: "/Dashboard/Admin/report",
      icon: BsFileEarmarkBarGraph,
      label: "Recipes Report",
    },
    {
      href: "/Dashboard/Admin/Payments",
      icon: AiOutlineTransaction,
      label: "Transaction",
    },
    {
      href: "/Dashboard/Admin/profile",
      icon: BsPerson,
      label: "Profile",
    },
  ];

  const FinalLinks =
    user?.role === "Admin" ? AdminNavItems : UserNavItems;

  const Navmenu = (
    <div className="w-full">
      <nav className="flex flex-col gap-2">
        {/* User Card */}
        <div className="mb-4 flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-zinc-900">
          <div className="h-16 w-16 overflow-hidden rounded-full bg-gray-200">
            <Image
              src={user?.image || "/default-avatar.png"}
              alt="User"
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 dark:text-white">
              {user?.name || "Guest"}
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Welcome back 👋
            </p>
          </div>
        </div>

        {/* Navigation */}
        {FinalLinks.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400"
                  : "text-gray-600 hover:bg-orange-50 hover:text-orange-500 dark:text-gray-300 dark:hover:bg-zinc-800"
              }`}
            >
              <Icon className="text-lg" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-black lg:block">
        {Navmenu}
      </aside>

      {/* Mobile Sidebar */}
      <Drawer>
        <Button className="m-4 flex items-center gap-2 bg-orange-500 text-white lg:hidden">
          <IoMenu className="text-lg" />
          Sidebar
        </Button>

        <Drawer.Backdrop />

        <Drawer.Content placement="left">
          <Drawer.Dialog className="bg-white dark:bg-zinc-900">
            <Drawer.CloseTrigger />

            <Drawer.Header>
              <Drawer.Heading className="text-gray-900 dark:text-white">
                Navigation
              </Drawer.Heading>
            </Drawer.Header>

            <Drawer.Body>{Navmenu}</Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer>
    </>
  );
}