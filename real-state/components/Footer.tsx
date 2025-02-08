'use client'

import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo-white.png"
                                alt="EstatePro Logo"
                                width={40}
                                height={40}
                            />
                            <span className="text-xl font-bold">EstatePro</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Transforming real estate experiences through innovation
                            and exceptional service since 2080.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaFacebook size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaTwitter size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaInstagram size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">Career</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">Media</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">API</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">Blog</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                        <div className="space-y-3 text-gray-400">
                            <div className="flex items-center gap-2">
                                <MdLocationOn className="flex-shrink-0" />
                                <span>123 Main Street, City, Country</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdPhone className="flex-shrink-0" />
                                <Link href="tel:+433x77y99" className="hover:text-white transition-colors">
                                    +433 x77 y99
                                </Link>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdEmail className="flex-shrink-0" />
                                <Link href="mailto:info@estatepro.com" className="hover:text-white transition-colors">
                                    goHomeKid@example.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className={`border-t border-gray-800 pt-8`}>
                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
                        <p className="text-gray-400 text-sm">
                            Subscribe to get latest updates and news
                        </p>
                        <form className="mt-4 flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                        <p>&copy; 2025 EstatePro. All rights reserved.</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <Link href="/policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}