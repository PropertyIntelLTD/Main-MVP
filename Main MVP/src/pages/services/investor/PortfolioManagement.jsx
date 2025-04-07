
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, BarChart, LineChart, PieChart } from "lucide-react";

const PortfolioManagement = () => {
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
            <h1 className="text-4xl font-bold mb-6">Portfolio Management</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Optimize your property portfolio performance with our expert management solutions
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
                alt="Portfolio Management"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Strategic Portfolio Optimization</h2>
              <p className="text-gray-600 mb-6">
                Our portfolio management service helps you maximize returns while minimizing
                risks across your entire property portfolio. We use advanced analytics and
                market insights to make data-driven decisions for your investments.
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
                Optimize Your Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Portfolio Management Services
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
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Portfolio?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let our experts help you maximize the potential of your property investments.
          </p>
          <Button size="lg" variant="secondary">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

const features = [
  "Portfolio diversification strategies",
  "Performance tracking and reporting",
  "Risk assessment and mitigation",
  "Market opportunity analysis",
  "Asset allocation optimization",
  "Regular portfolio rebalancing",
];

const services = [
  {
    title: "Performance Analytics",
    description: "Comprehensive analysis of your portfolio's performance with detailed metrics and insights.",
    icon: <BarChart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Risk Management",
    description: "Strategic risk assessment and management across your property portfolio.",
    icon: <LineChart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Asset Allocation",
    description: "Optimal asset allocation strategies to maximize returns and minimize risks.",
    icon: <PieChart className="w-6 h-6 text-primary" />,
  },
];

export default PortfolioManagement;
