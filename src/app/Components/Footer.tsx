import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiPhoneForwarded } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

interface QuickLink {
  title: string;
  href: string;
}

const quickLinks: QuickLink[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
];

export default function FooterPage(): React.JSX.Element {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-800 pb-8">
        {/* Logo */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white tracking-wider">
              Trendy<span className="text-green-500">Haat</span>
            </span>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            Discover thousands of trendy, high-quality, and everyday essential products curated just for you. Whether you are looking for the latest fashion, smart gadgets, or daily lifestyle needs, Trendy Haat helps you explore, shop, and save on your favorite items with absolute trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">
            Contact Us
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <IoLocationOutline className="text-lg" />
              <span>123 Innovation Way, Tech Suite 500</span>
            </li>

            <li className="flex items-center gap-2">
              <FiPhoneForwarded className="text-lg" />

              <a
                href="tel:+15551234567"
                className="hover:text-white transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </li>

            <li className="flex items-center gap-2">
              <MdOutlineMarkEmailUnread className="text-lg" />

              <a
                href="mailto:hello@recipehub.com"
                className="hover:text-white transition-colors"
              >
                hello@recipehub.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">
            Follow Us
          </h3>

          <div className="flex gap-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
            >
              <FaFacebook />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition-colors"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-sky-500 flex items-center justify-center transition-colors"
            >
              <FaTwitter />
            </a>
          </div>

          <p className="text-xs text-gray-500">
            Stay connected for updates, recipes, and cooking tips.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} RecipeHub. All rights reserved.</p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <Link
            href="/terms"
            className="hover:text-gray-300 transition-colors"
          >
            Terms of Service
          </Link>

          <Link
            href="/cookies"
            className="hover:text-gray-300 transition-colors"
          >
            Cookie Settings
          </Link>
        </div>
      </div>
    </footer>
  );
}