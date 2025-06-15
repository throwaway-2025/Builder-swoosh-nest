import React, { useState } from "react";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
  Wifi,
  Car,
  UtensilsCrossed,
  Waves,
  Mountain,
  Building2,
  Trees,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import PropertyCard from "@/components/PropertyCard";

// Sample properties data
const featuredProperties = [
  {
    id: 1,
    title: "Stunning Ocean View Villa",
    location: "Malibu, California",
    price: 350,
    rating: 4.95,
    reviewCount: 187,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    type: "Entire villa",
    hostName: "Sarah",
    isGuestFavorite: true,
    dates: "Dec 15-20",
  },
  {
    id: 2,
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    price: 225,
    rating: 4.89,
    reviewCount: 134,
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    type: "Entire cabin",
    hostName: "Mike",
    isGuestFavorite: false,
  },
  {
    id: 3,
    title: "Modern Downtown Loft",
    location: "Seattle, Washington",
    price: 189,
    rating: 4.92,
    reviewCount: 298,
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    type: "Entire apartment",
    hostName: "Jessica",
    isGuestFavorite: true,
  },
  {
    id: 4,
    title: "Desert Oasis Retreat",
    location: "Scottsdale, Arizona",
    price: 275,
    rating: 4.88,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    type: "Entire house",
    hostName: "David",
    isGuestFavorite: false,
  },
  {
    id: 5,
    title: "Lakeside Cottage",
    location: "Lake Tahoe, Nevada",
    price: 195,
    rating: 4.94,
    reviewCount: 203,
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    type: "Entire cottage",
    hostName: "Emma",
    isGuestFavorite: true,
  },
  {
    id: 6,
    title: "Historic City Apartment",
    location: "Savannah, Georgia",
    price: 145,
    rating: 4.87,
    reviewCount: 167,
    images: [
      "https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    type: "Private room",
    hostName: "Robert",
    isGuestFavorite: false,
  },
  {
    id: 7,
    title: "Beachfront Bungalow",
    location: "Maui, Hawaii",
    price: 420,
    rating: 4.96,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    type: "Entire bungalow",
    hostName: "Aloha",
    isGuestFavorite: true,
  },
  {
    id: 8,
    title: "Vineyard Estate",
    location: "Napa Valley, California",
    price: 550,
    rating: 4.91,
    reviewCount: 76,
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    type: "Entire estate",
    hostName: "Vincent",
    isGuestFavorite: false,
  },
];

const categories = [
  {
    name: "Beach",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&q=80",
  },
  {
    name: "Mountains",
    icon: Mountain,
    image:
      "https://images.unsplash.com/photo-1464822759844-d150baec48c2?w=300&q=80",
  },
  {
    name: "Cities",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=300&q=80",
  },
  {
    name: "Countryside",
    icon: Trees,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80",
  },
  {
    name: "Trending",
    icon: Star,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&q=80",
  },
];

// Search Component
const SearchForm = () => {
  const [searchData, setSearchData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-full shadow-xl border border-gray-200 p-1 hover:shadow-2xl transition-shadow duration-300">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {/* Location */}
          <div className="relative group">
            <div className="flex items-center px-6 py-4 rounded-full hover:bg-gray-50 transition-all duration-200 cursor-pointer">
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">
                  Where
                </label>
                <Input
                  placeholder="Search destinations"
                  value={searchData.location}
                  onChange={(e) =>
                    setSearchData({ ...searchData, location: e.target.value })
                  }
                  className="border-0 p-0 text-sm font-medium placeholder:text-gray-400 focus-visible:ring-0 bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Check-in */}
          <div className="relative group border-l border-gray-200">
            <div className="flex items-center px-6 py-4 rounded-full hover:bg-gray-50 transition-all duration-200 cursor-pointer">
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">
                  Check in
                </label>
                {searchData.checkIn ? (
                  <Input
                    type="date"
                    value={searchData.checkIn}
                    onChange={(e) =>
                      setSearchData({ ...searchData, checkIn: e.target.value })
                    }
                    className="border-0 p-0 text-sm font-medium focus-visible:ring-0 bg-transparent"
                  />
                ) : (
                  <button
                    onClick={() => {
                      const dateInput = document.querySelector(
                        'input[type="date"][data-field="checkIn"]',
                      ) as HTMLInputElement;
                      if (dateInput) dateInput.showPicker();
                    }}
                    className="text-left text-sm text-gray-400 font-medium"
                  >
                    Add dates
                  </button>
                )}
                <Input
                  type="date"
                  data-field="checkIn"
                  value={searchData.checkIn}
                  onChange={(e) =>
                    setSearchData({ ...searchData, checkIn: e.target.value })
                  }
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {/* Check-out */}
          <div className="relative group border-l border-gray-200">
            <div className="flex items-center px-6 py-4 rounded-full hover:bg-gray-50 transition-all duration-200 cursor-pointer">
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">
                  Check out
                </label>
                {searchData.checkOut ? (
                  <Input
                    type="date"
                    value={searchData.checkOut}
                    onChange={(e) =>
                      setSearchData({ ...searchData, checkOut: e.target.value })
                    }
                    className="border-0 p-0 text-sm font-medium focus-visible:ring-0 bg-transparent"
                  />
                ) : (
                  <button
                    onClick={() => {
                      const dateInput = document.querySelector(
                        'input[type="date"][data-field="checkOut"]',
                      ) as HTMLInputElement;
                      if (dateInput) dateInput.showPicker();
                    }}
                    className="text-left text-sm text-gray-400 font-medium"
                  >
                    Add dates
                  </button>
                )}
                <Input
                  type="date"
                  data-field="checkOut"
                  value={searchData.checkOut}
                  onChange={(e) =>
                    setSearchData({ ...searchData, checkOut: e.target.value })
                  }
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {/* Guests & Search */}
          <div className="relative group border-l border-gray-200">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">
                  Who
                </label>
                <select
                  value={searchData.guests}
                  onChange={(e) =>
                    setSearchData({
                      ...searchData,
                      guests: parseInt(e.target.value),
                    })
                  }
                  className="border-0 p-0 text-sm font-medium bg-transparent focus:outline-none cursor-pointer text-gray-600"
                >
                  <option value={1}>1 guest</option>
                  <option value={2}>2 guests</option>
                  <option value={3}>3 guests</option>
                  <option value={4}>4 guests</option>
                  <option value={5}>5+ guests</option>
                </select>
              </div>
              <Button
                size="sm"
                className="rounded-full w-12 h-12 bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 ml-3 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Category Card Component
const CategoryCard = ({ category }: { category: any }) => {
  const Icon = category.icon;
  return (
    <Card className="overflow-hidden border-0 cursor-pointer hover:shadow-md transition-shadow">
      <div className="relative aspect-square">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white">
          <Icon className="w-8 h-8 mb-2" />
          <span className="font-semibold">{category.name}</span>
        </div>
      </div>
    </Card>
  );
};

// Main Homepage Component
export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-gray-200/10 to-slate-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 pt-20 pb-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 text-balance leading-tight">
              Find your next{" "}
              <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                stay
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto text-balance font-medium leading-relaxed">
              Discover amazing places to stay around the world. From cozy
              apartments to luxury villas.
            </p>
            <SearchForm />

            {/* Popular searches */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <span className="text-sm text-gray-500 mr-2">Popular:</span>
              {["New York", "Paris", "Tokyo", "London", "Bali"].map((city) => (
                <button
                  key={city}
                  className="px-4 py-2 bg-white/80 hover:bg-white text-gray-700 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md border border-gray-200/50"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-8 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-50 transition-colors min-w-0 whitespace-nowrap"
                >
                  <category.icon className="w-6 h-6 text-gray-600" />
                  <span className="text-sm font-medium text-gray-900">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured stays</h2>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Discover experiences
            </h2>
            <p className="text-lg text-gray-600">
              Unique activities hosted by locals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cooking Classes",
                description: "Learn to cook local dishes",
                image:
                  "https://images.unsplash.com/photo-1556909114-4431e5b46ba3?w=500&q=80",
              },
              {
                title: "City Tours",
                description: "Explore hidden gems",
                image:
                  "https://images.unsplash.com/photo-1539650116574-75c0c6d14d56?w=500&q=80",
              },
              {
                title: "Adventure Sports",
                description: "Thrilling outdoor activities",
                image:
                  "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&q=80",
              },
            ].map((experience, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-gray-600">{experience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold">StayFinder</span>
              </div>
              <p className="text-gray-400 text-sm">
                Find amazing places to stay around the world.
              </p>
            </div>

            {[
              {
                title: "Support",
                links: [
                  "Help Center",
                  "Safety information",
                  "Cancellation options",
                  "Contact us",
                ],
              },
              {
                title: "Community",
                links: [
                  "Diversity & belonging",
                  "Accessibility",
                  "StayFinder Associates",
                ],
              },
              {
                title: "Hosting",
                links: [
                  "Host your home",
                  "Host an experience",
                  "Responsible hosting",
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 StayFinder. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
