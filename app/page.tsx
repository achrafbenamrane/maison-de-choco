"use client";

import Link from "next/link";
import { Instagram, Facebook, Phone, Cake } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-pink-200 to-rose-300 relative overflow-hidden">
      {/* Decorative cake elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Cake className="w-32 h-32 text-pink-400" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Cake className="w-40 h-40 text-rose-400" />
      </div>
      <div className="absolute top-1/2 left-5 opacity-10">
        <Cake className="w-24 h-24 text-pink-500" />
      </div>

      {/* Top Bar */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white py-8 shadow-2xl relative"
      >
        <motion.div 
          className="text-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <Cake className="w-10 h-10" />
            <h1 className="text-4xl font-bold tracking-wide">
              maison du choco🍫
            </h1>
            <Cake className="w-10 h-10" />
          </div>
          <p className="text-pink-100 text-sm font-light">Chocolat prestige • Gâteau prestige • Dattes fourrées</p>
        </motion.div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full max-w-md space-y-5"
        >
          
          {/* Instagram Button */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://www.instagram.com/bissouprestige23?igsh=aWZtNTZiYXppaG4x"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 hover:from-pink-500 hover:via-rose-500 hover:to-pink-600 text-white font-bold py-5 px-6 rounded-full shadow-xl transition-all duration-300 border-4 border-white/30"
            >
              <Instagram size={28} />
              <span className="text-lg">Instagram</span>
            </Link>
          </motion.div>

          {/* Facebook Button */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://www.facebook.com/share/1FCXnijnQf/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-pink-300 via-rose-300 to-pink-400 hover:from-pink-400 hover:via-rose-400 hover:to-pink-500 text-white font-bold py-5 px-6 rounded-full shadow-xl transition-all duration-300 border-4 border-white/30"
            >
              <Facebook size={28} />
              <span className="text-lg">Facebook</span>
            </Link>
          </motion.div>

          {/* TikTok Button */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://www.tiktok.com/@bissouprestige23?_r=1&_t=ZS-91LO8SOXvk7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-pink-500 via-rose-600 to-pink-600 hover:from-pink-600 hover:via-rose-700 hover:to-pink-700 text-white font-bold py-5 px-6 rounded-full shadow-xl transition-all duration-300 border-4 border-white/30"
            >
              <svg 
                className="w-7 h-7" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="text-lg">TikTok</span>
            </Link>
          </motion.div>

          {/* Phone Button */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="tel:+213674269665"
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 hover:from-rose-500 hover:via-pink-500 hover:to-rose-600 text-white font-bold py-5 px-6 rounded-full shadow-xl transition-all duration-300 border-4 border-white/30"
            >
              <Phone size={28} />
              <span className="text-lg">Call Us</span>
            </Link>
          </motion.div>

        </motion.div>

        {/* Floating cake animation */}
        <motion.div
          className="mt-12"
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Cake className="w-16 h-16 text-pink-500/40" />
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="w-full py-6 text-center text-sm text-rose-600 bg-pink-50/50 backdrop-blur-sm relative z-10"
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🍰 &copy; {new Date().getFullYear()} Maison de Choco. All rights reserved. 🍰
        </motion.p>
      </motion.footer>
    </div>
  );
}
