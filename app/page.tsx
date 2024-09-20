"use client";

import { motion } from "framer-motion";
import { Avatar } from "@nextui-org/avatar";

import { MessageSlider } from "@/components/message-slider";
import { ThemeSwitcher } from "@/components/theme-switcher";

const Home = () => {
  return (
    <section className="flex flex-1 flex-col items-center justify-center">
      <div className="w-full space-y-6 p-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Avatar
            isBordered
            alt="@oraphadev"
            className="mx-auto"
            size="lg"
            src="/images/profile.jpg"
          />
        </motion.div>
        <motion.h1
          className="text-xl font-semibold"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          @oraphadev
        </motion.h1>
        <motion.div
          className="text-default-500"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.75, delay: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <MessageSlider
            messages={[
              "Software Engineer 🧑‍💻",
              "Full Stack Developer 🛠️",
              "ReactJS 💘",
              "NodeJS 🚀",
              "VueJS 🎉",
              "TypeScript 🦄",
            ]}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.75, delay: 0.75 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <ThemeSwitcher />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
