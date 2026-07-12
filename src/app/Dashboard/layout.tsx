import { GetUserInserver } from "@/lib/Actions/GetUser";
import { ReactNode } from "react";
import { SideNavigation } from "../Components/SideNavbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const Userinfo = await GetUserInserver();

  return (
    <div className="md:flex min-h-screen">
      <SideNavigation Userinfo={Userinfo} />
      <main className="flex-1">{children}</main>
    </div>
  );
}