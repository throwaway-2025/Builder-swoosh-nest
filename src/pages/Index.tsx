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

// Hotel data for Jakarta
const hotels = [
  {
    id: 1,
    name: "Harmony Suites",
    location: "Blissful Street, South Jakarta",
    rating: 5,
    visitors: 1219,
    price: 285,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    mapPosition: { lat: -6.2088, lng: 106.8456 },
  },
  {
    id: 2,
    name: "Radiant Residences",
    location: "Serene Avenue, West Jakarta",
    rating: 5,
    visitors: 8912,
    price: 320,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    mapPosition: { lat: -6.1751, lng: 106.865 },
  },
  {
    id: 3,
    name: "Tranquil Haven Hotel",
    location: "Peaceful Lane, North Jakarta",
    rating: 5,
    visitors: 429,
    price: 195,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    mapPosition: { lat: -6.1478, lng: 106.8131 },
  },
  {
    id: 4,
    name: "Urban Oasis Hotel",
    location: "Modern District, Central Jakarta",
    rating: 4,
    visitors: 756,
    price: 240,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    mapPosition: { lat: -6.2, lng: 106.8167 },
  },
  {
    id: 5,
    name: "Serenity Inn",
    location: "Quiet Corner, East Jakarta",
    rating: 4,
    visitors: 1534,
    price: 165,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    mapPosition: { lat: -6.2615, lng: 106.8738 },
  },
  {
    id: 6,
    name: "Comfort Suites Jakarta",
    location: "Business Avenue, South Jakarta",
    rating: 4,
    visitors: 967,
    price: 205,
    image:
      "https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    mapPosition: { lat: -6.2297, lng: 106.8407 },
  },
];

// Header Component
const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center transform rotate-12">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">FindStays</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">
              Home
            </a>
            <a
              href="#"
              className="text-gray-900 font-medium text-sm relative pb-4"
            >
              Search
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">
              Blog
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">
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
    <div className="bg-white border-b border-gray-200 py-5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center space-x-4">
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
                className="pl-10 h-11 border-gray-300 rounded-lg focus:border-gray-500 focus:ring-0"
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
                className="w-full h-11 pl-10 pr-4 border border-gray-300 rounded-lg focus:border-gray-500 focus:ring-0 bg-white text-gray-900 appearance-none"
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
                className="pl-10 h-11 border-gray-300 rounded-lg focus:border-gray-500 focus:ring-0"
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
                className="pl-10 h-11 border-gray-300 rounded-lg focus:border-gray-500 focus:ring-0"
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
              className="h-11 border-gray-300 rounded-lg focus:border-gray-500 focus:ring-0 text-gray-400"
              placeholder="e.g. JW Hotel"
            />
          </div>

          {/* Refresh and Filter */}
          <div className="flex items-end space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="h-11 w-11 p-0 border-gray-300 rounded-lg"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="h-11 px-4 border-gray-300 rounded-lg flex items-center space-x-2"
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
  const [isLiked, setIsLiked] = useState(hotel.id === 2); // Second card is liked in the design

  return (
    <Card className="overflow-hidden border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
        </div>
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white shadow-sm ${
            isLiked ? "text-red-500" : "text-gray-600"
          }`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-gray-900 text-base mb-1">
              {hotel.name}
            </h3>
            <p className="text-sm text-gray-500">{hotel.location}</p>
          </div>

          <div className="flex items-center space-x-1">
            {[...Array(hotel.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="text-xs text-gray-600 ml-2">
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
    <div className="h-[600px] bg-gray-100 rounded-2xl relative overflow-hidden border border-gray-200">
      {/* Map placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="w-full h-full relative">
          {/* Simulated map background with roads */}
          <div className="absolute inset-0">
            <svg
              viewBox="0 0 400 600"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Map background */}
              <rect width="100%" height="100%" fill="#f8fafc" />

              {/* Simulated streets */}
              <path
                d="M0 150 Q100 140 200 150 T400 160"
                stroke="#e2e8f0"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M0 250 Q150 240 300 250 T400 260"
                stroke="#e2e8f0"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M0 350 Q100 340 200 350 T400 360"
                stroke="#e2e8f0"
                strokeWidth="3"
                fill="none"
              />

              {/* Vertical streets */}
              <path
                d="M100 0 Q110 200 100 400 T110 600"
                stroke="#e2e8f0"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M200 0 Q210 200 200 400 T210 600"
                stroke="#e2e8f0"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M300 0 Q310 200 300 400 T310 600"
                stroke="#e2e8f0"
                strokeWidth="3"
                fill="none"
              />

              {/* Circular area (representing Jakarta) */}
              <circle
                cx="200"
                cy="300"
                r="100"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeDasharray="5,5"
              />
            </svg>
          </div>

          {/* Hotel pins */}
          {hotels.map((hotel, index) => (
            <div
              key={hotel.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                left: `${30 + (index % 3) * 20}%`,
                top: `${25 + Math.floor(index / 3) * 25}%`,
              }}
            >
              <div className="relative group">
                <div className="w-3 h-3 bg-black rounded-full shadow-lg hover:scale-110 transition-transform"></div>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  {hotel.name}
                </div>
              </div>
            </div>
          ))}

          {/* Map info card */}
          <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-3 max-w-48">
            <div className="text-xs font-medium text-gray-900 mb-1">
              Serenity Inn
            </div>
            <div className="text-xs text-gray-500 mb-2">
              Tranquil Riverside Park Intimate
            </div>
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(4)].map((_, i) => (
                <Star
                  key={i}
                  className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="text-xs text-gray-600">(103 Visitors)</span>
            </div>
            <div className="w-12 h-8 bg-gray-200 rounded"></div>
          </div>

          {/* Expand button */}
          <Button
            variant="outline"
            size="sm"
            className="absolute top-4 right-4 bg-white shadow-sm hover:bg-gray-50 rounded-lg px-3 py-1.5 text-xs"
          >
            Expand
          </Button>
        </div>
      </div>
    </div>
  );
};

// Results Header Component
const ResultsHeader = () => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Hotels in Jakarta, Indonesia
      </h1>
      <p className="text-gray-600 text-sm">
        We found <span className="font-medium">2478</span> Premium Hotels
      </p>
    </div>
  );
};

// Main Index Component
export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SearchForm />

      {/* Main content */}
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        <ResultsHeader />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Hotels grid - 3 columns */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>

            {/* Load more section */}
            <div className="text-center pt-8">
              <p className="text-gray-600 text-sm mb-4">
                Showing 6 of 2478 hotels
              </p>
              <Button variant="outline" className="px-8 py-2 rounded-lg">
                Load More Hotels
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="sticky top-6">
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
