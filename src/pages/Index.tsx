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
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900">FindStays</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a
              href="#"
              className="text-gray-900 font-medium border-b-2 border-gray-900 pb-4"
            >
              Search
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About Us
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900"
            >
              Sign In
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6">
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
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-end">
          {/* Location */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                value={searchData.location}
                onChange={(e) =>
                  setSearchData({ ...searchData, location: e.target.value })
                }
                className="pl-10 h-12 border-gray-300 focus:border-gray-500"
                placeholder="Enter location"
              />
            </div>
          </div>

          {/* Person */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Person
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={searchData.persons}
                onChange={(e) =>
                  setSearchData({ ...searchData, persons: e.target.value })
                }
                className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-md focus:border-gray-500 focus:ring-0 bg-white"
              >
                <option value="1 Person">1 Person</option>
                <option value="2 Person">2 Person</option>
                <option value="3 Person">3 Person</option>
                <option value="4+ Person">4+ Person</option>
              </select>
            </div>
          </div>

          {/* Check-in */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Check-in
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                value={searchData.checkIn}
                onChange={(e) =>
                  setSearchData({ ...searchData, checkIn: e.target.value })
                }
                className="pl-10 h-12 border-gray-300 focus:border-gray-500"
                placeholder="Check-in date"
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Check-out
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                value={searchData.checkOut}
                onChange={(e) =>
                  setSearchData({ ...searchData, checkOut: e.target.value })
                }
                className="pl-10 h-12 border-gray-300 focus:border-gray-500"
                placeholder="Check-out date"
              />
            </div>
          </div>

          {/* Find specific hotel */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Find specific hotel
            </label>
            <Input
              value={searchData.hotel}
              onChange={(e) =>
                setSearchData({ ...searchData, hotel: e.target.value })
              }
              className="h-12 border-gray-300 focus:border-gray-500"
              placeholder="e.g. JW Hotel"
            />
          </div>

          {/* Filter Button */}
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="h-12 px-4 border-gray-300 flex items-center space-x-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filter</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hotel Card Component
const HotelCard = ({ hotel }: { hotel: (typeof hotels)[0] }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
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
          className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white ${
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
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              {hotel.name}
            </h3>
            <p className="text-sm text-gray-600">{hotel.location}</p>
          </div>

          <div className="flex items-center space-x-1">
            {[...Array(hotel.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="text-sm text-gray-600 ml-2">
              ({hotel.visitors} Visitors)
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-gray-900">
                ${hotel.price}
              </span>
              <span className="text-sm text-gray-600 ml-1">per night</span>
            </div>
            <Button size="sm" className="bg-black text-white hover:bg-gray-800">
              Book Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Map Component (Placeholder)
const MapComponent = () => {
  return (
    <div className="h-full bg-gray-100 rounded-lg relative overflow-hidden">
      {/* Map placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="w-full h-full relative">
          {/* Simulated map background */}
          <div className="absolute inset-0 opacity-20">
            <svg
              viewBox="0 0 400 600"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid pattern */}
              <defs>
                <pattern
                  id="grid"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Simulated roads */}
              <path
                d="M50 100 Q150 120 250 100 T350 120"
                stroke="#d1d5db"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M100 50 Q120 150 140 250 T160 350"
                stroke="#d1d5db"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M200 80 Q220 180 240 280 T260 380"
                stroke="#d1d5db"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          {/* Hotel pins */}
          {hotels.map((hotel, index) => (
            <div
              key={hotel.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                left: `${25 + (index % 3) * 25}%`,
                top: `${20 + Math.floor(index / 3) * 30}%`,
              }}
            >
              <div className="relative">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs font-medium whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                  {hotel.name}
                </div>
              </div>
            </div>
          ))}

          {/* Map controls */}
          <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-2">
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              <span className="text-lg font-bold">+</span>
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0 mt-1">
              <span className="text-lg font-bold">−</span>
            </Button>
          </div>

          {/* Expand button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 bg-white shadow-lg hover:bg-gray-50"
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
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Hotels in Jakarta, Indonesia
        </h1>
        <p className="text-gray-600">
          We found <span className="font-semibold">2478</span> Premium Hotels
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-gray-100 rounded-lg p-1">
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            className="rounded-md"
            onClick={() => setViewMode("list")}
          >
            <List className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === "map" ? "default" : "ghost"}
            size="sm"
            className="rounded-md"
            onClick={() => setViewMode("map")}
          >
            <Map className="w-4 h-4" />
          </Button>
        </div>
      </div>
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
      <div className="max-w-7xl mx-auto px-6 py-6">
        <ResultsHeader />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Hotels list */}
          <div className="lg:col-span-3 space-y-4">
            <div className="grid gap-6">
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>

            {/* Load more button */}
            <div className="text-center pt-6">
              <Button variant="outline" className="px-8">
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
