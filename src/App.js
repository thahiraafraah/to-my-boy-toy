import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function LoveLetterApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center text-center">
      {!isOpen ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <button
            className="bg-red-500 text-white px-8 py-4 rounded-2xl shadow-lg hover:bg-red-600 transition duration-300 text-xl"
            onClick={() => setIsOpen(true)}
          >
            💌 Tap to open your surprise
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-2xl shadow-xl max-w-md mx-4"
        >
          <h1 className="text-3xl font-bold text-red-500">
            Happy Birthday, My Love ❤️
          </h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            You make my world brighter every day. I’m so grateful for you and
            all the love, laughter, and happiness you bring into my life. Even
            though we’re far apart, my heart is always with you. 💕
          </p>
          <p className="mt-4 text-gray-600 italic">
            I can’t wait for the day when we can celebrate together. Until then,
            know that I’m sending you all my love across the miles. 🥰
          </p>
        </motion.div>
      )}
    </div>
  );
}
