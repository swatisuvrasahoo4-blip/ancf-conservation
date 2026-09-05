import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  LogOut,
  Menu,
  X,
} from "lucide-react";

import logo from "../images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return Boolean(localStorage.getItem("token"));
  });

  // Logout user
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);
    setIsMenuOpen(false);

    navigate("/signin");
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Check active page
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Desktop navigation link style
  const navLinkClass = (path) => {
    return `text-sm font-semibold transition duration-200 ${
      isActive(path)
        ? "text-amber-700"
        : "text-gray-800 hover:text-amber-700"
    }`;
  };

  // Mobile navigation link style
  const mobileLinkClass = (path) => {
    return `rounded-lg px-3 py-3 text-sm font-semibold transition ${
      isActive(path)
        ? "bg-amber-100 text-amber-700"
        : "text-gray-800 hover:bg-amber-100"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-amber-50 shadow-sm">
      <nav className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/home"
          onClick={closeMenu}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="ANCF logo"
            className="h-11 w-auto object-contain sm:h-12"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          <Link
            to="/home"
            className={navLinkClass("/home")}
          >
            Home
          </Link>

          <Link
            to="/mission"
            className={navLinkClass("/mission")}
          >
            Mission
          </Link>

          <Link
            to="/program"
            className={navLinkClass("/program")}
          >
            Programs
          </Link>

          <Link
            to="/partner"
            className={navLinkClass("/partner")}
          >
            Partners
          </Link>

          {isLoggedIn && (
            <Link
              to="/dashboard"
              className={navLinkClass("/dashboard")}
            >
              Dashboard
            </Link>
          )}

          {isLoggedIn ? (
            <button
              type="button"
              onClick={handleLogout}
              className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-gray-800 transition duration-200 hover:text-red-600"
            >
              <LogOut size={17} />
              Logout
            </button>
          ) : (
            <Link
              to="/signin"
              className={navLinkClass("/signin")}
            >
              Sign In
            </Link>
          )}

          <Link
            to="/donate"
            className="rounded-full bg-amber-600 px-6 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-amber-700"
          >
            Donate
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() =>
            setIsMenuOpen((current) => !current)
          }
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-[#1f3c28] transition hover:bg-amber-100 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="border-t border-amber-200 bg-amber-50 px-4 py-4 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1">
            <Link
              to="/home"
              onClick={closeMenu}
              className={mobileLinkClass("/home")}
            >
              Home
            </Link>

            <Link
              to="/mission"
              onClick={closeMenu}
              className={mobileLinkClass("/mission")}
            >
              Mission
            </Link>

            <Link
              to="/program"
              onClick={closeMenu}
              className={mobileLinkClass("/program")}
            >
              Programs
            </Link>

            <Link
              to="/partner"
              onClick={closeMenu}
              className={mobileLinkClass("/partner")}
            >
              Partners
            </Link>

            {isLoggedIn && (
              <Link
                to="/dashboard"
                onClick={closeMenu}
                className={mobileLinkClass("/dashboard")}
              >
                Dashboard
              </Link>
            )}

            {isLoggedIn ? (
              <button
                type="button"
                onClick={handleLogout}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-3 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50"
              >
                <LogOut size={17} />
                Logout
              </button>
            ) : (
              <Link
                to="/signin"
                onClick={closeMenu}
                className={mobileLinkClass("/signin")}
              >
                Sign In
              </Link>
            )}

            <Link
              to="/donate"
              onClick={closeMenu}
              className="mt-3 rounded-full bg-amber-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-amber-700"
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;