
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, TrendingUp, Search, Map } from "lucide-react";

const MarketAnalysis = () => {
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
            <h1 className="text-4xl font-bold mb-6">Market Analysis</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              In-depth market research and analysis to identify the best investment opportunities
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
                alt="Market Analysis"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Data-Driven Market Insights</h2>
              <p className="text-gray-600 mb-6">
                Our comprehensive market analysis service provides you with actionable insights
                based on real-time data and expert analysis. Make informed investment decisions
                with our detailed market reports and trend analysis.
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
                Get Market Insights <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Market Analysis Services
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
          <h2 className="text-3xl font-bold mb-6">Ready to Make Data-Driven Decisions?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get access to our comprehensive market analysis reports and expert insights.
          </p>
          <Button size="lg" variant="secondary">
            Request Market Report
          </Button>
        </div>
      </section>
    </div>
  );
};

const features = [
  "Real-time market data analysis",
  "Property value trends and forecasts",
  "Demographic and economic insights",
  "Competition analysis",
  "Investment opportunity identification",
  "Risk assessment reports",
];

const services = [
  {
    title: "Market Trends",
    description: "Comprehensive analysis of current market trends and future projections.",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
  },
  {
    title: "Location Analysis",
    description: "Detailed analysis of location-specific market conditions and opportunities.",
    icon: <Map className="w-6 h-6 text-primary" />,
  },
  {
    title: "Investment Research",
    description: "In-depth research to identify the most promising investment opportunities.",
    icon: <Search className="w-6 h-6 text-primary" />,
  },
];

export default MarketAnalysis;
