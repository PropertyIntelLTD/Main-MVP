
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            status: 'new'
          }
        ]);

      if (error) throw error;

      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Get in touch with us for any inquiries about our properties or services.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg bg-white p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your message"
                required
              />
            </div>
            <Button className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-lg bg-white p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
          <div className="mt-6 space-y-4">
            <p className="text-gray-500">
              <strong>Address:</strong>
              <br />
              {CONTACT_INFO.address}
              <br />
              {CONTACT_INFO.city}, {CONTACT_INFO.zipCode}
            </p>
            <p className="text-gray-500">
              <strong>Phone:</strong>
              <br />
              {CONTACT_INFO.phone}
            </p>
            <p className="text-gray-500">
              <strong>Email:</strong>
              <br />
              {CONTACT_INFO.email}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
            <div className="mt-4 space-y-2">
              <p className="text-gray-500">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-500">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-500">Sunday: Closed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
