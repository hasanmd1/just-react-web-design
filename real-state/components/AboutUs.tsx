'use client'

import React from 'react'
import Image from 'next/image'
import { GiMedal, GiHouse, GiTeamIdea } from 'react-icons/gi'

export default function AboutUs() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="mt-12 grid md:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                            Transforming Real Estate Experiences
                        </h2>
                        <p className="text-lg text-gray-600">
                            At EstatePro, we combine cutting-edge technology with personalized
                            service to redefine your property journey. With over a decade of
                            experience, we have helped thousands find their perfect space.
                        </p>
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Explore Properties
                        </button>
                    </div>
                    <div className="relative h-96 rounded-xl overflow-hidden">
                        <Image
                            src="/about-hero.jpeg"
                            alt="Our Team"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-blue-50 p-8 rounded-xl text-center">
                        <GiMedal className="text-4xl text-blue-600 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold mb-2">12+</h3>
                        <p className="text-gray-600">Years Experience</p>
                    </div>
                    <div className="bg-blue-50 p-8 rounded-xl text-center">
                        <GiHouse className="text-4xl text-blue-600 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold mb-2">5K+</h3>
                        <p className="text-gray-600">Properties Sold</p>
                    </div>
                    <div className="bg-blue-50 p-8 rounded-xl text-center">
                        <GiTeamIdea className="text-4xl text-blue-600 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold mb-2">98%</h3>
                        <p className="text-gray-600">Client Satisfaction</p>
                    </div>
                </div>

                {/* Our Story */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="relative h-96 rounded-xl overflow-hidden">
                        <Image
                            src="/about-story.avif"
                            alt="Our Story"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                        <p className="text-gray-600">
                            Founded in 2010 by real estate veterans, EstatePro began as a
                            mission to simplify property transactions. Today, we stand as a
                            trusted partner for both first-time buyers and seasoned investors,
                            leveraging data-driven insights and local market expertise.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">✓</div>
                                <span className="font-medium">Award-winning service</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">✓</div>
                                <span className="font-medium">Transparent transactions</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">✓</div>
                                <span className="font-medium">Digital-first approach</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Core Values */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <GiMedal className="text-2xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                            <p className="text-gray-600">Ethical practices in every transaction</p>
                        </div>
                        <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <GiHouse className="text-2xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                            <p className="text-gray-600">Technology-driven solutions</p>
                        </div>
                        <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <GiTeamIdea className="text-2xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Client-Centric</h3>
                            <p className="text-gray-600">Your needs, our priority</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
                    <p className="mb-6">Our experts are here to guide you every step of the way</p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                        Contact Us Today
                    </button>
                </div>
            </div>
        </section>
    )
}