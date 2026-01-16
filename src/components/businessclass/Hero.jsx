import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Wine,
    Wifi,
    Armchair,
    MonitorPlay,
    Briefcase,
    Star,
    ArrowRight,
    Plane
} from 'lucide-react';
// --- Assets & Data ---
const IMAGES = {
    hero: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2532&auto=format&fit=crop",
    cabin: "https://images.unsplash.com/photo-1561525946-b97c27421808?q=80&w=2574&auto=format&fit=crop",
    food: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop",
    lounge: "https://images.unsplash.com/photo-1576229986326-89d714b13867?q=80&w=2670&auto=format&fit=crop",
    champagne: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=2574&auto=format&fit=crop",
    window: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2670&auto=format&fit=crop"
};
export default function Hero() {
    return (
        <>
            <div className="relative h-screen w-full overflow-hidden">
                {/* Background Image with Parallax-like scale */}
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img src={IMAGES.hero} alt="First Class Cabin" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                </motion.div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 max-w-7xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-[#c8a27a] text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-medium"
                    >
                        Redefining Altitude
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight"
                    >
                        Beyond the <br />
                        <span className="italic font-light">Clouds.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-gray-300 max-w-lg text-lg mb-10 font-light leading-relaxed"
                    >
                        Experience the pinnacle of aviation. Where time slows down, and the journey becomes more memorable than the destination.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                        className="group flex items-center gap-4 text-white w-fit"
                    >
                        <div className="bg-[#c8a27a] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                            <Plane className="w-6 h-6 transform rotate-45" />
                        </div>
                        <span className="uppercase tracking-widest text-sm group-hover:text-[#c8a27a] transition-colors">
                            Discover Your Suite
                        </span>
                    </motion.button>
                </div>
            </div>
        </>
    )
}
