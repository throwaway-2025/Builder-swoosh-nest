import React, { useState } from "react";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  Heart,
  ChevronLeft,
  ChevronRight,
  Menu,
  User,
  Globe,
  Wifi,
  Car,
  UtensilsCrossed,
  Dumbbell,
  Waves,
  Mountain,
  Building2,
  Trees,
  Sailboat,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Hotel data
const featuredHotels = [
  {
    id: 1,
    name: "Ocean View Resort",
    location: "Malibu, California",
    price: 245,
    rating: 4.95,
    reviews: 187,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isGuestFavorite: true,
    amenities: ["Ocean View", "Pool", "Spa"],
  },
  {
    id: 2,
    name: "Mountain Lodge Retreat",
    location: "Aspen, Colorado",
    price: 189,
    rating: 4.92,
    reviews: 134,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isGuestFavorite: true,
    amenities: ["Mountain View", "Fireplace", "Ski Access"],
  },
  {
    id: 3,
    name: "City Center Boutique",
    location: "Downtown Seattle",
    price: 156,
    rating: 4.88,
    reviews: 298,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isGuestFavorite: false,
    amenities: ["City View", "Rooftop Bar", "Gym"],
  },
  {
    id: 4,
    name: "Desert Oasis Hotel",
    location: "Scottsdale, Arizona",
    price: 199,
    rating: 4.91,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isGuestFavorite: true,
    amenities: ["Desert View", "Spa", "Golf Course"],
  },
  {
    id: 5,
    name: "Lakeside Manor",
    location: "Lake Tahoe, Nevada",
    price: 220,
    rating: 4.94,
    reviews: 203,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isGuestFavorite: false,
    amenities: ["Lake View", "Beach Access", "Water Sports"],
  },
  {
    id: 6,
    name: "Historic Inn & Suites",
    location: "Savannah, Georgia",
    price: 134,
    rating: 4.89,
    reviews: 167,
    image:
      "https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isGuestFavorite: true,
    amenities: ["Historic Charm", "Garden", "Fine Dining"],
  },
];

