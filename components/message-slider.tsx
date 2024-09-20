"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MessageSlider = ({ messages }: { messages: string[] }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="relative flex h-6 w-full items-center justify-center overflow-hidden">
      <AnimatePresence>
        {messages.map((message, index) =>
          index === currentMessageIndex ? (
            <motion.div
              key={index}
              animate={{ y: 0, opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
              exit={{ y: "-100%", opacity: 0 }}
              initial={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {message}
            </motion.div>
          ) : null,
        )}
      </AnimatePresence>
    </div>
  );
};
