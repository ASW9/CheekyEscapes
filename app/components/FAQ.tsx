"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How does the group voting system work?",
    answer: "Simply share a link with your group, and everyone can swipe through AI-curated destination options. When enough people like the same destination, it becomes a match and we start planning your trip automatically. No apps to download, no accounts needed."
  },
  {
    id: 2,
    question: "Is my personal and payment information secure?",
    answer: "Absolutely. We use bank-level encryption for all data and are fully GDPR compliant. Your payment information is processed through secure, PCI-compliant payment processors. We never store your full payment details on our servers."
  },
  {
    id: 3,
    question: "How does the AI trip planning work?",
    answer: "Our AI analyzes your group's preferences, budget, travel dates, and voting patterns to suggest personalized destinations and create detailed itineraries. It learns from millions of successful trips and continuously improves its recommendations based on user feedback."
  },
  {
    id: 4,
    question: "Can travel agents and tour operators use CheekyEscapes?",
    answer: "Yes! Our B2B platform offers API integration, automated lead follow-up, and white-label options. Travel professionals can use our tools to convert more group bookings and streamline their planning process. Contact our sales team for custom pricing and onboarding."
  },
  {
    id: 5,
    question: "What if we can't agree on a destination?",
    answer: "Our algorithm finds compromise destinations that match multiple preferences from your group. If there's still no clear winner, we'll suggest alternative voting rounds or help break down the trip into smaller decisions (like activities or accommodation style) to find common ground."
  },
  {
    id: 6,
    question: "How does vendor onboarding work for travel businesses?",
    answer: "Travel vendors can integrate with our platform through our partner API to access group booking leads. We provide automated lead qualification, conversion tracking, and seamless handoff to your booking system. Our team handles the technical integration and provides ongoing support."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need to know about CheekyEscapes and group travel planning
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                whileHover={{ backgroundColor: "#f9fafb" }}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100"
                >
                  {openItems.includes(faq.id) ? (
                    <Minus className="w-4 h-4 text-gray-600" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-600" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openItems.includes(faq.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="text-gray-600 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of CheekyEscapes. 
              Reach out anytime for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-300"
              >
                Schedule a Demo
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Knowledge Base Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <a 
            href="#" 
            className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-4"
          >
            Visit our comprehensive help center →
          </a>
        </motion.div>
      </div>
    </section>
  );
}