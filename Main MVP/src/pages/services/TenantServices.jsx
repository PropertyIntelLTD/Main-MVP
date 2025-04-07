
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const tenantServices = [
  {
    title: "Property Search",
    description: "Find your perfect rental property with our extensive listings.",
    link: "/services/tenant/property-search",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    title: "Maintenance Requests",
    description: "Easy maintenance request submission and tracking.",
    link: "/services/tenant/maintenance-requests",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  },
  {
    title: "End of Tenancy",
    description: "Guidance and support for end of tenancy procedures.",
    link: "/services/tenant/end-of-tenancy",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    title: "Rent Payment",
    description: "Convenient and secure rent payment options.",
    link: "/services/tenant/rent-payment",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    title: "Service Accommodation",
    description: "Short-term and serviced accommodation options.",
    link: "/services/tenant/service-accommodation",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    title: "Tenant Support",
    description: "24/7 support for all your tenancy needs.",
    link: "/services/tenant/tenant-support",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <img 
      className="w-full h-48 object-cover"
      alt={`${service.title} service`}
     src="https://images.unsplash.com/photo-1685279053124-f47a436a9c1e" />
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

const TenantServices = () => {
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
            <h1 className="text-4xl font-bold mb-6">Tenant Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Making your rental experience smooth and hassle-free
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tenantServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Looking for Your Next Home?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Browse our available properties and find your perfect match.
          </p>
          <Link to="/properties">
            <Button size="lg">View Properties</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TenantServices;
