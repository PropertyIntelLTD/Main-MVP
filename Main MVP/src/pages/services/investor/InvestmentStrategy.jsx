
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Target, BarChart2, TrendingUp } from "lucide-react";

const InvestmentStrategy = () => {
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
            <h1 className="text-4xl font-bold mb-6">Investment Strategy</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Customized investment strategies to help you achieve your financial goals
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
                alt="Investment Strategy Planning" 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Strategic Investment Planning</h2>
              <p className="text-gray-600 mb-6">
                Our investment strategy service provides you with a comprehensive roadmap
                for achieving your property investment goals. We combine market analysis,
                risk assessment, and performance optimization to create strategies that work.
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
                Develop Your Strategy <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Strategic Services
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

      {/* Strategy Development Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Strategy Development Process
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
          <h2 className="text-3xl font-bold mb-6">Ready to Develop Your Investment Strategy?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let our experts help you create a customized investment strategy that meets your goals.
          </p>
          <Button size="lg" variant="secondary">
            Schedule a Strategy Session
          </Button>
        </div>
      </section>
    </div>
  );
};

const features = [
  "Customized investment planning",
  "Risk assessment and management",
  "Performance optimization",
  "Market opportunity analysis",
  "Portfolio diversification strategies",
  "Regular strategy reviews and updates",
];

const services = [
  {
    title: "Goal Setting",
    description: "Define clear, achievable investment objectives aligned with your vision.",
    icon: <Target className="w-6 h-6 text-primary" />,
  },
  {
    title: "Performance Analysis",
    description: "Comprehensive analysis of investment performance and potential.",
    icon: <BarChart2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Growth Planning",
    description: "Strategic planning for sustainable portfolio growth and expansion.",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
  },
];

const process = [
  {
    title: "Assessment",
    description: "Evaluate current position and goals",
  },
  {
    title: "Strategy Development",
    description: "Create customized investment plans",
  },
  {
    title: "Implementation",
    description: "Execute strategic initiatives",
  },
  {
    title: "Monitoring",
    description: "Track and adjust performance",
  },
];

export default InvestmentStrategy;
