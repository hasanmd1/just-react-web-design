'use client'

import React from 'react'
import { MdPolicy, MdWarning, MdGavel } from 'react-icons/md'

export default function TermsAndConditions() {
    return (
        <section className="py-16 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <MdPolicy className="text-4xl text-blue-600 mx-auto mb-4" />
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Terms & Conditions
                        </h1>
                        <p className="text-gray-600 text-sm">
                            Last Updated: September 1, 2023
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-8 text-gray-700">
                        <div>
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <MdGavel className="text-blue-600" />
                                1. Introduction
                            </h2>
                            <p className="mb-4">
                                Welcome to EstatePro. These Terms & Conditions govern your use of our
                                real estate platform and services. By accessing or using our website,
                                you agree to comply with these terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <MdWarning className="text-blue-600" />
                                2. Acceptance of Terms
                            </h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>You must be at least 18 years old to use our services</li>
                                <li>You agree to provide accurate information in all transactions</li>
                                <li>Commercial use requires prior written consent</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">3. User Responsibilities</h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="p-4 border rounded-lg">
                                    <h3 className="font-medium mb-2">Prohibited Activities</h3>
                                    <ul className="list-disc pl-4 space-y-1 text-sm">
                                        <li>Fraudulent listings</li>
                                        <li>Data scraping</li>
                                        <li>Misrepresentation</li>
                                    </ul>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h3 className="font-medium mb-2">Content Guidelines</h3>
                                    <ul className="list-disc pl-4 space-y-1 text-sm">
                                        <li>Accurate property details</li>
                                        <li>Valid contact information</li>
                                        <li>No discriminatory language</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">4. Property Listings</h2>
                            <p className="mb-4">
                                All property information is provided by third parties. While we verify
                                listings, we cannot guarantee absolute accuracy. Users should:
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Conduct independent inspections</li>
                                    <li>Verify legal documentation</li>
                                    <li>Consult professionals before transactions</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
                            <p>
                                EstatePro shall not be liable for:
                                <ul className="list-disc pl-6 mt-2 space-y-2">
                                    <li>Transaction disputes between users</li>
                                    <li>Inaccuracies in property details</li>
                                    <li>Technical service interruptions</li>
                                    <li>Third-party service issues</li>
                                </ul>
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">6. Governing Law</h2>
                            <p>
                                These terms shall be governed by and construed in accordance with the
                                laws of the State of California, United States. Any disputes will be
                                resolved in the courts of San Francisco County.
                            </p>
                        </div>

                        <div className="border-t pt-6">
                            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                            <p className="mb-2">
                                For questions about these Terms & Conditions:
                            </p>
                            <ul className="space-y-1">
                                <li>Email: legal@example.com</li>
                                <li>Address: 123 E Main St, San Francisco, CA 94105</li>
                                <li>Phone: +433 xxx xxx</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}