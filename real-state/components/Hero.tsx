'use client'

import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative h-[600px] sm:h-[800px] bg-gray-900 text-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                    alt="Modern Home"
                    className="w-full h-full object-cover opacity-70"
                    width={1920}
                    height={1080}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>

            {/* Hero Content */}
            <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl lg:max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Discover Your Perfect
                            <span className="text-blue-400"> Dream Home</span>
                        </h1>

                        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200">
                            Explore thousands of premium properties across the country.
                            Trusted by over 50,000+ happy customers.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                Browse Properties
                            </button>
                            <button className="border-2 border-white hover:border-blue-400 text-white hover:text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                                Schedule a Tour
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="mt-12 flex gap-8 text-gray-200">
                            <div>
                                <p className="text-3xl font-bold">10K+</p>
                                <p className="text-sm">Properties Listed</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">98%</p>
                                <p className="text-sm">Customer Satisfaction</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">20+</p>
                                <p className="text-sm">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}