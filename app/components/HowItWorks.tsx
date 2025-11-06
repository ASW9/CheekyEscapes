"use client";

import { motion } from "framer-motion";
import { Share2, Vote, Users, Plane, ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Share Link with Group",
    description: "Send a simple link to your friends - no apps to download or accounts to create",
    icon: Share2,
    color: "from-blue-500 to-cyan-500",
    delay: 0.1
  },
  {
    id: 2,
    title: "Vote on Destinations",
    description: "Everyone swipes through AI-curated trip options based on your preferences and budget",
    icon: Vote,
    color: "from-purple-500 to-pink-500",
    delay: 0.2
  },
  {
    id: 3,
    title: "Finalize Together",
    description: "When you match on a destination, we create a detailed itinerary for group approval",
    icon: Users,
    color: "from-green-500 to-emerald-500",
    delay: 0.3
  },
  {
    id: 4,
    title: "Book Instantly",
    description: "One-click booking through our travel partners with automatic payment splitting",
    icon: Plane,
    color: "from-orange-500 to-red-500",
    delay: 0.4
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From group chat chaos to booked holiday in 4 simple steps
          </motion.p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 to-orange-200 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: step.delay }}
                  className="relative"
                >
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mx-auto relative z-10`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-sm">
                      {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: step.delay + 0.3 }}
                      className="absolute top-10 -right-4 text-gray-300"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: step.delay }}
              className="flex items-start gap-6"
            >
              {/* Icon and Line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg relative`}
                >
                  <step.icon className="w-6 h-6 text-white" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-700">
                    {step.id}
                  </div>
                </motion.div>
                
                {/* Connecting line (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent mt-4" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to plan your next group trip?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of groups who have already discovered the easiest way to plan and book travel together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
            >
              Start Planning Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}