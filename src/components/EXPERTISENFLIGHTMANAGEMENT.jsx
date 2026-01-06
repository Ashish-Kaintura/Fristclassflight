// EXPERTISENFLIGHTMANAGEMENT.js
import React from 'react';
import { motion } from 'framer-motion';

const EXPERTISENFLIGHTMANAGEMENT = () => {
    return (
        <div className=" bg-gray-800 text-white p-8">
            <div className="max-w-screen-xl mx-auto p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Section with Image */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src="https://firstclass.flights/img/expert.jpg"
                            alt="Business Class"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </motion.div>

                    {/* Right Section with Text and Buttons */}
                    <div className="space-y-6 lg:space-y-8">
                        <motion.h1
                            className="text-4xl lg:text-5xl font-semibold"
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Expert Business & First Class Flight Management
                        </motion.h1>
                        <motion.p
                            className=""
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Save your valuable time and leave it to your dedicated flight
                            expert to take care of your flight arrangements. Our experts will
                            do the research work for you with your preferences and priorities
                            top of mind.
                        </motion.p>
                        <motion.p
                            className=""
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            At FIRSTCLASS.flights you get your Personal Flight Expert, whose
                            priority is to understand your travel needs and find the best price
                            and value for your trip.
                        </motion.p>

                        <div className="flex space-x-4">
                            <motion.button
                                className="px-8 py-3 bg-[#c8a27a] text-white font-semibold rounded-lg transition duration-300 transform hover:bg-blue-700"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                Business Class
                            </motion.button>
                            <motion.button
                                className="px-8 py-3 bg-[#c8a27a] text-white font-semibold rounded-lg transition duration-300 transform hover:bg-orange-700"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                First Class
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EXPERTISENFLIGHTMANAGEMENT;
