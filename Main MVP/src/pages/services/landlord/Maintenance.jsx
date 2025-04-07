
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Wrench as Tool, Clock, Shield } from 'lucide-react';

const Maintenance = () => {
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
            <h1 className="text-4xl font-bold mb-6">Maintenance & Repairs</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional maintenance services to keep your properties in optimal condition
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
                alt="Property Maintenance"
               src="https://images.unsplash.com/photo-1612618736568-d0d3888817c0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Comprehensive Maintenance Solutions</h2>
              <p className="text-gray-600 mb-6">
                Our maintenance service ensures your properties are well-maintained and issues
                are resolved quickly. We handle everything from routine maintenance to
                emergency repairs, keeping your properties in excellent condition.
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
                Schedule Service <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Maintenance Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-white shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Maintenance Services?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team of professionals is ready to help maintain your property in perfect condition.
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
  "24/7 emergency response",
  "Preventive maintenance programs",
  "Qualified and vetted contractors",
  "Regular property inspections",
  "Detailed maintenance reporting",
  "Cost-effective solutions",
];

const services = [
  {
    title: "Emergency Repairs",
    description: "24/7 response to urgent maintenance issues to protect your property.",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
  {
    title: "Routine Maintenance",
    description: "Regular upkeep and preventive maintenance to avoid major issues.",
    icon: <Tool className="w-6 h-6 text-primary" />,
  },
  {
    title: "Property Protection",
    description: "Comprehensive maintenance to preserve your property's value.",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
];

export default Maintenance;
