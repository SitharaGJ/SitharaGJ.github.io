import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "UI/UX Portfolio",
    icon: "🎨",
    description: "See my design projects & case studies",
    link: "#uiux"
  },
  {
    title: "AI Videos",
    icon: "🎥",
    description: "Generated cinematic content with Sora, Veo & Runway",
    link: "#videos"
  },
  {
    title: "AI Images",
    icon: "🌞",
    description: "Explore AI-generated artwork using Midjourney & DALL·E",
    link: "#images"
  },
  {
    title: "Illustrations",
    icon: "✏️",
    description: "Creative pencil-style and vector-based digital drawings",
    link: "#illustrations"
  }
];

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243e] text-white font-nunito flex flex-col items-center justify-center p-6">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="w-[100vw] h-[100vh] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)] animate-pulse-slow"></div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl sm:text-4xl font-light mb-2 z-10"
      >
        Hello
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-3xl sm:text-5xl font-semibold mb-12 z-10"
      >
        I’m Sithara Geethal <span className="ml-2">👨‍💻</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl z-10">
        {cards.map((card, index) => (
          <motion.a
            key={card.title}
            href={card.link}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 flex items-center space-x-4 hover:shadow-xl transition-transform duration-300 shadow-md hover:shadow-purple-500/30"
          >
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: index * 0.2 }}
              className="text-3xl"
            >
              {card.icon}
            </motion.span>
            <div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-white/70">{card.description}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <footer className="mt-16 text-sm text-white/50 z-10">
        © 2025 Sithara Geethal | Built with ❤️
      </footer>
    </div>
  );
}
