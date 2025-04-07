
import React from "react";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    title: "Luxury Apartment",
    location: "Downtown",
    price: "$2,500/mo",
    features: "2 beds • 2 baths • 1,200 sqft",
  },
  {
    id: 2,
    title: "Modern Villa",
    location: "Suburban Area",
    price: "$3,800/mo",
    features: "4 beds • 3 baths • 2,500 sqft",
  },
  {
    id: 3,
    title: "Studio Apartment",
    location: "City Center",
    price: "$1,800/mo",
    features: "1 bed • 1 bath • 600 sqft",
  },
];

const FeaturedProperties = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Properties
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Explore our hand-picked selection of premium properties available for
            rent.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="property-card"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  className="h-full w-full object-cover"
                  alt={`${property.title} property`}
                 src="https://images.unsplash.com/photo-1539348648513-e460ea576ad3" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {property.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{property.location}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    {property.price}
                  </span>
                  <span className="text-sm text-gray-500">{property.features}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
