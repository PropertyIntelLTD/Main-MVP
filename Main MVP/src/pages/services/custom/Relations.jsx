
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, HeartHandshake, Clock, Shield } from "lucide-react";

const Relations = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Communication Platform",
      description: "Dedicated channels for tenant-landlord communication"
    },
    {
      icon: HeartHandshake,
      title: "Conflict Resolution",
      description: "Professional mediation and dispute resolution services"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for urgent matters"
    },
    {
      icon: Shield,
      title: "Rights Protection",
      description: "Ensuring both tenant and landlord rights are protected"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Tenant Relations Management
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
          Building strong, lasting relationships between tenants and landlords through
          professional management and clear communication.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-24 bg-primary/5 rounded-lg p-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Improve Your Tenant Relations</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover how our tenant relations management can help create a positive
          environment for both tenants and landlords.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
          <Link to="/services/custom">
            <Button size="lg" variant="outline">View All Solutions</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Relations;
