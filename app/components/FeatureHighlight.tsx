"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart, X, Users, Star } from "lucide-react";

const mockDestinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "🏝️",
    price: "£1,200",
    rating: 4.8,
    description: "Beautiful sunsets and white-washed buildings",
    tags: ["Romantic", "Beach", "Luxury"]
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    image: "🗾",
    price: "£1,500",
    rating: 4.9,
    description: "Modern culture meets ancient traditions",
    tags: ["Culture", "Food", "Adventure"]
  },
  {
    id: 3,
    name: "Bali, Indonesia",
    image: "🌺",
    price: "£800",
    rating: 4.7,
    description: "Tropical paradise with spiritual vibes",
    tags: ["Beach", "Wellness", "Budget"]
  },
  {
    id: 4,
    name: "Iceland",
    image: "🏔️",
    price: "£1,100",
    rating: 4.6,
    description: "Northern lights and dramatic landscapes",
    tags: ["Nature", "Adventure", "Photography"]
  }
];

export default function FeatureHighlight() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setVotes] = useState<{[key: number]: number}>({});
  const [userVotes, setUserVotes] = useState<{[key: number]: 'like' | 'pass'}>({});

  const currentDestination = mockDestinations[currentIndex];

  const handleVote = (vote: 'like' | 'pass') => {
    setUserVotes(prev => ({...prev, [currentDestination.id]: vote}));
    setVotes(prev => ({...prev, [currentDestination.id]: (prev[currentDestination.id] || 0) + 1}));
    
    // Move to next destination
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % mockDestinations.length);
    }, 300);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Swipe Together, Travel Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our Tinder-style voting system lets everyone in your group swipe on destinations. 
            When you match, we automatically start planning your perfect trip.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] p-6 h-[600px] relative overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-6 text-xs text-gray-500">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                      <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                      <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold text-gray-900">CheekyEscapes</h3>
                    <p className="text-sm text-gray-500">Group Trip Planning</p>
                  </div>

                  {/* Card Stack */}
                  <div className="relative h-96">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentDestination.id}
                        initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                        exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-white rounded-2xl shadow-lg border overflow-hidden"
                      >
                        {/* Destination Image */}
                        <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl">
                          {currentDestination.image}
                        </div>

                        {/* Destination Info */}
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-lg text-gray-900">{currentDestination.name}</h4>
                            <div className="flex items-center gap-1 text-yellow-500">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="text-sm font-medium text-gray-700">{currentDestination.rating}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 text-sm mb-3">{currentDestination.description}</p>
                          
                          <div className="flex flex-wrap gap-1 mb-3">
                            {currentDestination.tags.map((tag) => (
                              <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-green-600">{currentDestination.price}</span>
                            <span className="text-sm text-gray-500">per person</span>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Vote indicators */}
                    {userVotes[currentDestination.id] && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`absolute inset-0 flex items-center justify-center pointer-events-none`}
                      >
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold ${
                          userVotes[currentDestination.id] === 'like' ? 'bg-green-500' : 'bg-red-500'
                        }`}>
                          {userVotes[currentDestination.id] === 'like' ? '❤️' : '✕'}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center gap-6 mt-6">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleVote('pass')}
                      className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <X className="w-6 h-6" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleVote('like')}
                      className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <Heart className="w-6 h-6" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Floating indicators */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
              >
                Try It!
              </motion.div>
            </div>
          </motion.div>

          {/* Feature Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How Group Voting Works</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Share the Link</h4>
                    <p className="text-gray-600">Send your group a link - no downloads or signups required</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Swipe Together</h4>
                    <p className="text-gray-600">Everyone votes on AI-curated destinations based on your preferences</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Instant Matches</h4>
                    <p className="text-gray-600">When everyone likes a destination, we automatically start planning</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Perfect for Groups</h4>
              </div>
              <p className="text-gray-600 mb-4">No more endless group chats trying to decide where to go. Our voting system makes group decisions fast and fair.</p>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-gray-600">Faster decisions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">9/10</div>
                  <div className="text-sm text-gray-600">Group satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">3min</div>
                  <div className="text-sm text-gray-600">Average vote time</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}