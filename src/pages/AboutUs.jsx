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
import Stats from "../components/About/Stats";

const stats = [
    { value: "190+", label: "Countries", icon: Globe },
    { value: "300+", label: "Airlines", icon: Plane },
    { value: "2000+", label: "Destinations", icon: MapPin },
];

const advantages = [
    {
        title: "Personal 24/7 Expert",
        desc: "Your personal flight expert is available 24/7 to assist with bookings and any questions.",
        icon: Headset,
    },
    {
        title: "Exclusive Deals",
        desc: "We leverage deep airline industry knowledge to find reduced fares and exclusive offers.",
        icon: BadgeDollarSign,
    },
    {
        title: "Flexible Fares",
        desc: "Easy changes and flexible fares ensure your travel plans stay in your control.",
        icon: RefreshCcw,
    },
    {
        title: "Easy Bookings",
        desc: "Select your personalized offer, pay securely online, and receive tickets via email.",
        icon: CreditCard,
    },
    {
        title: "Complex Itineraries",
        desc: "One-way, round-trip, or multi-city itineraries — we handle it all seamlessly.",
        icon: Route,
    },
    {
        title: "Corporate Travel Management",
        desc: "Dedicated solutions for business travelers with flexible tickets and great value.",
        icon: Briefcase,
    },
];

export default function AboutUs() {
    return (
        <div className="">

            {/* Hero */}
            <section className="relative py-28 px-6 text-center  bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight"
                >
                    About <span className="text-[#c8a27a]">FIRSTCLASS.flights</span>
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

            {/* Who We Are */}
            <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-semibold mb-6 text-[#c8a27a]">Who We Are</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        We at <strong className="text-blue-700" >FIRSTCLASS.flights</strong> are Flight Experts for
                        Business and First Class flights. We offer reduced ticket fares on
                        international flights with all major airlines.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Enjoy priority check-in, exclusive airport lounges, spacious seats,
                        fine dining, premium service, and state-of-the-art entertainment —
                        a flying experience like no other.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Our dedicated team is always available to design personalized
                        itineraries and deliver the best value for your journey.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white rounded-3xl p-10 shadow-xl"
                >
                    <p className="text-gray-300 leading-relaxed mb-4">
                        Simply contact us via phone, email, WhatsApp, or request a quote
                        online. We search the best available offers and send you a
                        personalized quote tailored to your needs.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        The booking process is quick and secure. Select an offer, add
                        passenger details, pay online, and receive your e-tickets via email.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        From simple trips to complex multi-city journeys — we make travel
                        effortless while saving you time and money.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <Stats />

            {/* Advantages */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl md:text-4xl font-semibold text-center mb-16 text-[#C8A27A]"
                >
                    Advantages When Booking With Us
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {advantages.map((adv, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
                        >
                            <adv.icon className="h-10 w-10 text-[#C8A27A] mb-4" />
                            <h3 className="text-xl font-semibold mb-3 text-[#C8A27A]">{adv.title}</h3>
                            <p className="text-white leading-relaxed">{adv.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Footer CTA */}
            <section className="text-center py-20 bg-gradient-to-r from-[#caa073] to-[#C8A27A] text-black">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold"
                >
                    FIRSTCLASS.flights – Luxurious Flights for Less
                </motion.h3>
                <p className="mt-4 text-lg">
                    Book your next premium journey with confidence and peace of mind.
                </p>
            </section>
        </div>
    );
}
