import React, { useState, useEffect } from 'react';
import logo from "../images/logo/logo.png"
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div>
            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center space-x-2">
                            <Link to="">  <img width={170} src={logo} alt="logo" /></Link>
                           
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className="text-white hover:text-[#c8a27a] transition-colors">Home</Link>
                            <Link to="#business" className="text-white hover:text-[#c8a27a] transition-colors">Business Class</Link>
                            <Link to="#first" className="text-white hover:text-[#c8a27a] transition-colors">First Class</Link>
                            <Link to="/about-us" className="text-white hover:text-[#c8a27a] transition-colors">About Us</Link>
                            <Link to="#corporate" className="text-white hover:text-[#c8a27a] transition-colors">Corporate</Link>
                            <Link to="/contact-us" className="text-white hover:text-[#c8a27a] transition-colors">Contact</Link>
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
                            <Link to="#home" className="block text-white hover:text-[#c8a27a]">Home</Link>
                            <Link to="#business" className="block text-white hover:text-[#c8a27a]">Business Class</Link>
                            <Link to="#first" className="block text-white hover:text-[#c8a27a]">First Class</Link>
                            <Link to="#about" className="block text-white hover:text-[#c8a27a]">About Us</Link>
                            <Link to="#corporate" className="block text-white hover:text-[#c8a27a]">Corporate</Link>
                            <Link to="/contact-us" className="block text-white hover:text-[#c8a27a]">Contact</Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}
