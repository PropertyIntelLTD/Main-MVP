
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Search, Home, Filter } from "lucide-react";

const PropertySearch = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">Find Your Perfect Home</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our extensive property listings and find the perfect rental property for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                className="rounded-lg w-full h-[400px] object-cover"
                alt="Modern apartment interior" src="https://images.unsplash.com/photo-1497366412874-3415097a27e7" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Easy Property Search</h2>
              <p className="text-gray-600 mb-6">
                Our advanced property search system helps you find exactly what you're
                looking for. Filter by location, price, amenities, and more to discover
                your ideal rental property.
              </p>
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary w-5 h-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg">
                Start Searching <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Search Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {searchFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-white shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your New Home?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start your property search today and find the perfect place to call home.
          </p>
          <Button size="lg" variant="secondary">
            Browse Properties
          </Button>
        </div>
      </section>
    </div>
  );
};

const features = [
  "Advanced search filters",
  "High-quality property photos",
  "Detailed property descriptions",
  "Virtual tours available",
  "Instant booking requests",
  "Neighborhood information",
];

const searchFeatures = [
  {
    title: "Smart Search",
    description: "Advanced search algorithms to help you find exactly what you're looking for.",
    icon: <Search className="w-6 h-6 text-primary" />,
  },
  {
    title: "Property Matching",
    description: "Get matched with properties that fit your specific requirements.",
    icon: <Home className="w-6 h-6 text-primary" />,
  },
  {
    title: "Custom Filters",
    description: "Filter properties by price, location, amenities, and more.",
    icon: <Filter className="w-6 h-6 text-primary" />,
  },
];

export default PropertySearch;
