import { ReactNode } from "react";
import { GetUserInserver } from "@/lib/Actions/GetUser";
import SideNavigation from "../Components/SideNavbar";
import { redirect } from "next/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
 
  const Userinfo = await GetUserInserver();

  // এখানে null চেক করায় নিচের SideNavigation-এ শুধু ভ্যালিড ইউজার ডাটাই যাবে
  if (!Userinfo) {
    redirect("/login"); 
  }

  return (
    <div className="flex min-h-screen">
      <SideNavigation Userinfo={Userinfo} />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}