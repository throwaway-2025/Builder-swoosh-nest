import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Heart,
  Share,
  MapPin,
  Wifi,
  Car,
  UtensilsCrossed,
  Waves,
  Shield,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

// Mock properties database (in real app, this would come from an API)
const mockProperties = [
  {
    id: 1,
    title: "Stunning Ocean View Villa",
    location: "Malibu, California, United States",
    price: 350,
    rating: 4.95,
    reviewCount: 187,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    type: "Entire villa",
    hostName: "Sarah",
    hostImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
    hostJoined: "2019",
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    description: `Experience luxury living in this stunning oceanfront villa in Malibu. Wake up to breathtaking views of the Pacific Ocean and enjoy direct beach access from your private deck.`,
    amenities: [
      { icon: Wifi, name: "WiFi" },
      { icon: Car, name: "Free parking" },
      { icon: UtensilsCrossed, name: "Kitchen" },
      { icon: Waves, name: "Beach access" },
      { icon: Shield, name: "Security cameras" },
    ],
    rules: [
      "Check-in: 3:00 PM - 10:00 PM",
      "Checkout: 11:00 AM",
      "No smoking",
      "No pets",
      "No parties or events",
      "Quiet hours after 10 PM",
    ],
    reviews: [
      {
        id: 1,
        userName: "Mike",
        userImage:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
        rating: 5,
        date: "December 2023",
        comment:
          "Absolutely stunning place! The ocean views are incredible and the house is beautifully appointed. Sarah was a wonderful host and very responsive.",
      },
    ],
  },
  {
    id: 2,
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado, United States",
    price: 225,
    rating: 4.89,
    reviewCount: 134,
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759844-d150baec48c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    type: "Entire cabin",
    hostName: "Mike",
    hostImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    hostJoined: "2020",
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    description: `Escape to this cozy mountain cabin in Aspen. Perfect for a peaceful retreat with stunning mountain views and access to world-class skiing.`,
    amenities: [
      { icon: Wifi, name: "WiFi" },
      { icon: Car, name: "Free parking" },
      { icon: UtensilsCrossed, name: "Kitchen" },
    ],
    rules: [
      "Check-in: 4:00 PM - 9:00 PM",
      "Checkout: 10:00 AM",
      "No smoking",
      "No pets",
    ],
    reviews: [
      {
        id: 1,
        userName: "Sarah",
        userImage:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
        rating: 5,
        date: "January 2024",
        comment:
          "Amazing cabin with beautiful mountain views. Mike was very helpful and responsive.",
      },
    ],
  },
  {
    id: 3,
    title: "Modern Downtown Loft",
    location: "Seattle, Washington, United States",
    price: 189,
    rating: 4.92,
    reviewCount: 298,
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    type: "Entire apartment",
    hostName: "Jessica",
    hostImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    hostJoined: "2018",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    description: `Modern downtown loft in the heart of Seattle. Walking distance to Pike Place Market, restaurants, and nightlife.`,
    amenities: [
      { icon: Wifi, name: "WiFi" },
      { icon: UtensilsCrossed, name: "Kitchen" },
    ],
    rules: [
      "Check-in: 3:00 PM - 11:00 PM",
      "Checkout: 11:00 AM",
      "No smoking",
      "No parties or events",
    ],
    reviews: [
      {
        id: 1,
        userName: "David",
        userImage:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        rating: 5,
        date: "February 2024",
        comment:
          "Perfect location in downtown Seattle. Jessica was an excellent host.",
      },
    ],
  },
  {
    id: 4,
    title: "Desert Oasis Retreat",
    location: "Scottsdale, Arizona, United States",
    price: 275,
    rating: 4.88,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    type: "Entire house",
    hostName: "David",
    hostImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    hostJoined: "2021",
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    description: `Beautiful desert retreat in Scottsdale. Features a private pool and stunning desert views.`,
    amenities: [
      { icon: Wifi, name: "WiFi" },
      { icon: Car, name: "Free parking" },
      { icon: UtensilsCrossed, name: "Kitchen" },
    ],
    rules: [
      "Check-in: 4:00 PM - 10:00 PM",
      "Checkout: 11:00 AM",
      "No smoking",
      "No pets",
    ],
    reviews: [
      {
        id: 1,
        userName: "Emma",
        userImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
        rating: 5,
        date: "March 2024",
        comment:
          "Loved the pool and the desert views. David was very accommodating.",
      },
    ],
  },
  {
    id: 5,
    title: "Lakeside Cottage",
    location: "Lake Tahoe, Nevada, United States",
    price: 195,
    rating: 4.94,
    reviewCount: 203,
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    type: "Entire cottage",
    hostName: "Emma",
    hostImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    hostJoined: "2019",
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    description: `Charming lakeside cottage with stunning views of Lake Tahoe. Perfect for a peaceful retreat with access to water activities.`,
    amenities: [
      { icon: Wifi, name: "WiFi" },
      { icon: Car, name: "Free parking" },
      { icon: UtensilsCrossed, name: "Kitchen" },
      { icon: Waves, name: "Lake access" },
    ],
    rules: [
      "Check-in: 3:00 PM - 8:00 PM",
      "Checkout: 11:00 AM",
      "No smoking",
      "No pets",
    ],
    reviews: [
      {
        id: 1,
        userName: "Robert",
        userImage:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        rating: 5,
        date: "April 2024",
        comment:
          "Beautiful cottage with amazing lake views. Emma was very welcoming.",
      },
    ],
  },
  {
    id: 6,
    title: "Historic City Apartment",
    location: "Savannah, Georgia, United States",
    price: 145,
    rating: 4.87,
    reviewCount: 167,
    images: [
      "https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-4431e5b46ba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    type: "Private room",
    hostName: "Robert",
    hostImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    hostJoined: "2017",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    description: `Historic apartment in the heart of Savannah's historic district. Walking distance to all major attractions.`,
    amenities: [
      { icon: Wifi, name: "WiFi" },
      { icon: UtensilsCrossed, name: "Kitchen" },
    ],
    rules: [
      "Check-in: 2:00 PM - 9:00 PM",
      "Checkout: 10:00 AM",
      "No smoking",
      "No pets",
      "Quiet hours after 9 PM",
    ],
    reviews: [
      {
        id: 1,
        userName: "Lisa",
        userImage:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
        rating: 5,
        date: "May 2024",
        comment:
          "Perfect location in historic Savannah. Robert was very helpful with recommendations.",
      },
    ],
  },
  {
    id: 7,
    title: "Beachfront Bungalow",
    location: "Maui, Hawaii, United States",
    price: 420,
    rating: 4.96,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    type: "Entire bungalow",
    hostName: "Aloha",
    hostImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    hostJoined: "2020",
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    description: `Spectacular beachfront bungalow in Maui with direct beach access and stunning ocean views.`,
    amenities: [
      { icon: Wifi, name: "WiFi" },
      { icon: Car, name: "Free parking" },
      { icon: UtensilsCrossed, name: "Kitchen" },
      { icon: Waves, name: "Beach access" },
    ],
    rules: [
      "Check-in: 4:00 PM - 8:00 PM",
      "Checkout: 11:00 AM",
      "No smoking",
      "No pets",
      "No parties or events",
    ],
    reviews: [
      {
        id: 1,
        userName: "Mark",
        userImage:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
        rating: 5,
        date: "June 2024",
        comment:
          "Incredible beachfront location! Aloha was an amazing host with great local tips.",
      },
    ],
  },
  {
    id: 8,
    title: "Vineyard Estate",
    location: "Napa Valley, California, United States",
    price: 550,
    rating: 4.91,
    reviewCount: 76,
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    type: "Entire estate",
    hostName: "Vincent",
    hostImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    hostJoined: "2016",
    bedrooms: 5,
    bathrooms: 4,
    guests: 10,
    description: `Luxury vineyard estate in the heart of Napa Valley. Perfect for wine lovers with private tastings and vineyard tours.`,
    amenities: [
      { icon: Wifi, name: "WiFi" },
      { icon: Car, name: "Free parking" },
      { icon: UtensilsCrossed, name: "Kitchen" },
      { icon: Shield, name: "Security cameras" },
    ],
    rules: [
      "Check-in: 4:00 PM - 10:00 PM",
      "Checkout: 12:00 PM",
      "No smoking",
      "No pets",
      "No parties or events",
      "Quiet hours after 10 PM",
    ],
    reviews: [
      {
        id: 1,
        userName: "Caroline",
        userImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
        rating: 5,
        date: "July 2024",
        comment:
          "Absolutely stunning vineyard estate! Vincent arranged private wine tastings that were incredible.",
      },
    ],
  },
];

const PropertyDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const property =
    mockProperties.find((p) => p.id === parseInt(id || "1")) ||
    mockProperties[0];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1,
    );
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const totalPrice = nights * property.price;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {property.title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-current text-black" />
                <span className="font-medium">{property.rating}</span>
                <span className="text-gray-600">
                  ({property.reviewCount} reviews)
                </span>
              </div>
              <span className="text-gray-600">•</span>
              <div className="flex items-center space-x-1 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="underline">{property.location}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-2"
              >
                <Share className="w-4 h-4" />
                <span>Share</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`flex items-center space-x-2 ${isLiked ? "text-red-500" : ""}`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                <span>Save</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 rounded-2xl overflow-hidden">
            {/* Main Image */}
            <div className="relative">
              <img
                src={property.images[currentImageIndex]}
                alt={property.title}
                className="w-full h-80 lg:h-96 object-cover"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Thumbnail Grid */}
            <div className="hidden lg:grid grid-cols-2 gap-2">
              {property.images.slice(1, 5).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index + 1)}
                  className={`relative ${index === 3 ? "group" : ""}`}
                >
                  <img
                    src={image}
                    alt={`View ${index + 2}`}
                    className={`w-full h-48 object-cover ${
                      currentImageIndex === index + 1 ? "ring-2 ring-black" : ""
                    }`}
                  />
                  {index === 3 && property.images.length > 5 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-medium">
                      Show all photos
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile thumbnail dots */}
          <div className="flex justify-center space-x-2 mt-4 lg:hidden">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Info */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {property.type} hosted by {property.hostName}
                  </h2>
                  <p className="text-gray-600">
                    {property.guests} guests • {property.bedrooms} bedrooms •{" "}
                    {property.bathrooms} bathrooms
                  </p>
                </div>
                <img
                  src={property.hostImage}
                  alt={property.hostName}
                  className="w-12 h-12 rounded-full"
                />
              </div>
            </div>

            {/* Description */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                About this place
              </h3>
              <div className="text-gray-600 space-y-4">
                {property.description.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What this place offers
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <amenity.icon className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex items-center space-x-2 mb-6">
                <Star className="w-5 h-5 fill-current text-black" />
                <span className="text-lg font-semibold">{property.rating}</span>
                <span className="text-gray-600">
                  • {property.reviewCount} reviews
                </span>
              </div>

              <div className="space-y-6">
                {property.reviews.map((review) => (
                  <div key={review.id} className="flex space-x-4">
                    <img
                      src={review.userImage}
                      alt={review.userName}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-medium">{review.userName}</span>
                        <span className="text-gray-500 text-sm">
                          {review.date}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-current text-black"
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="mt-6">
                Show all {property.reviewCount} reviews
              </Button>
            </div>

            {/* Rules */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Things to know
              </h3>
              <div className="space-y-2">
                {property.rules.map((rule, index) => (
                  <p key={index} className="text-gray-600">
                    • {rule}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border border-gray-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-2xl font-bold">
                      ${property.price}
                    </span>
                    <span className="text-gray-600">night</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current text-black" />
                    <span className="font-medium">{property.rating}</span>
                    <span className="text-gray-600">
                      ({property.reviewCount})
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-gray-900 mb-1">
                        CHECK-IN
                      </label>
                      <Input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-900 mb-1">
                        CHECKOUT
                      </label>
                      <Input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-900 mb-1">
                      GUESTS
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                    >
                      {[...Array(property.guests)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} guest{i > 0 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <Button className="w-full bg-black hover:bg-gray-800 text-white mb-4">
                  Reserve
                </Button>

                <p className="text-center text-sm text-gray-600 mb-4">
                  You won't be charged yet
                </p>

                {nights > 0 && (
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span>
                        ${property.price} x {nights} nights
                      </span>
                      <span>${totalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cleaning fee</span>
                      <span>$75</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>$95</span>
                    </div>
                    <div className="flex justify-between font-semibold pt-2 border-t border-gray-200">
                      <span>Total</span>
                      <span>${totalPrice + 75 + 95}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
