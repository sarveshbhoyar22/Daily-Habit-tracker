import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, CheckSquare } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { toast } from "react-toastify";

interface NavbarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    ...(isLoggedIn
      ? [{ path: "/dashboard", label: "Dashboard" }]
      : [{ path: "/", label: "Home" }]),
    { path: "/about", label: "About" },
  ];

  const getNavLinkClass = (path: string) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive(path)
        ? "text-purple-600 dark:text-purple-400"
        : "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
    }`;

  const authLinkBase =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200";

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <CheckSquare
              className="text-purple-600 dark:text-purple-400"
              size={28}
            />
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
              HabitTrack
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            {navLinks.map(({ path, label }) => (
              <Link key={path} to={path} className={getNavLinkClass(path)}>
                {label}
              </Link>
            ))}

            {!isLoggedIn ? (
              <Link
                to="/signup"
                className={`${authLinkBase} bg-purple-600 text-white hover:bg-purple-700`}
              >
                Sign Up
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className={`${authLinkBase} bg-red-600 text-white hover:bg-red-700`}
              >
                Logout
              </button>
            )}

            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center sm:hidden">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden px-4 pt-2 pb-4 space-y-1">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsMenuOpen(false)}
              className={getNavLinkClass(path).replace("text-sm", "text-base")}
            >
              {label}
            </Link>
          ))}

          {!isLoggedIn ? (
            <Link
              to="/signup"
              onClick={() => setIsMenuOpen(false)}
              className={`${authLinkBase.replace(
                "text-sm",
                "text-base"
              )} bg-purple-600 text-white hover:bg-purple-700`}
            >
              Sign Up
            </Link>
          ) : (
            <button
              onClick={() => {
                setIsMenuOpen(false);
                handleLogout();
              }}
              className={`${authLinkBase.replace(
                "text-sm",
                "text-base"
              )} bg-red-600 text-white hover:bg-red-700 w-full text-left`}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
