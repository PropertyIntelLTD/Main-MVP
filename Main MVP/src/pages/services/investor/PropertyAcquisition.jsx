
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Search, Building2, Target } from "lucide-react";

const PropertyAcquisition = () => {
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
            <h1 className="text-4xl font-bold mb-6">Property Acquisition</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert guidance in identifying and acquiring profitable investment properties
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  className="rounded-lg w-full h-[400px] object-cover" alt="Property Acquisition" src="https://images.unsplash.com/photo-1685279053124-f47a436a9c1e" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Strategic Property Acquisition</h2>
              <p className="text-gray-600 mb-6">
                Our property acquisition service helps you identify, evaluate, and secure
                high-potential investment properties. We combine market expertise with
                thorough due diligence to ensure optimal investment decisions.
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
                Start Your Search <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Acquisition Services
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

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Acquisition Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  {index + 1}
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
          <h2 className="text-3xl font-bold mb-6">Ready to Expand Your Portfolio?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let our experts help you find and acquire your next investment property.
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
  "Property opportunity identification",
  "Comprehensive due diligence",
  "Market value assessment",
  "Investment potential analysis",
  "Negotiation support",
  "Transaction management",
];

const services = [
  {
    title: "Property Search",
    description: "Targeted property search based on your investment criteria and goals.",
    icon: <Search className="w-6 h-6 text-primary" />,
  },
  {
    title: "Due Diligence",
    description: "Thorough property and market analysis to ensure sound investments.",
    icon: <Building2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Strategic Planning",
    description: "Development of acquisition strategies aligned with your objectives.",
    icon: <Target className="w-6 h-6 text-primary" />,
  },
];

const process = [
  {
    title: "Requirements Analysis",
    description: "Define investment criteria and objectives",
  },
  {
    title: "Property Search",
    description: "Identify potential properties matching criteria",
  },
  {
    title: "Due Diligence",
    description: "Thorough analysis and evaluation",
  },
  {
    title: "Acquisition",
    description: "Negotiation and transaction completion",
  },
];

export default PropertyAcquisition;
