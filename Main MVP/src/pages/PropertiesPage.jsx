
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { fetchProperties } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";
import { Building, MapPin, BedDouble, Bath } from "lucide-react";

function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      const data = await fetchProperties();
      setProperties(data);
      setLoading(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load properties",
      });
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <p className="text-xl">Loading properties...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-primary/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Available Properties
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover your perfect property from our carefully curated selection of premium listings.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/properties/${property.id}`}>
                <div className="aspect-video relative">
                  <img 
                    className="w-full h-full object-cover"
                    alt={`${property.name} property`}
                   src="https://images.unsplash.com/photo-1659858358968-2b588aa315ef" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 text-primary rounded-full text-sm font-medium">
                      {property.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.address}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <BedDouble className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Bath className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.size} sq ft</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-primary">${property.rent}/mo</p>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-primary/5 rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect property. Contact our team for personalized assistance.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline">Our Services</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PropertiesPage;
