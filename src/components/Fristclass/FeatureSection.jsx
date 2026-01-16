import React from 'react';
import { motion } from 'framer-motion';
import {
    Armchair,
    Utensils,
    Monitor,
    Sparkles,
    Crown,
    Clock,
    
} from 'lucide-react';
export default function FeatureSection() {

    // Feature Data based on your content
    const features = [
        {
            id: 1,
            icon: <Armchair className="w-6 h-6" />,
            title: "Private Sanctuary",
            description: "Extremely spacious and private seating designed for total relaxation."
        },
        {
            id: 2,
            icon: <Sparkles className="w-6 h-6" />,
            title: "Curated Amenities",
            description: "High-end amenities including designer pajamas, slippers, and luxury toiletries."
        },
        {
            id: 3,
            icon: <Monitor className="w-6 h-6" />,
            title: "Immersive Cinema",
            description: "Advanced entertainment with large personal 4K screens and noise-canceling audio."
        },
        {
            id: 4,
            icon: <Utensils className="w-6 h-6" />,
            title: "Gourmet Dining",
            description: "Chef-curated menus paired with vintage wines and premium spirits."
        },
        {
            id: 5,
            icon: <Crown className="w-6 h-6" />,
            title: "Exclusive Lounges",
            description: "Access to the airline's most exclusive airport lounges with spa services."
        },
        {
            id: 6,
            icon: <Clock className="w-6 h-6" />,
            title: "Seamless Journey",
            description: "Priority check-in, fast-track security, priority boarding, and baggage handling."
        }
    ];
    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };
    return (
        <>
            <div className="py-24 bg-white relative z-10">
                <div className="container mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Uncompromising Luxury</h2>
                        <div className="w-16 h-0.5 bg-amber-600 mx-auto"></div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
                    >
                        {features.map((feature) => (
                            <motion.div
                                key={feature.id}
                                variants={fadeInUp}
                                className="group p-8 border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 rounded-xl"
                            >
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-600 shadow-sm mb-6 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 font-light leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    )
}
