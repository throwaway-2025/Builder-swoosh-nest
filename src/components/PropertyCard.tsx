import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  images: string[];
  type: string;
  hostName: string;
  isGuestFavorite?: boolean;
  dates?: string;
}

interface PropertyCardProps {
  property: Property;
  showDates?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  showDates = false,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1,
    );
  };

  return (
    <Card className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
      <Link to={`/property/${property.id}`}>
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-t-2xl">
            <img
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Image navigation dots */}
          {property.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {property.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Guest favorite badge */}
          {property.isGuestFavorite && (
            <Badge className="absolute top-3 left-3 bg-white text-gray-900 hover:bg-white">
              Guest favorite
            </Badge>
          )}

          {/* Heart icon */}
          <Button
            variant="ghost"
            size="sm"
            className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white ${
              isLiked ? "text-red-500" : "text-gray-600"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
          </Button>

          {/* Navigation arrows */}
          {property.images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={prevImage}
              >
                ←
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={nextImage}
              >
                →
              </Button>
            </>
          )}
        </div>
      </Link>

      <CardContent className="p-4">
        <Link to={`/property/${property.id}`}>
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 line-clamp-1">
                  {property.location}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-1">
                  {property.type} • Hosted by {property.hostName}
                </p>
                {showDates && property.dates && (
                  <p className="text-sm text-gray-600">{property.dates}</p>
                )}
              </div>
              <div className="flex items-center space-x-1 ml-2">
                <Star className="w-4 h-4 fill-current text-gray-900" />
                <span className="text-sm font-medium">{property.rating}</span>
                <span className="text-sm text-gray-600">
                  ({property.reviewCount})
                </span>
              </div>
            </div>
            <div className="flex items-baseline space-x-1">
              <span className="text-base font-semibold text-gray-900">
                ${property.price}
              </span>
              <span className="text-sm text-gray-600">night</span>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
