import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight
} from 'lucide-react';

export default function Herosection() {
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
         <div className="relative h-[85vh] w-full overflow-hidden">
                      {/* Background Image with Overlay */}
                      <div className="absolute inset-0">
                          <img
                              src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2532&auto=format&fit=crop"
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
    </>
  )
}
