'use client'

import React from 'react'
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        // Handle form submission
    }

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-12 text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We are here to help and answer any questions you might have.
                        We look forward to hearing from you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Send Us a Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Details */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MdLocationOn className="text-2xl text-blue-600 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Our Office</h4>
                                        <p className="text-gray-600">
                                            123 Skyline Blvd, Metro City, MC 45678
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MdPhone className="text-2xl text-blue-600 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Phone</h4>
                                        <p className="text-gray-600">
                                            <a href="tel:+11234567890" className="hover:text-blue-600">
                                                +1 (123) 456-7890
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MdEmail className="text-2xl text-blue-600 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Email</h4>
                                        <p className="text-gray-600">
                                            <a href="mailto:info@estatepro.com" className="hover:text-blue-600">
                                                info@estatepro.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MdAccessTime className="text-2xl text-blue-600 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Office Hours</h4>
                                        <p className="text-gray-600">
                                            Mon-Fri: 9am - 6pm<br />
                                            Sat: 10am - 4pm<br />
                                            Sun: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Follow Us
                            </h3>
                            <div className="flex gap-6">
                                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-12 h-96 rounded-xl overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d5a32f5c7b3!2s123%20Skyline%20Blvd%2C%20Metro%20City%20MC%2045678!5e0!3m2!1sen!2sus!4v1633023226784!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}