import React from 'react';
import { motion } from 'framer-motion';
import {
    Armchair,
    Utensils,
    Monitor,
    Sparkles,
    Crown,
    Clock,
    ArrowRight
} from 'lucide-react';

const FirstClassPage = () => {

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

    // Gallery Images (Placeholders used)
    const galleryImages = [
        { src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1000&auto=format&fit=crop", title: "The Suite" },
        { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop", title: "Signature Dining" },
        { src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop", title: "Sky Lounge" },
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
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-200 selection:text-amber-900 overflow-x-hidden">

            {/* --- HERO SECTION --- */}
            <div className="relative h-[85vh] w-full overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1561131668-f635d4bef104?q=80&w=2000&auto=format&fit=crop"
                        alt="First Class Cabin"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-3xl"
                    >
                        <motion.p variants={fadeInUp} className="text-amber-400 font-bold tracking-[0.2em] uppercase text-sm mb-4">
                            Redefining Altitude
                        </motion.p>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            The Art of <br />
                            <span className="text-amber-400 italic">Arrival.</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-slate-200 text-lg md:text-xl font-light mb-10 max-w-xl leading-relaxed">
                            Experience the pinnacle of aviation luxury. Where the journey becomes more memorable than the destination.
                        </motion.p>
                        <motion.button
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-amber-600 text-white px-8 py-4 rounded-sm uppercase tracking-widest text-xs font-bold hover:bg-amber-700 transition-colors flex items-center gap-3"
                        >
                            Book Your Suite <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* --- FEATURES SECTION --- */}
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

            {/* --- GALLERY SECTION --- */}
            <div className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-2">The Visual Journey</h2>
                            <p className="text-slate-500 font-light">A glimpse into your private sanctuary.</p>
                        </div>
                        <button className="hidden md:block text-amber-700 border-b border-amber-700 pb-1 text-sm uppercase tracking-widest hover:text-amber-900 hover:border-amber-900 transition-colors">
                            View Full Gallery
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">

                        {/* Main Large Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="md:col-span-8 relative group overflow-hidden rounded-2xl cursor-pointer h-[400px] md:h-full"
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                            <img
                                src={galleryImages[0].src}
                                alt={galleryImages[0].title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute bottom-8 left-8 z-20">
                                <p className="text-white/80 text-sm uppercase tracking-widest mb-1">01</p>
                                <h3 className="text-white text-3xl font-serif">{galleryImages[0].title}</h3>
                            </div>
                        </motion.div>

                        {/* Side Column Images */}
                        <div className="md:col-span-4 flex flex-col gap-6 h-full">
                            {galleryImages.slice(1).map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 * index }}
                                    viewport={{ once: true }}
                                    className="relative group overflow-hidden rounded-2xl flex-1 cursor-pointer h-[300px] md:h-auto"
                                >
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-6 left-6 z-20">
                                        <p className="text-white/80 text-sm uppercase tracking-widest mb-1">0{index + 2}</p>
                                        <h3 className="text-white text-xl font-serif">{img.title}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div> 
            </div>

        </div>
    );
};

export default FirstClassPage;