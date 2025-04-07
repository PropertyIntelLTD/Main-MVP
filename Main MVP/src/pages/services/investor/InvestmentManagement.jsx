
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, TrendingUp, PieChart, Target } from "lucide-react";

const InvestmentManagement = () => {
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
            <h1 className="text-4xl font-bold mb-6">Investment Management</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic investment management solutions to maximize your property portfolio returns
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
                alt="Investment Management"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Expert Investment Solutions</h2>
              <p className="text-gray-600 mb-6">
                Our comprehensive investment management service helps you make informed
                decisions and optimize your property portfolio performance. We combine
                market expertise with data-driven insights to deliver superior returns.
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
                Start Investing <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Investment Services
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
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Investments?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let our expert team help you achieve your investment goals with our proven strategies.
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
  "Personalized investment strategies",
  "Regular portfolio performance reviews",
  "Market trend analysis and insights",
  "Risk assessment and management",
  "Investment opportunity identification",
  "ROI optimization strategies",
];

const services = [
  {
    title: "Performance Analysis",
    description: "Detailed analysis of your portfolio's performance with actionable insights.",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
  },
  {
    title: "Portfolio Optimization",
    description: "Strategic optimization to maximize returns and minimize risks.",
    icon: <PieChart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Investment Strategy",
    description: "Customized investment strategies aligned with your goals.",
    icon: <Target className="w-6 h-6 text-primary" />,
  },
];

export default InvestmentManagement;
