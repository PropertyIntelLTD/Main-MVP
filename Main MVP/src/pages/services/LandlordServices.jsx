import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const landlordServices = [
  {
    title: "Property Management",
    description: "Full-service property management including tenant screening, rent collection, and maintenance.",
    link: "/services/landlord/property-management",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    title: "Maintenance & Repairs",
    description: "Comprehensive maintenance services and emergency repairs for your properties.",
    link: "/services/landlord/maintenance",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  },
  {
    title: "End of Tenancy",
    description: "Professional end of tenancy services and property turnaround.",
    link: "/services/landlord/end-of-tenancy",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    title: "Tenant Sourcing",
    description: "Expert tenant screening and placement services.",
    link: "/services/landlord/tenant-sourcing",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    title: "Rent Collection",
    description: "Efficient rent collection and financial management services.",
    link: "/services/landlord/rent-collection",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    title: "Legal Compliance",
    description: "Ensuring your properties meet all legal requirements and regulations.",
    link: "/services/landlord/legal-compliance",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
];

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
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  </motion.div>
);

const LandlordServices = () => {
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
            <h1 className="text-4xl font-bold mb-6">Landlord Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive property management solutions designed specifically for property owners
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landlordServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
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

export default LandlordServices;
