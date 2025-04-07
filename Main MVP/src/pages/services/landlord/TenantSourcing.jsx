
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Search, FileCheck, UserCheck } from "lucide-react";

const TenantSourcing = () => {
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
            <h1 className="text-4xl font-bold mb-6">Tenant Sourcing & Screening</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find reliable, quality tenants for your property with our comprehensive screening process
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
                alt="Tenant screening process" src="https://images.unsplash.com/photo-1565717565422-d33a55df799e" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Expert Tenant Selection</h2>
              <p className="text-gray-600 mb-6">
                Our thorough tenant sourcing and screening process ensures you get reliable,
                responsible tenants who will take care of your property and pay rent on time.
                We handle everything from marketing to background checks.
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
                Start Screening <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Screening Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-white shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Quality Tenants?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect tenants for your property.
          </p>
          <Button size="lg" variant="secondary">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

const features = [
  "Comprehensive background checks",
  "Credit history verification",
  "Employment and income verification",
  "Previous landlord references",
  "Property viewing coordination",
  "Lease agreement preparation",
];

const process = [
  {
    title: "Initial Screening",
    description: "Thorough review of applications and initial qualification checks.",
    icon: <Search className="w-6 h-6 text-primary" />,
  },
  {
    title: "Background Checks",
    description: "Comprehensive verification of credit, employment, and rental history.",
    icon: <FileCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "Final Approval",
    description: "Detailed assessment and final tenant selection process.",
    icon: <UserCheck className="w-6 h-6 text-primary" />,
  },
];

export default TenantSourcing;
