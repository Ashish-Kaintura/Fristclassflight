import React from 'react';
import { motion } from 'framer-motion';
export default function GallerySection() {
    const galleryImages = [
        { src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1000&auto=format&fit=crop", title: "The Suite" },
        { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop", title: "Signature Dining" },
        { src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop", title: "Sky Lounge" },
    ];
    return (
        <>
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
        </>
    )
}
