
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const InvestorServices = () => {
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
            <h1 className="text-4xl font-bold mb-6">Investor Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Maximize your property investment returns with our expert services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investorServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Portfolio?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let our investment experts help you maximize your returns.
          </p>
          <Button size="lg" variant="secondary">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className="bg-white rounded-lg overflow-hidden shadow-lg"
  >
    <img
      className="w-full h-48 object-cover"
      alt={service.title}
      src={service.image}
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <Link to={service.link}>
        <Button className="w-full">
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    </div>
  </motion.div>
);

const investorServices = [
  {
    title: "Investment Management",
    description: "Strategic property investment management and advisory services.",
    link: "/services/investor/investment-management",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    title: "Portfolio Management",
    description: "Comprehensive portfolio management and optimization strategies.",
    link: "/services/investor/portfolio-management",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  },
  {
    title: "Market Analysis",
    description: "In-depth market research and investment opportunity analysis.",
    link: "/services/investor/market-analysis",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    title: "Property Acquisition",
    description: "Expert guidance in identifying and acquiring profitable properties.",
    link: "/services/investor/property-acquisition",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    title: "Investment Strategy",
    description: "Customized investment strategies to meet your financial goals.",
    link: "/services/investor/investment-strategy",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    title: "Financial Planning",
    description: "Comprehensive financial planning and investment analysis.",
    link: "/services/investor/financial-planning",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
];

export default InvestorServices;
