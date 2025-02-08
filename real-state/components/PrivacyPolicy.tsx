'use client'

import React from 'react'
import { MdSecurity, MdDataUsage, MdCookie } from 'react-icons/md'

export default function PrivacyPolicy() {
    return (
        <section className="py-16 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <MdSecurity className="text-4xl text-blue-600 mx-auto mb-4" />
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-600 text-sm">
                            Effective Date: September 1, 2023
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-8 text-gray-700">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
                            <p>
                                EstatePro (the &#34;Company&#34;) is committed to protecting your privacy.
                                This Privacy Policy explains how we collect, use, and safeguard your
                                information when you use our real estate platform and services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <MdDataUsage className="text-blue-600" />
                                2. Information We Collect
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="p-4 border rounded-lg">
                                    <h3 className="font-medium mb-2">Personal Information</h3>
                                    <ul className="list-disc pl-4 space-y-1 text-sm">
                                        <li>Name and contact details</li>
                                        <li>Property preferences</li>
                                        <li>Financial information (for transactions)</li>
                                    </ul>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h3 className="font-medium mb-2">Technical Information</h3>
                                    <ul className="list-disc pl-4 space-y-1 text-sm">
                                        <li>IP address and device information</li>
                                        <li>Browser type and version</li>
                                        <li>Usage patterns and analytics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">3. How We Use Information</h2>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Provide and improve our services</li>
                                    <li>Process transactions and listings</li>
                                    <li>Personalize user experience</li>
                                    <li>Communicate important updates</li>
                                    <li>Ensure platform security</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <MdCookie className="text-blue-600" />
                                4. Cookies & Tracking
                            </h2>
                            <p>
                                We use cookies and similar technologies to:
                                <ul className="list-disc pl-6 mt-2 space-y-2">
                                    <li>Remember user preferences</li>
                                    <li>Analyze website traffic</li>
                                    <li>Enable essential features</li>
                                </ul>
                            </p>
                            <div className="mt-4 p-4 border rounded-lg">
                                <p className="text-sm">
                                    You can manage cookie preferences through your browser settings.
                                    Disabling cookies may affect website functionality.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">5. Data Sharing</h2>
                            <p>
                                We may share information with:
                                <ul className="list-disc pl-6 mt-2 space-y-2">
                                    <li>Service providers and partners</li>
                                    <li>Legal authorities when required</li>
                                    <li>Third parties during business transfers</li>
                                </ul>
                            </p>
                            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                                <p className="text-sm">
                                    We never sell personal information to third parties for
                                    marketing purposes.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">6. Data Security</h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="p-4 border rounded-lg">
                                    <h3 className="font-medium mb-2">Protection Measures</h3>
                                    <ul className="list-disc pl-4 space-y-1 text-sm">
                                        <li>SSL encryption</li>
                                        <li>Secure data storage</li>
                                        <li>Regular security audits</li>
                                    </ul>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h3 className="font-medium mb-2">User Responsibilities</h3>
                                    <ul className="list-disc pl-4 space-y-1 text-sm">
                                        <li>Keep login credentials secure</li>
                                        <li>Use strong passwords</li>
                                        <li>Report suspicious activity</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-4">7. Your Rights</h2>
                            <p>
                                You have the right to:
                                <ul className="list-disc pl-6 mt-2 space-y-2">
                                    <li>Access your personal data</li>
                                    <li>Request data correction</li>
                                    <li>Withdraw consent</li>
                                    <li>Request data deletion</li>
                                </ul>
                            </p>
                        </div>

                        <div className="border-t pt-6">
                            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                            <p className="mb-2">
                                For privacy-related inquiries:
                            </p>
                            <ul className="space-y-1">
                                <li>Email: privacy@estatepro.com</li>
                                <li>Address: 123 Privacy Street, San Francisco, CA 94105</li>
                                <li>Phone: +1 (415) 555-0123</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}