const categories = [
  {
    name: "Beachfront",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Mountain",
    icon: Mountain,
    image:
      "https://images.unsplash.com/photo-1464822759844-d150baec48c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "City",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Countryside",
    icon: Trees,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Lakefront",
    icon: Sailboat,
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
];

// Components
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-coral-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-neutral-900">
                StayVista
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <a
                href="#"
                className="text-neutral-700 hover:text-neutral-900 font-medium"
              >
                Hotels
              </a>
              <a
                href="#"
                className="text-neutral-700 hover:text-neutral-900 font-medium"
              >
                Experiences
              </a>
              <a
                href="#"
                className="text-neutral-700 hover:text-neutral-900 font-medium"
              >
                Destinations
              </a>
            </nav>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Become a host
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 rounded-full"
            >
              <Globe className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 rounded-full"
            >
              <User className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

const SearchForm = () => {
  const [searchData, setSearchData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-4xl shadow-search border border-neutral-200 p-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {/* Location */}
          <div className="relative">
            <div className="flex items-center space-x-3 p-4 rounded-3xl hover:bg-neutral-50 transition-colors">
              <MapPin className="w-4 h-4 text-neutral-400" />
              <div className="flex-1">
                <label className="block text-xs font-semibold text-neutral-900 mb-1">
                  Where
                </label>
                <Input
                  placeholder="Search destinations"
                  value={searchData.location}
                  onChange={(e) =>
                    setSearchData({ ...searchData, location: e.target.value })
                  }
                  className="border-0 p-0 text-sm placeholder:text-neutral-400 focus-visible:ring-0"
                />
              </div>
            </div>
          </div>

          {/* Check-in */}
          <div className="relative border-l border-neutral-200">
            <div className="flex items-center space-x-3 p-4 rounded-3xl hover:bg-neutral-50 transition-colors">
              <Calendar className="w-4 h-4 text-neutral-400" />
              <div className="flex-1">
                <label className="block text-xs font-semibold text-neutral-900 mb-1">
                  Check in
                </label>
                <Input
                  type="date"
                  value={searchData.checkIn}
                  onChange={(e) =>
                    setSearchData({ ...searchData, checkIn: e.target.value })
                  }
                  className="border-0 p-0 text-sm focus-visible:ring-0"
                />
              </div>
            </div>
          </div>

          {/* Check-out */}
          <div className="relative border-l border-neutral-200">
            <div className="flex items-center space-x-3 p-4 rounded-3xl hover:bg-neutral-50 transition-colors">
              <Calendar className="w-4 h-4 text-neutral-400" />
              <div className="flex-1">
                <label className="block text-xs font-semibold text-neutral-900 mb-1">
                  Check out
                </label>
                <Input
                  type="date"
                  value={searchData.checkOut}
                  onChange={(e) =>
                    setSearchData({ ...searchData, checkOut: e.target.value })
                  }
                  className="border-0 p-0 text-sm focus-visible:ring-0"
                />
              </div>
            </div>
          </div>

          {/* Guests & Search */}
          <div className="relative border-l border-neutral-200">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-3">
                <Users className="w-4 h-4 text-neutral-400" />
                <div>
                  <label className="block text-xs font-semibold text-neutral-900 mb-1">
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
                    className="border-0 p-0 text-sm bg-transparent focus:outline-none"
                  >
                    <option value={1}>1 guest</option>
                    <option value={2}>2 guests</option>
                    <option value={3}>3 guests</option>
                    <option value={4}>4 guests</option>
                    <option value={5}>5+ guests</option>
                  </select>
                </div>
              </div>
              <Button
                size="lg"
                className="rounded-full w-12 h-12 bg-brand-500 hover:bg-brand-600"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HotelCard = ({ hotel }: { hotel: (typeof featuredHotels)[0] }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {hotel.isGuestFavorite && (
          <Badge className="absolute top-3 left-3 bg-white/90 text-neutral-900 hover:bg-white">
            Guest favorite
          </Badge>
        )}
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-3 right-3 w-8 h-8 rounded-full ${
            isLiked ? "text-coral-500" : "text-neutral-600"
          } hover:scale-110 transition-all`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-neutral-900 line-clamp-1">
                {hotel.name}
              </h3>
              <p className="text-sm text-neutral-600">{hotel.location}</p>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span className="font-medium">{hotel.rating}</span>
              <span className="text-neutral-500">({hotel.reviews})</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {hotel.amenities.slice(0, 2).map((amenity) => (
              <Badge key={amenity} variant="secondary" className="text-xs">
                {amenity}
              </Badge>
            ))}
          </div>
          <div className="flex items-baseline space-x-1">
            <span className="text-lg font-bold text-neutral-900">
              ${hotel.price}
            </span>
            <span className="text-sm text-neutral-600">per night</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CategoryCard = ({ category }: { category: (typeof categories)[0] }) => {
  const Icon = category.icon;

  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer">
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <Icon className="w-8 h-8 mb-2" />
          <span className="font-semibold text-lg">{category.name}</span>
        </div>
      </div>
    </Card>
  );
};

const HotelSection = ({
  title,
  hotels,
}: {
  title: string;
  hotels: typeof featuredHotels;
}) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-neutral-900">{title}</h2>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-coral-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-neutral-900">
                StayVista
              </span>
            </div>
            <p className="text-neutral-600 text-sm">
              Discover amazing hotels and experiences around the world.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <a href="#" className="hover:text-neutral-900">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900">
                  Cancellation Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900">
                  Safety Information
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <a href="#" className="hover:text-neutral-900">
                  Partner Hotels
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900">
                  Refer Friends
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900">
                  StayVista for Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 mb-4">About</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <a href="#" className="hover:text-neutral-900">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-600">
            © 2024 StayVista. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-4 text-sm text-neutral-600">
              <a href="#" className="hover:text-neutral-900">
                Privacy
              </a>
              <a href="#" className="hover:text-neutral-900">
                Terms
              </a>
              <a href="#" className="hover:text-neutral-900">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Index component
export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Beautiful hotel view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 pt-20 pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Find your perfect stay
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto text-balance">
              Discover amazing hotels, resorts, and unique accommodations around
              the world. Book with confidence and create unforgettable memories.
            </p>

            <SearchForm />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Explore by destination type
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Whether you're looking for a beachfront getaway or a mountain
              retreat, find the perfect setting for your next adventure.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <HotelSection title="Featured hotels" hotels={featuredHotels} />

      {/* Popular Destinations */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Popular destinations
            </h2>
            <p className="text-lg text-neutral-600">
              Discover the most loved destinations by our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "New York",
                hotels: "1,240 hotels",
                image:
                  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Paris",
                hotels: "892 hotels",
                image:
                  "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Tokyo",
                hotels: "1,156 hotels",
                image:
                  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "London",
                hotels: "967 hotels",
                image:
                  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              },
            ].map((destination) => (
              <Card
                key={destination.name}
                className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              >
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                    <p className="text-white/90">{destination.hotels}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
