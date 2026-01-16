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

const FEATURES = [
    {
        title: "The Private Sanctuary",
        description: "Retreat into your fully enclosed suite. With sliding doors and noise cancellation, your privacy is absolute.",
        icon: <Armchair className="w-6 h-6" />
    },
    {
        title: "Michelin-Star Dining",
        description: "Savor gourmet cuisine curated by world-renowned chefs, paired with our exclusive cellar of vintage wines.",
        icon: <Wine className="w-6 h-6" />
    },
    {
        title: "Immersive Entertainment",
        description: "24-inch 4K personal screens, Bowers & Wilkins noise-canceling headphones, and live onboard Wi-Fi.",
        icon: <MonitorPlay className="w-6 h-6" />
    },
    {
        title: "Seamless Transit",
        description: "From luxury chauffeur service to exclusive lounge access, your journey is effortless before you even take off.",
        icon: <Briefcase className="w-6 h-6" />
    }
];

const GALLERY_ITEMS = [
    { id: 1, src: IMAGES.cabin, category: "Cabin", title: "Lie-Flat Comfort" },
    { id: 2, src: IMAGES.food, category: "Dining", title: "Culinary Arts" },
    { id: 3, src: IMAGES.lounge, category: "Lounge", title: "Pre-flight Relax" },
    { id: 4, src: IMAGES.champagne, category: "Service", title: "Premium Pour" },
];

// --- Components ---

const Hero = () => {
    return (
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
    );
};

const FeatureSection = () => {
    return (
        <div className="bg-white py-24 px-8 md:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-100 pb-10">
                    <div>
                        <span className="text-[#c8a27a] uppercase tracking-widest text-xs font-bold">Unparalleled Luxury</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mt-4">
                            Curated for the <br /> Discerning Traveler
                        </h2>
                    </div>
                    <p className="md:max-w-md text-gray-500 mt-6 md:mt-0 leading-relaxed">
                        Every detail of the cabin has been ergonomically designed to intuitively anticipate your needs, ensuring a seamless transition from ground to sky.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group p-8 border border-gray-100 hover:border-[#c8a27a]/30 hover:shadow-2xl hover:shadow-[#c8a27a]/5 transition-all duration-500 bg-slate-50 hover:bg-white"
                        >
                            <div className="text-[#c8a27a] mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-serif text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const GallerySection = () => {
    return (
        <div className="bg-[#0b0f19] py-24 overflow-hidden text-white">
            <div className="px-8 md:px-20 max-w-7xl mx-auto mb-16 flex justify-between items-center">
                <h2 className="text-4xl font-serif">
                    Visual <span className="text-[#c8a27a] italic">Symphony</span>
                </h2>
                <div className="hidden md:flex gap-2">
                    <button className="p-3 border border-white/20 rounded-full hover:bg-[#c8a27a] hover:border-[#c8a27a] transition-all">
                        <ArrowRight className="w-5 h-5 rotate-180" />
                    </button>
                    <button className="p-3 border border-white/20 rounded-full hover:bg-[#c8a27a] hover:border-[#c8a27a] transition-all">
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Horizontal Scroll Gallery */}
            <div className="flex gap-8 overflow-x-auto pb-12 px-8 md:px-20 scrollbar-hide snap-x">
                {GALLERY_ITEMS.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="relative min-w-[85vw] md:min-w-[400px] h-[500px] snap-center group cursor-pointer overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500 z-10" />
                        <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/90 to-transparent">
                            <span className="text-[#c8a27a] text-xs uppercase tracking-widest block mb-2">{item.category}</span>
                            <h3 className="text-2xl font-serif text-white">{item.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const DetailedAmenities = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto min-h-screen">
            <div className="relative h-[50vh] md:h-auto">
                <img src={IMAGES.window} alt="Window View" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#c8a27a]/10 mix-blend-multiply" />
            </div>
            <div className="bg-white p-12 md:p-24 flex flex-col justify-center">
                <span className="text-[#c8a27a] tracking-[0.2em] uppercase text-xs font-bold mb-6">Details Matter</span>
                <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">Service, Perfected.</h2>

                <ul className="space-y-8">
                    {[
                        "Chauffeur-drive service to and from the airport.",
                        "Dedicated First Class check-in counters.",
                        "Exclusive access to the Private Lounge & Spa.",
                        "Bulgari amenity kits & loungewear by White Company.",
                        "Unlimited caviar service and Dom Pérignon."
                    ].map((item, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-4 text-gray-600 font-light"
                        >
                            <Star className="w-5 h-5 text-[#c8a27a] shrink-0 mt-1 fill-[#c8a27a]" />
                            <span className="text-lg">{item}</span>
                        </motion.li>
                    ))}
                </ul>

                <button className="mt-12 px-8 py-4 bg-slate-900 text-white uppercase tracking-widest text-xs hover:bg-[#c8a27a] transition-colors duration-300 w-max">
                    View Full Menu
                </button>
            </div>
        </div>
    );
};


export default function FirstClassLanding() {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-[#c8a27a] selection:text-white">
       
            <Hero />
            <FeatureSection />
            <GallerySection />
            <DetailedAmenities />
      
        </div>
    );
}