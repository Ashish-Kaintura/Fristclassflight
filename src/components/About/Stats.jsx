import React from "react";
import { motion } from "framer-motion";
import {
    Globe,
    Plane,
    MapPin,
    Headset,
    BadgeDollarSign,
    RefreshCcw,
    CreditCard,
    Route,
    Briefcase
} from "lucide-react";
export default function Stats() {
    const stats = [
        { value: "190+", label: "Countries", icon: Globe },
        { value: "300+", label: "Airlines", icon: Plane },
        { value: "2000+", label: "Destinations", icon: MapPin },
    ];
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -8 }}
                  className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#c8a27a] via-transparent to-transparent"
            >
              {/* Card */}
              <div className="relative h-full rounded-3xl bg-slate-900/80 backdrop-blur-xl p-10 text-center shadow-xl transition group-hover:shadow-amber-400/20">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                          <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#c8a27a] to-[#c8a27a] shadow-lg">
                    <item.icon className="h-7 w-7 text-black" />
                  </div>
                </div>

                {/* Value */}
                <div className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                  {item.value}
                </div>

                {/* Divider */}
                      <div className="mx-auto my-4 h-[2px] w-12 bg-gradient-to-r from-transparent via-[#c8a27a] to-transparent opacity-70" />

                {/* Label */}
                <div className="text-sm uppercase tracking-widest text-gray-400">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
