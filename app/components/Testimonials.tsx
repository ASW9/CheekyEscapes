"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Travel Enthusiast",
    avatar: "👩‍💼",
    rating: 5,
    content: "CheekyEscapes turned our chaotic group chat into an amazing Barcelona trip! The voting feature saved us hours of back-and-forth messages.",
    type: "consumer"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Friend Group Organizer",
    avatar: "👨‍💻",
    rating: 5,
    content: "Finally, a way to make group decisions that doesn't take forever. We went from 'where should we go?' to booked flights in just 2 days!",
    type: "consumer"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Weekend Warrior",
    avatar: "👩‍🎨",
    rating: 5,
    content: "The AI suggestions were spot-on for our group's preferences. We discovered places we never would have thought of, and everyone loved the trip!",
    type: "consumer"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Travel Agent, WanderLust Tours",
    avatar: "👨‍💼",
    rating: 5,
    content: "CheekyEscapes has transformed how we handle group bookings. The B2B integration converted 40% more leads into actual bookings in just 3 months.",
    type: "business"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Marketing Director, TravelCo",
    avatar: "👩‍💼",
    rating: 5,
    content: "The automated follow-up system is incredible. We're seeing a 65% increase in group booking conversions since partnering with CheekyEscapes.",
    type: "business"
  }
];

export default function Testimonials() {
  const consumerTestimonials = testimonials.filter(t => t.type === "consumer");
  const businessTestimonials = testimonials.filter(t => t.type === "business");

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Loved by Travelers & Travel Pros
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See what our users and travel industry partners are saying about CheekyEscapes
          </motion.p>
        </div>

        {/* Consumer Testimonials */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            What Travelers Say
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consumerTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-3 left-6">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Quote className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4 pt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Business Testimonials */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            What Industry Partners Say
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {businessTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-orange-50 to-pink-50 border border-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-3 left-8">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Quote className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Business Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  B2B Partner
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-blue-600 mb-2"
              >
                10k+
              </motion.div>
              <div className="text-gray-600 text-sm">Happy Travelers</div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-purple-600 mb-2"
              >
                500+
              </motion.div>
              <div className="text-gray-600 text-sm">Travel Partners</div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-3xl md:text-4xl font-bold text-green-600 mb-2"
              >
                4.9/5
              </motion.div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-3xl md:text-4xl font-bold text-orange-600 mb-2"
              >
                85%
              </motion.div>
              <div className="text-gray-600 text-sm">Faster Planning</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}