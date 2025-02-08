'use client'

import React from 'react';
import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Home Buyer",
            text: "Finding our dream home was effortless with EstatePro. The team provided exceptional service and guidance throughout the entire process.",
            rating: 5,
            image: "/client1.avif"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Property Investor",
            text: "The market insights and analytics helped me make informed investment decisions. Highly recommended for serious investors!",
            rating: 5,
            image: "/client2.avif"
        },
        {
            id: 3,
            name: "Emma Williams",
            role: "First-time Seller",
            text: "Sold my property 15% above market value thanks to their expert valuation and marketing strategies. Thanks to EstatePro for helping me reach my goals!",
            rating: 4,
            image: "/client3.avif"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 gap-y-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover why thousands of clients trust us with their real estate needs
                    </p>
                </div>

                <div className="relative mb-12">
                    <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        pagination={{ clickable: true }}
                        navigation
                        className="pb-12"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                                    <div className="mb-4 flex gap-2">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400" />
                                        ))}
                                    </div>
                                    <FaQuoteLeft className="text-4xl text-blue-600 mb-6 opacity-20" />
                                    <p className="text-gray-600 mb-6">{testimonial.text}</p>
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                            width={48}
                                            height={48}
                                        />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap md:justify-between justify-center gap-8 items-center">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-blue-600">4.9/5</p>
                        <p className="text-sm text-gray-600">Average Rating</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-blue-600">5000+</p>
                        <p className="text-sm text-gray-600">Happy Clients</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-blue-600">98%</p>
                        <p className="text-sm text-gray-600">Recommend Us</p>
                    </div>
                </div>
            </div>
        </section>
    );
}