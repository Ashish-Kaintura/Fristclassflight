import React from 'react'
import logo from "../images/logo/logo.png"
import { ChevronLeft, ChevronRight, Phone, Mail, MessageCircle, Star, Clock, Shield, Globe, Briefcase, CheckCircle, Menu, X, Calendar, MapPin, Users, Plane } from 'lucide-react';
export default function Footer() {
  return (
    <>
          <footer className="bg-slate-900 text-white py-12">
              <div className="max-w-7xl mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                      <div>
                          <div className="flex items-center space-x-2 mb-4">
                              <img width={170} src={logo} alt="logo" />
                          </div>
                          <p className="text-gray-400">Your trusted partner for luxury air travel at unbeatable prices.</p>
                      </div>

                      <div>
                          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                          <ul className="space-y-2">
                              <li><a href="#home" className="text-gray-400 hover:text-[#c8a27a]">Home</a></li>
                              <li><a href="#business" className="text-gray-400 hover:text-[#c8a27a]">Business Class</a></li>
                              <li><a href="#first" className="text-gray-400 hover:text-[#c8a27a]">First Class</a></li>
                              <li><a href="#about" className="text-gray-400 hover:text-[#c8a27a]">About Us</a></li>
                              <li><a href="#corporate" className="text-gray-400 hover:text-[#c8a27a]">Corporate Travel</a></li>
                          </ul>
                      </div>

                      <div>
                          <h4 className="text-lg font-bold mb-4">Legal</h4>
                          <ul className="space-y-2">
                              <li><a href="#" className="text-gray-400 hover:text-[#c8a27a]">Privacy Policy</a></li>
                              <li><a href="#" className="text-gray-400 hover:text-[#c8a27a]">Terms of Service</a></li>
                              <li><a href="#" className="text-gray-400 hover:text-[#c8a27a]">Cookie Policy</a></li>
                              <li><a href="#" className="text-gray-400 hover:text-[#c8a27a]">Imprint</a></li>
                          </ul>
                      </div>

                      <div>
                          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                          <ul className="space-y-4">
                              <li className="flex items-start space-x-3 text-gray-400">
                                  <MapPin className="w-5 h-5 text-[#c8a27a] shrink-0" />
                                  <span>123 Luxury Avenue, Suite 100<br />New York, NY 10001</span>
                              </li>
                              <li className="flex items-center space-x-3 text-gray-400">
                                  <Phone className="w-5 h-5 text-[#c8a27a] shrink-0" />
                                  <span>+1 (234) 567-890</span>
                              </li>
                              <li className="flex items-center space-x-3 text-gray-400">
                                  <Mail className="w-5 h-5 text-[#c8a27a] shrink-0" />
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
    </>
  )
}
