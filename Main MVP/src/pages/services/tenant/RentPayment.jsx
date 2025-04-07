
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, Clock, Shield } from "lucide-react";

const RentPayment = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "Various payment methods including card, bank transfer, and digital wallets"
    },
    {
      icon: Clock,
      title: "Automated Payments",
      description: "Set up recurring payments for hassle-free rent collection"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Protected payment processing with advanced security measures"
    },
    {
      icon: Wallet,
      title: "Payment History",
      description: "Track and manage your payment history with detailed records"
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
          Rent Payment Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
          Simple, secure, and convenient rent payment solutions for tenants.
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-24 bg-primary/5 rounded-lg p-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Start Paying Rent Online</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Make rent payments easier with our secure online payment system.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/contact">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link to="/services/tenant">
            <Button size="lg" variant="outline">View All Services</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default RentPayment;
