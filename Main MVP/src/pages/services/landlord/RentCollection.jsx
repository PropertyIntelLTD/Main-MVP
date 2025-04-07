
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Wallet, BarChart, Clock } from "lucide-react";

const RentCollection = () => {
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
            <h1 className="text-4xl font-bold mb-6">Rent Collection & Financial Management</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Efficient rent collection and comprehensive financial management services
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
                alt="Financial management" src="https://images.unsplash.com/photo-1651129521731-6f6ea5ea0caa" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Streamlined Financial Management</h2>
              <p className="text-gray-600 mb-6">
                Our comprehensive rent collection and financial management service ensures
                timely payments and detailed financial reporting, giving you complete
                visibility into your property's performance.
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
            Financial Management Services
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
          <h2 className="text-3xl font-bold mb-6">Streamline Your Rental Income</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us handle your rent collection and financial management needs.
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
  "Automated rent collection",
  "Monthly financial reporting",
  "Expense tracking and management",
  "Late payment handling",
  "Financial performance analysis",
  "Tax documentation preparation",
];

const services = [
  {
    title: "Rent Collection",
    description: "Automated and manual rent collection with payment tracking and reminders.",
    icon: <Wallet className="w-6 h-6 text-primary" />,
  },
  {
    title: "Financial Reporting",
    description: "Detailed monthly and annual financial reports and analysis.",
    icon: <BarChart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Payment Processing",
    description: "Quick and efficient processing of rent payments and deposits.",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
];

export default RentCollection;
