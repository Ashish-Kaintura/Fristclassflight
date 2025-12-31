import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MessageCircle, Star, Clock, Shield, Globe, Briefcase, CheckCircle, Menu, X, Calendar, MapPin, Users, Plane } from 'lucide-react';

const FirstClassFlight = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeFirstClassSlide, setActiveFirstClassSlide] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const businessClassDeals = [
        {
            route: "New York → London",
            airline: "British Airways",
            price: "$2,499",
            originalPrice: "$4,200",
            discount: "40% OFF",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
        },
        {
            route: "Dubai → Singapore",
            airline: "Emirates",
            price: "$1,899",
            originalPrice: "$3,500",
            discount: "45% OFF",
            image: "https://images.unsplash.com/photo-1583739027971-f0b25c9e8b4c?w=800&q=80"
        },
        {
            route: "Los Angeles → Tokyo",
            airline: "Qatar Airways",
            price: "$2,799",
            originalPrice: "$5,100",
            discount: "45% OFF",
            image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80"
        },
        {
            route: "Paris → New York",
            airline: "Air France",
            price: "$2,299",
            originalPrice: "$4,000",
            discount: "42% OFF",
            image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80"
        }
    ];

    const firstClassDeals = [
        {
            route: "London → Dubai",
            airline: "Emirates A380",
            price: "$5,999",
            originalPrice: "$12,000",
            discount: "50% OFF",
            image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=800&q=80"
        },
        {
            route: "New York → Hong Kong",
            airline: "Cathay Pacific",
            price: "$6,499",
            originalPrice: "$13,500",
            discount: "52% OFF",
            image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80"
        },
        {
            route: "Sydney → London",
            airline: "Singapore Airlines",
            price: "$7,299",
            originalPrice: "$15,000",
            discount: "51% OFF",
            image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
        },
        {
            route: "Frankfurt → San Francisco",
            airline: "Lufthansa",
            price: "$5,799",
            originalPrice: "$11,800",
            discount: "50% OFF",
            image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80"
        }
    ];

    const advantages = [
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Personal 24/7 Expert",
            description: "Your personal flight expert is 24/7 available for you, to assist you with any booking or question."
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Exclusive Deals",
            description: "Take advantage of our team's deep knowledge of the airline industry, with our reduced ticket fares and exclusive offers."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Flexible Fares",
            description: "Our flexible fares and easy changes ensure that your travel plans are always in your control."
        },
        {
            icon: <CheckCircle className="w-8 h-8" />,
            title: "Easy Bookings",
            description: "Simply contact us directly, select an offer, easily pay online and receive your flight ticket via email."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Complex Itineraries",
            description: "Whether a one-way trip, round-trip, or complex multi-city itinerary, we've got you covered."
        },
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Corporate Travel",
            description: "Dedicated service, flexible tickets, and outstanding value for money for business travelers."
        }
    ];

    const steps = [
        {
            number: "1",
            title: "Request Free Quote",
            description: "Contact us via Phone, E-Mail, WhatsApp or request a quote via the online flight search."
        },
        {
            number: "2",
            title: "Receive Personalized Quote",
            description: "Our Flight Experts will search the best available offers and send you a personalized quote."
        },
        {
            number: "3",
            title: "Choose and Travel",
            description: "Select an offer, pay securely online and receive your flight tickets via E-Mail."
        }
    ];

    const nextSlide = (isFirstClass = false) => {
        if (isFirstClass) {
            setActiveFirstClassSlide((prev) => (prev + 1) % firstClassDeals.length);
        } else {
            setActiveSlide((prev) => (prev + 1) % businessClassDeals.length);
        }
    };

    const prevSlide = (isFirstClass = false) => {
        if (isFirstClass) {
            setActiveFirstClassSlide((prev) => (prev - 1 + firstClassDeals.length) % firstClassDeals.length);
        } else {
            setActiveSlide((prev) => (prev - 1 + businessClassDeals.length) % businessClassDeals.length);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center space-x-2">
                            <Plane className="w-8 h-8 text-amber-500" />
                            <span className="text-2xl font-bold text-white">First Class Flight</span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="text-white hover:text-amber-500 transition-colors">Home</a>
                            <a href="#business" className="text-white hover:text-amber-500 transition-colors">Business Class</a>
                            <a href="#first" className="text-white hover:text-amber-500 transition-colors">First Class</a>
                            <a href="#about" className="text-white hover:text-amber-500 transition-colors">About Us</a>
                            <a href="#corporate" className="text-white hover:text-amber-500 transition-colors">Corporate</a>
                            <a href="#contact" className="text-white hover:text-amber-500 transition-colors">Contact</a>
                        </div>

                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-slate-900/98 backdrop-blur-sm">
                        <div className="px-4 py-6 space-y-4">
                            <a href="#home" className="block text-white hover:text-amber-500">Home</a>
                            <a href="#business" className="block text-white hover:text-amber-500">Business Class</a>
                            <a href="#first" className="block text-white hover:text-amber-500">First Class</a>
                            <a href="#about" className="block text-white hover:text-amber-500">About Us</a>
                            <a href="#corporate" className="block text-white hover:text-amber-500">Corporate</a>
                            <a href="#contact" className="block text-white hover:text-amber-500">Contact</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1583739027971-f0b25c9e8b4c?w=1920&q=80"
                        alt="Luxury Aircraft Interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                        Fly Business and<br />First Class for less
                    </h1>

                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-12 mb-16">
                        {['Emirates', 'Etihad', 'Qatar Airways', 'Lufthansa', 'Singapore Airlines'].map((airline, idx) => (
                            <div key={idx} className="text-white/90 text-lg font-semibold px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                {airline}
                            </div>
                        ))}
                    </div>

                    {/* Search Card */}
                    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto">
                        <div className="flex gap-4 mb-6 border-b pb-4">
                            <button className="pb-2 border-b-2 border-amber-500 text-amber-600 font-semibold">Round Trip</button>
                            <button className="pb-2 text-gray-500 hover:text-amber-600">One Way</button>
                            <button className="pb-2 text-gray-500 hover:text-amber-600">Multi City</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl hover:border-amber-500 transition-colors">
                                <MapPin className="w-5 h-5 text-amber-500" />
                                <div className="flex-1">
                                    <div className="text-xs text-gray-500">From</div>
                                    <input type="text" placeholder="City or Airport" className="w-full font-semibold text-gray-800 outline-none" />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl hover:border-amber-500 transition-colors">
                                <MapPin className="w-5 h-5 text-amber-500" />
                                <div className="flex-1">
                                    <div className="text-xs text-gray-500">To</div>
                                    <input type="text" placeholder="City or Airport" className="w-full font-semibold text-gray-800 outline-none" />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl hover:border-amber-500 transition-colors">
                                <Calendar className="w-5 h-5 text-amber-500" />
                                <div className="flex-1">
                                    <div className="text-xs text-gray-500">Departure</div>
                                    <div className="font-semibold text-gray-800">07.01.2026</div>
                                    <div className="text-xs text-gray-500">Wednesday</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl hover:border-amber-500 transition-colors">
                                <Calendar className="w-5 h-5 text-amber-500" />
                                <div className="flex-1">
                                    <div className="text-xs text-gray-500">Return</div>
                                    <div className="font-semibold text-gray-800">14.01.2026</div>
                                    <div className="text-xs text-gray-500">Wednesday</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl">
                                <Users className="w-5 h-5 text-amber-500" />
                                <div className="flex-1">
                                    <div className="text-xs text-gray-500 mb-2">Passengers</div>
                                    <div className="flex gap-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm">Adult</span>
                                            <select value={adults} onChange={(e) => setAdults(Number(e.target.value))} className="border rounded px-2 py-1">
                                                {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
                                            </select>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm">Child</span>
                                            <select value={children} onChange={(e) => setChildren(Number(e.target.value))} className="border rounded px-2 py-1">
                                                {[0, 1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
                                            </select>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm">Infant</span>
                                            <select value={infants} onChange={(e) => setInfants(Number(e.target.value))} className="border rounded px-2 py-1">
                                                {[0, 1, 2].map(n => <option key={n} value={n}>{n}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl">
                                <Plane className="w-5 h-5 text-amber-500" />
                                <div className="flex-1">
                                    <div className="text-xs text-gray-500">Class</div>
                                    <select className="w-full font-semibold text-gray-800 outline-none bg-transparent">
                                        <option>Business Class</option>
                                        <option>First Class</option>
                                        <option>Premium Economy</option>
                                        <option>Economy</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg">
                            SEARCH FLIGHTS
                        </button>
                    </div>
                </div>
            </section>

            {/* Business Class Deals */}
            <section id="business" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Best Selling Business Class Deals</h2>
                        <p className="text-xl text-gray-600">Exclusive offers on premium business class flights</p>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden">
                            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                                {businessClassDeals.map((deal, idx) => (
                                    <div key={idx} className="min-w-full px-4">
                                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                            <div className="relative h-64">
                                                <img src={deal.image} alt={deal.route} className="w-full h-full object-cover" />
                                                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                                                    {deal.discount}
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{deal.route}</h3>
                                                <p className="text-gray-600 mb-4">{deal.airline}</p>
                                                <div className="flex items-end justify-between">
                                                    <div>
                                                        <p className="text-gray-400 line-through text-sm">{deal.originalPrice}</p>
                                                        <p className="text-4xl font-bold text-amber-500">{deal.price}</p>
                                                    </div>
                                                    <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button onClick={() => prevSlide(false)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button onClick={() => nextSlide(false)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </section>

            {/* First Class Deals */}
            <section id="first" className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Best Selling First Class Deals</h2>
                        <p className="text-xl text-gray-300">Experience ultimate luxury in the sky</p>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden">
                            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeFirstClassSlide * 100}%)` }}>
                                {firstClassDeals.map((deal, idx) => (
                                    <div key={idx} className="min-w-full px-4">
                                        <div className="bg-slate-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                            <div className="relative h-64">
                                                <img src={deal.image} alt={deal.route} className="w-full h-full object-cover" />
                                                <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full font-bold">
                                                    {deal.discount}
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-2xl font-bold text-white mb-2">{deal.route}</h3>
                                                <p className="text-gray-300 mb-4">{deal.airline}</p>
                                                <div className="flex items-end justify-between">
                                                    <div>
                                                        <p className="text-gray-500 line-through text-sm">{deal.originalPrice}</p>
                                                        <p className="text-4xl font-bold text-amber-500">{deal.price}</p>
                                                    </div>
                                                    <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button onClick={() => prevSlide(true)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button onClick={() => nextSlide(true)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
                        <p className="text-xl text-gray-600">Simple steps to your luxury travel experience</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative">
                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                                        {step.number}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                                {idx < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-amber-500"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Sets Us Apart?</h2>
                        <p className="text-xl text-gray-600">Advantages when booking with us</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {advantages.map((advantage, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-8 hover:bg-amber-50 transition-colors group">
                                <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                                    {advantage.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Corporate Section */}
            <section id="corporate" className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Corporate Travel Management</h2>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                We are committed to taking the hassle out of frequent business travel. Whatever your corporate travel needs, we'll take care of the arrangements as conveniently as possible so you can concentrate on your business, not your travel plans.
                            </p>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                With a dedicated Flight Expert at your fingertips, one call or email is all it takes to book all aspects of your business flights, including special business travel pricing.
                            </p>
                            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                                Learn More About Corporate Travel
                            </button>
                        </div>
                        <div className="relative h-96">
                            <img
                                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                                alt="Corporate Travel"
                                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Book Your Luxury Flight?</h2>
                    <p className="text-xl text-gray-600 mb-12">Contact our 24/7 flight experts today</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <a href="tel:+1234567890" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                            <Phone className="w-12 h-12 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                            <p className="text-gray-600">+1 (234) 567-890</p>
                        </a>

                        <a href="mailto:info@firstclassflight.com" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                            <Mail className="w-12 h-12 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                            <p className="text-gray-600">info@firstclassflight.com</p>
                        </a>

                        <a href="https://wa.me/1234567890" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                            <MessageCircle className="w-12 h-12 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                            <p className="text-gray-600">Chat with us</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Plane className="w-8 h-8 text-amber-500" />
                                <span className="text-xl font-bold">First Class Flight</span>
                            </div>
                            <p className="text-gray-400">Your trusted partner for luxury air travel at unbeatable prices.</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#home" className="text-gray-400 hover:text-amber-500">Home</a></li>
                                <li><a href="#business" className="text-gray-400 hover:text-amber-500">Business Class</a></li>
                                <li><a href="#first" className="text-gray-400 hover:text-amber-500">First Class</a></li>
                                <li><a href="#about" className="text-gray-400 hover:text-amber-500">About Us</a></li>
                                <li><a href="#corporate" className="text-gray-400 hover:text-amber-500">Corporate Travel</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-amber-500">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-amber-500">Terms of Service</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-amber-500">Cookie Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-amber-500">Imprint</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3 text-gray-400">
                                    <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                                    <span>123 Luxury Avenue, Suite 100<br />New York, NY 10001</span>
                                </li>
                                <li className="flex items-center space-x-3 text-gray-400">
                                    <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                                    <span>+1 (234) 567-890</span>
                                </li>
                                <li className="flex items-center space-x-3 text-gray-400">
                                    <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                                    <span>info@firstclassflight.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} First Class Flight. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FirstClassFlight;