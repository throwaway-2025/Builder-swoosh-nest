import React, { useState } from "react";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  Heart,
  Filter,
  Map,
  List,
  SlidersHorizontal,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Hotel data for Jakarta - exactly 6 hotels for 2x3 grid
const hotels = [
  {
    id: 1,
    name: "Harmony Suites",
    location: "Blissful Street, South Jakarta",
    rating: 5,
    visitors: 1219,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isLiked: false,
  },
  {
    id: 2,
    name: "Radiant Residences",
    location: "Serene Avenue, West Jakarta",
    rating: 5,
    visitors: 8912,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isLiked: true, // This one has the red heart in the design
  },
  {
    id: 3,
    name: "Tranquil Haven Hotel",
    location: "Peaceful Lane, North Jakarta",
    rating: 5,
    visitors: 429,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isLiked: false,
  },
  {
    id: 4,
    name: "Urban Oasis Hotel",
    location: "Modern District, Central Jakarta",
    rating: 4,
    visitors: 756,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isLiked: false,
  },
  {
    id: 5,
    name: "Serenity Inn",
    location: "Quiet Corner, East Jakarta",
    rating: 4,
    visitors: 1534,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isLiked: false,
  },
  {
    id: 6,
    name: "Comfort Suites Jakarta",
    location: "Business Avenue, South Jakarta",
    rating: 4,
    visitors: 967,
    image:
      "https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isLiked: false,
  },
];

// Header Component
const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center transform rotate-12">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">FindStays</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-400 hover:text-gray-900 text-sm">
              Home
            </a>
            <a
              href="#"
              className="text-gray-900 font-medium text-sm relative pb-4"
            >
              Search
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 text-sm">
              Blog
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 text-sm">
              About Us
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 text-sm"
            >
              Sign In
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 text-sm">
              Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Search Form Component
