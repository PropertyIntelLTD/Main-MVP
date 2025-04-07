
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const PropertyManagement = () => {
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
            <h1 className="text-4xl font-bold mb-6">Property Management</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional property management services to maximize your investment's potential
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
                alt="Property Management"
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Comprehensive Management Solutions</h2>
              <p className="text-gray-600 mb-6">
                Our property management service takes care of every aspect of your property,
                from tenant screening to maintenance coordination. We ensure your property
                performs at its best while you enjoy passive income.
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
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefits of Our Property Management
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg bg-white shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us handle your property management needs while you focus on what matters most.
          </p>
          <Button size="lg" variant="secondary">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

const features = [
  "Tenant screening and placement",
  "Rent collection and financial reporting",
  "Property maintenance coordination",
  "24/7 emergency response",
  "Regular property inspections",
  "Legal compliance management",
];

const benefits = [
  {
    title: "Maximize Returns",
    description: "Optimize rental income and reduce expenses through professional management.",
  },
  {
    title: "Save Time",
    description: "Focus on what matters while we handle day-to-day property operations.",
  },
  {
    title: "Reduce Stress",
    description: "Peace of mind knowing your property is in expert hands.",
  },
];

export default PropertyManagement;
