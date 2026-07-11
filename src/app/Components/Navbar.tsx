"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BsMoonStars, BsSun } from "react-icons/bs";
import { useTheme } from "@heroui/react";

import { FaUser } from "react-icons/fa";
import { IoMenu} from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

interface NavLink {
  label: string;
  href: string;
}

export default function Navbarpage(): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  
  const user = { role : 'dd'}

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = useMemo<NavLink[]>(() => {
    const base: NavLink[] = [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Browse Recipes",
        href: "/Recipes",
      },
    ];

    if (user) {
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

  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="sticky top-0 z-50 px-4 py-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-orange-100 dark:border-gray-700 shadow-sm rounded-3xl">
        <div className="h-16 px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center">
              🍽️
            </div>

            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              Recipe<span className="text-orange-500">Hub</span>
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
                      ? "bg-orange-100 text-orange-600"
                      : "text-gray-600 dark:text-gray-300 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="hidden md:flex p-2 rounded-xl border border-orange-200 dark:border-gray-600 hover:bg-orange-50 dark:hover:bg-gray-700"
              >
                {theme === "dark" ? (
                  <BsSun className="text-yellow-400" />
                ) : (
                  <BsMoonStars />
                )}
              </button>
            )}

            {/* Profile/Login */}
            {user ? (
              <Link
                href={`/Dashboard/${user.role}/profile`}
                className="hidden md:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-orange-600 hover:bg-gray-50 dark:hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors"
              >
                <FaUser />
                <span>Profile</span>
              </Link>
            ) : (
              <Link
                href="/signin"
                className="hidden md:flex px-3 py-2 text-sm text-orange-600 hover:bg-orange-50 rounded-lg"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-xl hover:bg-orange-50 dark:hover:bg-gray-700"
            >
              {menuOpen ? <IoMdClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-orange-100 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-4">
            <div className="flex flex-col gap-2">
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm transition ${
                      isActive
                        ? "bg-orange-100 text-orange-600"
                        : "text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Auth */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col gap-3">
              {user ? (
                <Link
                  href={`/Dashboard/${user.role}/profile`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700"
                >
                  <FaUser />
                  Profile
                </Link>
              ) : (
                <Link
                  href="/signin"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-center bg-orange-100 text-orange-600"
                >
                  Login
                </Link>
              )}

              {/* Mobile Theme */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center gap-2 px-4 py-3 border rounded-xl dark:border-gray-600"
                >
                  {theme === "dark" ? (
                    <>
                      <BsSun className="text-yellow-400" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <BsMoonStars />
                      Dark Mode
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}