const SearchForm = () => {
  const [searchData, setSearchData] = useState({
    location: "Jakarta, IND",
    persons: "2 Person",
    checkIn: "22 Dec",
    checkOut: "24 Dec",
    hotel: "",
  });

  return (
    <div className="bg-white border-b border-gray-100 py-6">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-end space-x-6">
          {/* Location */}
          <div className="flex-1 space-y-2">
            <label className="block text-xs font-medium text-gray-700 uppercase tracking-wide">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                value={searchData.location}
                onChange={(e) =>
                  setSearchData({ ...searchData, location: e.target.value })
                }
                className="pl-10 h-12 border-gray-200 rounded-lg focus:border-gray-400 focus:ring-0 text-gray-900 font-medium"
                placeholder="Enter location"
              />
            </div>
          </div>

          {/* Person */}
          <div className="flex-1 space-y-2">
            <label className="block text-xs font-medium text-gray-700 uppercase tracking-wide">
              Person
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={searchData.persons}
                onChange={(e) =>
                  setSearchData({ ...searchData, persons: e.target.value })
                }
                className="w-full h-12 pl-10 pr-4 border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-0 bg-white text-gray-900 font-medium appearance-none"
              >
                <option value="1 Person">1 Person</option>
                <option value="2 Person">2 Person</option>
                <option value="3 Person">3 Person</option>
                <option value="4+ Person">4+ Person</option>
              </select>
            </div>
          </div>

          {/* Check-in */}
          <div className="flex-1 space-y-2">
            <label className="block text-xs font-medium text-gray-700 uppercase tracking-wide">
              Check-in
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                value={searchData.checkIn}
                onChange={(e) =>
                  setSearchData({ ...searchData, checkIn: e.target.value })
                }
                className="pl-10 h-12 border-gray-200 rounded-lg focus:border-gray-400 focus:ring-0 text-gray-900 font-medium"
                placeholder="Select date"
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="flex-1 space-y-2">
            <label className="block text-xs font-medium text-gray-700 uppercase tracking-wide">
              Check-out
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                value={searchData.checkOut}
                onChange={(e) =>
                  setSearchData({ ...searchData, checkOut: e.target.value })
                }
                className="pl-10 h-12 border-gray-200 rounded-lg focus:border-gray-400 focus:ring-0 text-gray-900 font-medium"
                placeholder="Select date"
              />
            </div>
          </div>

          {/* Find specific hotel */}
          <div className="flex-1 space-y-2">
            <label className="block text-xs font-medium text-gray-700 uppercase tracking-wide">
              Find specific hotel
            </label>
            <Input
              value={searchData.hotel}
              onChange={(e) =>
                setSearchData({ ...searchData, hotel: e.target.value })
              }
              className="h-12 border-gray-200 rounded-lg focus:border-gray-400 focus:ring-0 text-gray-400"
              placeholder="e.g. JW Hotel"
            />
          </div>

          {/* Refresh and Filter */}
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="h-12 w-12 p-0 border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="h-12 px-6 border-gray-200 rounded-lg flex items-center space-x-2 hover:bg-gray-50"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="text-sm">Filter</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hotel Card Component
const HotelCard = ({ hotel }: { hotel: (typeof hotels)[0] }) => {
  const [isLiked, setIsLiked] = useState(hotel.isLiked);

  return (
    <Card className="overflow-hidden border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 group">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white shadow-sm transition-all ${
            isLiked ? "text-red-500" : "text-gray-600"
          }`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
        </Button>
      </div>

      <CardContent className="p-5">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              {hotel.name}
            </h3>
            <p className="text-sm text-gray-500">{hotel.location}</p>
          </div>

          <div className="flex items-center space-x-1">
            {[...Array(hotel.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="text-sm text-gray-600 ml-2 font-medium">
              ({hotel.visitors} Visitors)
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Map Component
const MapComponent = () => {
  return (
    <div className="h-[650px] bg-gray-50 rounded-2xl relative overflow-hidden border border-gray-200">
      {/* Map background */}
      <div className="absolute inset-0">
        <div className="w-full h-full relative bg-gray-100">
          {/* Simulated map with roads and areas */}
          <svg
            viewBox="0 0 400 650"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Map background */}
            <rect width="100%" height="100%" fill="#f1f5f9" />

            {/* Major roads */}
            <path
              d="M0 150 Q100 140 200 150 T400 160"
              stroke="#cbd5e1"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M0 250 Q150 240 300 250 T400 260"
              stroke="#cbd5e1"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M0 350 Q100 340 200 350 T400 360"
              stroke="#cbd5e1"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M0 450 Q150 440 300 450 T400 460"
              stroke="#cbd5e1"
              strokeWidth="4"
              fill="none"
            />

            {/* Vertical roads */}
            <path
              d="M100 0 Q110 200 100 400 T110 650"
              stroke="#cbd5e1"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M200 0 Q210 200 200 400 T210 650"
              stroke="#cbd5e1"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M300 0 Q310 200 300 400 T310 650"
              stroke="#cbd5e1"
              strokeWidth="4"
              fill="none"
            />

            {/* Circular area representing city center */}
            <circle
              cx="200"
              cy="325"
              r="120"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1"
              strokeDasharray="8,4"
              opacity="0.7"
            />

            {/* Water/park areas */}
            <ellipse
              cx="320"
              cy="200"
              rx="40"
              ry="25"
              fill="#bfdbfe"
              opacity="0.6"
            />
            <ellipse
              cx="80"
              cy="400"
              rx="30"
              ry="20"
              fill="#dcfce7"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Hotel location pins */}
        {[
          { x: "15%", y: "20%" },
          { x: "35%", y: "30%" },
          { x: "55%", y: "25%" },
          { x: "25%", y: "50%" },
          { x: "45%", y: "60%" },
          { x: "65%", y: "45%" },
          { x: "75%", y: "35%" },
          { x: "85%", y: "55%" },
          { x: "30%", y: "75%" },
          { x: "60%", y: "80%" },
        ].map((pin, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ left: pin.x, top: pin.y }}
          >
            <div className="w-3 h-3 bg-black rounded-full shadow-md hover:scale-125 transition-transform"></div>
          </div>
        ))}

        {/* Hotel info card */}
        <div className="absolute bottom-6 right-6 bg-white rounded-xl shadow-lg p-4 w-56 border border-gray-100">
          <div className="flex space-x-3">
            <div className="w-16 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                Serenity Inn
              </div>
              <div className="text-xs text-gray-500 mb-2">
                Tranquil Riverside Park Intimate
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-xs text-gray-600 ml-1">
                  (103 Visitors)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Expand button */}
        <Button
          variant="outline"
          size="sm"
          className="absolute top-4 right-4 bg-white shadow-sm hover:bg-gray-50 rounded-lg px-4 py-2 text-sm border-gray-200"
        >
          Expand
        </Button>
      </div>
    </div>
  );
};

// Results Header Component
const ResultsHeader = () => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Hotels in Jakarta, Indonesia
      </h1>
      <p className="text-gray-600">
        We found <span className="font-semibold">2478</span> Premium Hotels
      </p>
    </div>
  );
};

// Main Index Component
export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SearchForm />

      {/* Main content */}
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        <ResultsHeader />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Hotels grid - exactly 2x3 layout */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-3 gap-6">
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="sticky top-8">
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
