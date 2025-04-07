
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { KeyRound, ShieldCheck, Star, Trophy, Users, Building, Hand, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Landlord Services",
    description: "Comprehensive property management solutions.",
    path: "/services/landlord",
    icon: KeyRound,
    color: "bg-blue-500 text-white",
  },
  {
    title: "Tenant Services",
    description: "Helping tenants find and maintain properties.",
    path: "/services/tenant",
    icon: Users,
    color: "bg-green-500 text-white",
  },
  {
    title: "Investor Services",
    description: "Smart investment strategies and portfolio management.",
    path: "/services/investor",
    icon: TrendingUp,
    color: "bg-yellow-500 text-white",
  },
  {
    title: "Custom Solutions",
    description: "Tailored solutions for unique real estate needs.",
    path: "/services/custom",
    icon: ShieldCheck,
    color: "bg-purple-500 text-white",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Our Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
          We offer specialized services tailored to landlords, tenants, and investors.
          Choose the category that best fits your needs.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <Link
                to={service.path}
                className="absolute inset-0 z-10"
                aria-label={`View ${service.title}`}
              />
              <div className={`mb-4 inline-block rounded-full p-3 ${service.color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-500">{service.description}</p>
              <div className="mt-4 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                Learn more →
              </div>
              <div className="absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-300 group-hover:border-primary/10 pointer-events-none"></div>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-24 bg-primary/5 rounded-lg p-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you're a landlord, tenant, or investor, we have the perfect solution for you.
          Contact us today to discuss your needs.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" variant="default">Contact Us</Button>
          </Link>
          <Link to="/properties">
            <Button size="lg" variant="outline">View Properties</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
