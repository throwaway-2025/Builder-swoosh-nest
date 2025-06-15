import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, User, Globe } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">StayFinder</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium ${
                location.pathname === "/"
                  ? "text-gray-900 border-b-2 border-gray-900 pb-4"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">
              Experiences
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">
              Host your home
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden lg:flex text-gray-600 hover:text-gray-900 text-sm"
            >
              Become a Host
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 rounded-full"
            >
              <Globe className="w-4 h-4" />
            </Button>
            <div className="flex items-center space-x-2">
              <Link to="/login">
                <Button
                  variant="ghost"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-red-500 text-white hover:bg-red-600 rounded-full px-6 py-2 text-sm">
                  Sign Up
                </Button>
              </Link>
            </div>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
