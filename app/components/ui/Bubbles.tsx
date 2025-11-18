"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Bubble = {
  id: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
};

const BUBBLE_COUNT = 20;

export default function BackgroundBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // runs only on the client after hydration
    const generated: Bubble[] = Array.from(
      { length: BUBBLE_COUNT },
      (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      })
    );
    setBubbles(generated);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
          }}
          style={{
            left: b.left,
            top: b.top,
          }}
        />
      ))}
    </div>
  );
}
