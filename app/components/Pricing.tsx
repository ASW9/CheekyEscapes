"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Users, Building, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  
  // Editable price - you can change this value
  const monthlyPrice = 15;
  const annualDiscount = 20; // percentage
  const annualPrice = Math.round(monthlyPrice * 12 * (1 - annualDiscount / 100));

  const plans = [
    {
      name: "Free Trial",
      description: "Perfect for trying out group travel planning",
      price: 0,
      period: "14 days",
      features: [
        "Up to 5 group members",
        "3 destination votes per trip",
        "Basic AI suggestions",
        "Email support",
        "1 active trip"
      ],
      buttonText: "Start Free Trial",
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Group Planner",
      description: "Everything you need for seamless group trips",
      price: isAnnual ? Math.round(annualPrice / 12) : monthlyPrice,
      period: isAnnual ? "month (billed annually)" : "month",
      originalPrice: isAnnual ? monthlyPrice : null,
      features: [
        "Unlimited group members",
        "Unlimited destination voting",
        "Advanced AI trip planning",
        "Priority support",
        "Unlimited active trips",
        "Payment splitting",
        "Custom trip preferences",
        "Real-time notifications"
      ],
      buttonText: "Start Planning",
      popular: true,
      color: "from-orange-500 to-pink-500"
    },
    {
      name: "Travel Business",
      description: "For travel agents and tour operators",
      price: "Custom",
      period: "contact us",
      features: [
        "Everything in Group Planner",
        "B2B integration API",
        "Lead conversion tools",
        "Automated follow-up",
        "White-label options",
        "Analytics dashboard",
        "Dedicated account manager",
        "Custom pricing tiers"
      ],
      buttonText: "Contact Sales",
      popular: false,
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ x: isAnnual ? 24 : 4 }}
                transition={{ duration: 0.2 }}
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
              />
            </motion.button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full"
              >
                Save {annualDiscount}%
              </motion.div>
            )}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative bg-white rounded-2xl border-2 p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-orange-200 ring-4 ring-orange-50' : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Icon */}
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                  {index === 0 && <Users className="w-6 h-6 text-white" />}
                  {index === 1 && <Sparkles className="w-6 h-6 text-white" />}
                  {index === 2 && <Building className="w-6 h-6 text-white" />}
                </div>
              </div>

              {/* Plan Details */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  {typeof plan.price === 'number' ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-900">
                        £{plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">
                          £{plan.originalPrice}
                        </span>
                      )}
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">pricing</span>
                    </div>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              💰 30-Day Money-Back Guarantee
            </h3>
            <p className="text-gray-600">
              Not satisfied? Get a full refund within 30 days, no questions asked. 
              We&apos;re confident you&apos;ll love planning trips with CheekyEscapes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}