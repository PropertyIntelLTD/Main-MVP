
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Wrench as Tool, Clock, MessageSquare } from 'lucide-react';

const MaintenanceRequests = () => {
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
            <h1 className="text-4xl font-bold mb-6">Maintenance Request System</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick and efficient maintenance request submission and tracking
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
                alt="Maintenance service" src="https://images.unsplash.com/photo-1612618736568-d0d3888817c0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Easy Maintenance Requests</h2>
              <p className="text-gray-600 mb-6">
                Our streamlined maintenance request system ensures your maintenance
                issues are addressed quickly and efficiently. Submit and track your
                requests with ease.
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
                Submit Request <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
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
          <h2 className="text-3xl font-bold mb-6">Need Maintenance Support?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Submit your maintenance request now and we'll take care of it promptly.
          </p>
          <Button size="lg" variant="secondary">
            Submit Request
          </Button>
        </div>
      </section>
    </div>
  );
};

const features = [
  "24/7 emergency maintenance",
  "Online request submission",
  "Real-time status updates",
  "Photo attachment capability",
  "Priority level selection",
  "Communication tracking",
];

const process = [
  {
    title: "Submit Request",
    description: "Easily submit your maintenance request through our online portal.",
    icon: <Tool className="w-6 h-6 text-primary" />,
  },
  {
    title: "Quick Response",
    description: "Receive prompt confirmation and estimated response time.",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
  {
    title: "Track Progress",
    description: "Monitor the status of your request and communicate with maintenance staff.",
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
  },
];

export default MaintenanceRequests;
