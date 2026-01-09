import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Plane } from 'lucide-react';

const ContactPage = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        bookingRef: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formState);
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, duration: 0.8 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        // Changed bg to slate-50 and text to slate-800
        <div className="min-h-screen bg-slate-50 text-slate-800 relative overflow-hidden font-sans selection:bg-amber-200 selection:text-amber-900">
            {/* Hero */}
            <section className="relative py-28 px-6 text-center  bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight"
                >
                    Contact  <span className="text-[#c8a27a]">US</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                >
                    Luxurious Flights for Less — Expertly curated Business & First Class
                    travel experiences across the globe.
                </motion.p>
            </section>
            {/* Background Elements - Lighter and softer */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-amber-200/40 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 py-20 relative z-10">

             
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-4">
                     
                    </div>
                  
                    <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4 tracking-wide">
                        Concierge <span className="text-amber-600 italic">Support</span>
                    </h1>
                 
                    <p className="text-slate-600 max-w-2xl mx-auto font-light tracking-wide text-sm md:text-base">
                        Experience our world-class service before you even step on board. <br />
                        Our dedicated first-class team is available 24/7 to assist with your itinerary.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 max-w-6xl mx-auto">

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-5 flex flex-col justify-center space-y-10"
                    >
                        <div>
                            <motion.h3 variants={itemVariants} className="text-2xl font-serif text-slate-900 mb-6">Direct Lines</motion.h3>
                            <div className="space-y-8">

                                {/* Contact Item 1 */}
                                <motion.div variants={itemVariants} className="flex items-start space-x-4 group cursor-pointer">
                                    {/* Icon Container: White bg, light border, shadow */}
                                    <div className="p-3 rounded-full bg-white border border-slate-200 shadow-sm group-hover:border-amber-500/50 group-hover:shadow-md transition-all duration-300">
                                        <Phone className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-amber-600 uppercase tracking-widest mb-1">VIP Reservations</p>
                                        <p className="text-lg text-slate-700 font-light group-hover:text-slate-900 transition-colors">+1 (800) 555-0199</p>
                                    </div>
                                </motion.div>

                                {/* Contact Item 2 */}
                                <motion.div variants={itemVariants} className="flex items-start space-x-4 group cursor-pointer">
                                    <div className="p-3 rounded-full bg-white border border-slate-200 shadow-sm group-hover:border-amber-500/50 group-hover:shadow-md transition-all duration-300">
                                        <Mail className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-amber-600 uppercase tracking-widest mb-1">Private Desk</p>
                                        <p className="text-lg text-slate-700 font-light group-hover:text-slate-900 transition-colors">concierge@firstclass.aero</p>
                                    </div>
                                </motion.div>

                                {/* Contact Item 3 */}
                                <motion.div variants={itemVariants} className="flex items-start space-x-4 group cursor-pointer">
                                    <div className="p-3 rounded-full bg-white border border-slate-200 shadow-sm group-hover:border-amber-500/50 group-hover:shadow-md transition-all duration-300">
                                        <MapPin className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-amber-600 uppercase tracking-widest mb-1">Global HQ</p>
                                        <p className="text-lg text-slate-700 font-light group-hover:text-slate-900 transition-colors">
                                            100 Aviation Blvd, Suite 1A<br />Zurich, Switzerland
                                        </p>
                                    </div>
                                </motion.div>

                            </div>
                        </div>

                        {/* Decorative Quote - Slate-400 for subtle look */}
                        <motion.div variants={itemVariants} className="pt-8 border-t border-slate-200">
                            <blockquote className="font-serif italic text-slate-500 text-lg">
                                "Luxury must be comfortable, otherwise it is not luxury."
                            </blockquote>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        {/* Card: White bg, stronger shadow, light border */}
                        <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-8 md:p-12 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] relative">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-100/50 to-transparent rounded-tr-2xl"></div>

                            <h3 className="text-2xl font-serif text-slate-900 mb-8">Send a Request</h3>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            // Input: Dark text, light border, amber focus
                                            className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-amber-600 transition-colors placeholder-transparent"
                                            placeholder="Full Name"
                                        />
                                        <label className="absolute left-0 top-3 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-amber-600 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-slate-400">
                                            Full Name
                                        </label>
                                    </div>

                                    <div className="relative group">
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-amber-600 transition-colors placeholder-transparent"
                                            placeholder="Email Address"
                                        />
                                        <label className="absolute left-0 top-3 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-amber-600 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-slate-400">
                                            Email Address
                                        </label>
                                    </div>
                                </div>

                                <div className="relative group">
                                    <input
                                        type="text"
                                        name="bookingRef"
                                        value={formState.bookingRef}
                                        onChange={handleChange}
                                        className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-amber-600 transition-colors placeholder-transparent"
                                        placeholder="Booking Reference (Optional)"
                                    />
                                    <label className="absolute left-0 top-3 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-amber-600 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-slate-400">
                                        Booking Reference (Optional)
                                    </label>
                                </div>

                                <div className="relative group">
                                    <textarea
                                        name="message"
                                        rows="4"
                                        required
                                        value={formState.message}
                                        onChange={handleChange}
                                        className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-amber-600 transition-colors placeholder-transparent resize-none"
                                        placeholder="How can we assist you?"
                                    ></textarea>
                                    <label className="absolute left-0 top-3 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-amber-600 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-slate-400">
                                        How can we assist you?
                                    </label>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(217, 119, 6, 0.1)" }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    // Button: Amber text and border, darkens on hover
                                    className="w-full md:w-auto px-8 py-4 bg-transparent border border-amber-600 text-amber-700 hover:text-white hover:bg-amber-600 transition-all duration-300 rounded-sm uppercase tracking-widest text-xs font-bold flex items-center justify-center space-x-2"
                                >
                                    <span>Send Request</span>
                                    <Send className="w-4 h-4" />
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;