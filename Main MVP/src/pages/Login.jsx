import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building, Users, BarChart2 as ChartBar, Calendar, Key, Shield, Settings, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";

const features = {
  landlord: [
    { icon: Building, title: "Property Management", description: "Manage all your properties in one place" },
    { icon: Calendar, title: "Maintenance Scheduling", description: "Schedule and track maintenance requests" },
    { icon: ChartBar, title: "Financial Analytics", description: "Track rent payments and expenses" }
  ],
  tenant: [
    { icon: Key, title: "Rent Payments", description: "Easy online rent payments" },
    { icon: MessageSquare, title: "Maintenance Requests", description: "Submit and track maintenance issues" },
    { icon: Shield, title: "Document Storage", description: "Access important documents securely" }
  ],
  agent: [
    { icon: Users, title: "Client Management", description: "Manage landlords and tenants" },
    { icon: Shield, title: "Property Listings", description: "Create and manage property listings" },
    { icon: ChartBar, title: "Performance Metrics", description: "Track your performance" }
  ]
};

const FeaturePreview = ({ role, features }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg p-6 shadow-lg"
  >
    <h3 className="text-xl font-bold mb-4 text-primary">{role} Dashboard</h3>
    <div className="space-y-4">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-3"
          >
            <div className="bg-primary/10 p-2 rounded-lg">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </motion.div>
);

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Coming Soon Message instead of Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900">Coming Soon</h2>
          <p className="text-gray-600 mt-2">
            Our login and dashboard features are under construction. Please check back soon for an improved experience!
          </p>
          <div className="mt-6">
            <Link to="/contact" className="text-primary hover:underline">
              Contact us
            </Link>{" "}
            for more information.
          </div>
        </motion.div>
      </div>

      {/* Feature Previews */}
      <div className="hidden lg:block lg:w-1/2 bg-gray-900 p-8 overflow-y-auto">
        <div className="max-w-lg mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Upcoming Features</h2>
            <p className="text-gray-400">
              Explore our upcoming dashboard features designed for property professionals.
            </p>
          </motion.div>
          <motion.div className="space-y-8">
            <FeaturePreview role="Landlord" features={features.landlord} />
            <FeaturePreview role="Tenant" features={features.tenant} />
            <FeaturePreview role="Agent" features={features.agent} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;