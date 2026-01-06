import { motion } from "framer-motion";

const steps = [
    {
        number: "1",
        title: "Request free quote",
        description:
            "Contact us directly via Phone, E-Mail, WhatsApp or request a quote via the online flight search.",
    },
    {
        number: "2",
        title: "Receive personalized quote",
        description:
            "Our Flight Experts will search the best available offers for you and send a personalized quote via E-Mail.",
    },
    {
        number: "3",
        title: "Choose and Travel",
        description:
            "Select an offer, pay securely online and receive your flight tickets via E-Mail.",
    },
];

export default function HowItWorks() {
    return (
        <section className="relative overflow-hidden bg-[#f8f6f3] py-24">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <span className="mb-4 block text-sm tracking-[0.25em] text-[#c8a27a]">
                        HOW TO BOOK
                    </span>

                    <h2 className="mb-6 font-serif text-4xl font-semibold text-gray-900">
                        How it works
                    </h2>

                    <p className="mb-12 max-w-xl text-lg leading-relaxed text-gray-600">
                        Our Flight Experts will assist you personally and are
                        <span className="font-medium text-gray-900"> 24/7 available </span>
                        for you.
                    </p>

                    {/* STEPS */}
                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                className="rounded-xl border border-[#c8a27a]/40 bg-white p-6 shadow-sm"
                            >
                                <div className="mb-2 flex items-center gap-3">
                                    <span className="text-xl font-semibold text-[#c8a27a]">
                                        {step.number}.
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {step.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="mt-12 rounded-md bg-gray-900 px-8 py-4 text-sm tracking-widest text-white transition hover:bg-gray-800"
                    >
                        HOW TO BOOK
                    </motion.button>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
                    <img
                        src="https://firstclass.flights/img/host.jpeg"
                        alt="Luxury Flight Experience"
                        className="h-full w-full rounded-3xl object-cover shadow-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
}
