
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Bell, Camera } from "lucide-react";

const Security = () => {
  const features = [
    {
      icon: Lock,
      title: "Access Control",
      description: "Advanced electronic key systems and secure entry management"
    },
    {
      icon: Camera,
      title: "CCTV Systems",
      description: "24/7 surveillance and monitoring solutions"
    },
    {
      icon: Bell,
      title: "Alarm Systems",
      description: "State-of-the-art intruder detection and alert systems"
    },
    {
      icon: Shield,
      title: "Security Personnel",
      description: "Professional security staff and concierge services"
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
          Property Security Solutions
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
          Comprehensive security solutions to protect your property investments
          and ensure peace of mind for all stakeholders.
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
        <h2 className="text-3xl font-bold mb-6">Enhance Your Property Security</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Get in touch with our security experts to discuss your specific requirements
          and receive a customized security solution.
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

export default Security;
