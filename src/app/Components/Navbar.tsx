"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { authClient } from "@/lib/auth-client";
import { LogOut } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  role: string;
}

export default function Navbarpage(): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { data: session } = authClient.useSession();
  const pathname = usePathname();
  const router = useRouter();

  const user = session?.user as User | undefined;

  const links = useMemo<NavLink[]>(() => {
    const base: NavLink[] = [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Browse Product",
        href: "/products",
      },
      {
        label: "About Us",
        href: "/about",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ];

    if (user?.role) {
      base.push({
        label: "Dashboard",
        href: `/Dashboard/${user.role}`,
      });
    }

    return base;
  }, [user]);

  const toggleMenu = (): void => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      setMenuOpen(false);
      router.push("/");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <div className="sticky top-0 z-50 px-4 py-4 bg-black/70 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto bg-black border border-neutral-800 shadow-xl rounded-3xl">
        <div className="h-16 px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-white tracking-wide">
              Trendy<span className="text-green-500">Haat</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "bg-neutral-800 text-white"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Profile/Login */}
            {user ? (
              <button 
                onClick={handleLogout} 
                className="hidden md:flex items-center justify-center gap-1    text-[#f5f0e6]/80 hover:border-[#f5f0e6]/35 hover:text-[#f5f0e6]  text-sm transition"
              > 
             
                Logout 
                 <LogOut className="h-4 w-4" strokeWidth={2} />
              </button>
            ) : (
              <Link
                href="/signin"
                className="hidden md:flex px-4 py-2 text-sm font-medium text-white hover:bg-neutral-900 rounded-xl border border-neutral-800 transition"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-xl hover:bg-neutral-900 text-white transition"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <IoMdClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-neutral-800 bg-black px-4 py-4 rounded-b-3xl">
            <div className="flex flex-col gap-2">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition ${
                      isActive
                        ? "bg-neutral-800 text-white"
                        : "text-neutral-300 hover:bg-neutral-900 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Auth */}
            <div className="mt-4 pt-4 border-t border-neutral-800 flex flex-col gap-3">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-neutral-800 rounded-xl text-green-400 hover:bg-neutral-900 text-sm font-medium transition"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/signin"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-center bg-white text-black font-semibold text-sm transition hover:bg-neutral-200"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}