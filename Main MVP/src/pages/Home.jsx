
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, ShieldCheck, Star, Trophy, Users, HeartHandshake, KeyRound, TrendingUp, ArrowRight } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Building,
      title: "Landlord Services",
      description: "Comprehensive property management solutions for property owners",
      path: "/services/landlord",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Users,
      title: "Tenant Services",
      description: "Find your perfect home and enjoy hassle-free renting",
      path: "/services/tenant",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Investor Services",
      description: "Maximize your real estate investment portfolio",
      path: "/services/investor",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: KeyRound,
      title: "Custom Solutions",
      description: "Tailor-made solutions to meet your requirements",
      path: "/services/landlord",
      color: "bg-red-100 text-red-600",
    },
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "Property Investor", text: "Their professional service helped me grow my portfolio by 40% in just two years." },
    { name: "Michael Chen", role: "Homeowner", text: "The most reliable and transparent real estate service I've ever used." }
  ];

  const partners = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150"
  ];

  return (
    <div>
      {/* Hero Section with Background Video */}
      <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/videos/real-estate.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        <div className="relative text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Your Trusted Real Estate Partner
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Unlock new opportunities with our expert real estate solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-6"
          >
            <Button size="lg" variant="solid" className="bg-primary hover:bg-opacity-80">
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Core Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              Comprehensive solutions for all your real estate needs.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d" alt="About us" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">About Our Company</h2>
              <p className="text-lg text-gray-600 mb-6">With over 15 years of experience in the real estate industry, we've helped thousands of clients find their perfect properties and maximize their investments.</p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center">
                  <Trophy className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <div className="text-xl font-bold">5-Star Rated</div>
                    <div className="text-gray-600">Service Quality</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <div className="text-xl font-bold">10,000+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-16">
            <Star className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">What Our Clients Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.name} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }} 
                className="p-8 bg-gray-50 rounded-lg"
              >
                <p className="text-gray-600 mb-6">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-primary">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="py-16 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-center mb-12">
            Trusted By Industry Leaders
          </h3>
          <motion.div 
            className="flex overflow-x-auto gap-12 py-6"
            animate={{ x: [-100, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          >
            {partners.map((partner, index) => (
              <img
                key={index}
                src={partner}
                alt="Partner logo"
                className="h-20 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
            <p className="text-lg text-gray-600">
              Discover our handpicked selection of premium properties
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img 
                  className="w-full h-48 object-cover"
                  alt={`Featured property ${index + 1}`}
                 src="https://images.unsplash.com/photo-1598865049044-9a51131622d1" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Luxury Apartment {index + 1}</h3>
                  <p className="text-gray-600 mb-4">Prime location with modern amenities</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">$1,200/mo</span>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect Property?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of satisfied clients who have found their ideal properties through our platform.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/properties">
                <Button size="lg" className="px-8">
                  Browse Properties
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
