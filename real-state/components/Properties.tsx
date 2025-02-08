'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { MdBed, MdBathtub, MdSquareFoot } from 'react-icons/md'
import { BiHeart } from 'react-icons/bi'

export default function PropertiesPage() {
    const [selectedType, setSelectedType] = useState('all')

    // Sample property data
    const properties = [
        {
            id: 1,
            type: 'house',
            price: 450000,
            title: 'Modern Suburban Home',
            beds: 4,
            baths: 3,
            sqft: 2500,
            location: 'Green Valley',
            image: '/property1.jpg'
        },
        {
            id: 2,
            type: 'apartment',
            price: 220000,
            title: 'Downtown Luxury Apartment',
            beds: 2,
            baths: 2,
            sqft: 1200,
            location: 'City Center',
            image: '/property2.jpg'
        },
        {
            id: 3,
            type: 'villa',
            price: 800000,
            title: 'Beachfront Villa',
            beds: 5,
            baths: 4,
            sqft: 5000,
            location: 'Palm Beach',
            image: '/property3.webp'
        },
        {
            id: 4,
            type: 'commercial',
            price: 1500000,
            title: 'Office Space in Downtown',
            beds: 0,
            baths: 0,
            sqft: 5000,
            location: 'City Center',
            image: '/property4.jpeg'
        },
    ]

    const propertyTypes = ['all', 'house', 'apartment', 'villa', 'commercial']

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mt-12 text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Featured Properties
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our carefully curated selection of premium properties
                        across various categories
                    </p>
                </div>

                {/* Property Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {propertyTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`px-6 py-2 rounded-full capitalize ${
                                selectedType === type
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                            } transition-colors duration-200`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties
                        .filter((property) =>
                            selectedType === 'all' || property.type === selectedType
                        )
                        .map((property) => (
                            <div
                                key={property.id}
                                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Property Image */}
                                <div className="relative h-64 rounded-t-xl overflow-hidden">
                                    <Image
                                        src={property.image}
                                        alt={property.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                                        <BiHeart className="text-xl text-gray-600 hover:text-red-500 cursor-pointer" />
                                    </div>
                                    <span className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {property.type}
                  </span>
                                </div>

                                {/* Property Details */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {property.title}
                                    </h3>
                                    <p className="text-2xl font-bold text-blue-600 mb-4">
                                        ${property.price.toLocaleString()}
                                    </p>
                                    <p className="text-gray-600 mb-4">{property.location}</p>

                                    {/* Property Features */}
                                    <div className="flex items-center gap-6 text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <MdBed className="text-xl" />
                                            <span>{property.beds} Beds</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MdBathtub className="text-xl" />
                                            <span>{property.baths} Baths</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MdSquareFoot className="text-xl" />
                                            <span>{property.sqft} sqft</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-8">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        View More Properties
                    </button>
                </div>
            </div>
        </section>
    )
}