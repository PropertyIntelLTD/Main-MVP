import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, ClipboardCheck, Sparkles, Key } from "lucide-react";

const EndOfTenancy = () => {
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
            <h1 className="text-4xl font-bold mb-6">End of Tenancy Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional end of tenancy management and property turnaround services
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
                alt="End of Tenancy Service"
               src="https://images.unsplash.com/photo-1573492466940-3156e63dc25b" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Comprehensive End of Tenancy Management</h2>
              <p className="text-gray-600 mb-6">
                Our end of tenancy service ensures a smooth transition between tenants,
                handling everything from property inspection to preparation for new occupants.
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
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our End of Tenancy Process
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
          <h2 className="text-3xl font-bold mb-6">Need End of Tenancy Services?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us handle your property transition professionally and efficiently.
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
  "Detailed property inspection",
  "Professional cleaning services",
  "Maintenance and repairs",
  "Inventory check and documentation",
  "Deposit handling assistance",
  "New tenant preparation",
];

const services = [
  {
    title: "Property Inspection",
    description: "Thorough inspection and documentation of property condition.",
    icon: <ClipboardCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "Deep Cleaning",
    description: "Professional deep cleaning to prepare for new tenants.",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
  {
    title: "Handover Process",
    description: "Smooth transition and key handover management.",
    icon: <Key className="w-6 h-6 text-primary" />,
  },
];

export default EndOfTenancy;
