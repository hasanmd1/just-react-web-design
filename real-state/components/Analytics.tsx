'use client'

import React, { useState } from 'react';
import { GiPriceTag, GiHouse, GiStairs } from 'react-icons/gi';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function Analytics() {
    const [price, setPrice] = useState(500000);
    const [area, setArea] = useState(1500);
    const [downPayment, setDownPayment] = useState(20);
    const [interestRate, setInterestRate] = useState(5.5);
    const [loanTerm, setLoanTerm] = useState(30);

    // Mortgage Calculation
    const calculateMortgage = () => {
        const principal = price * (1 - downPayment / 100);
        const monthlyInterest = interestRate / 100 / 12;
        const numberOfPayments = loanTerm * 12;

        const monthlyPayment =
            (principal *
                monthlyInterest *
                Math.pow(1 + monthlyInterest, numberOfPayments)) /
            (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

        return monthlyPayment.toFixed(2);
    };

    // Price per sqft
    const pricePerSqft = (price / area).toFixed(2);

    // Market Data Chart
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Average Price Trend',
                data: [450000, 465000, 480000, 470000, 490000, 510000],
                borderColor: 'rgb(59, 130, 246)',
                tension: 0.4,
            },
        ],
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Property Analytics & Calculator
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Calculator Section */}
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <GiPriceTag className="text-blue-600" />
                            Mortgage Calculator
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Property Price ($)
                                </label>
                                <input
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(+e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Down Payment (%)
                                    </label>
                                    <input
                                        type="number"
                                        value={downPayment}
                                        onChange={(e) => setDownPayment(+e.target.value)}
                                        className="w-full p-2 border rounded-md"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Loan Term (years)
                                    </label>
                                    <input
                                        type="number"
                                        value={loanTerm}
                                        onChange={(e) => setLoanTerm(+e.target.value)}
                                        className="w-full p-2 border rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Property Area (sqft)
                                </label>
                                <input
                                    type="number"
                                    value={area}
                                    onChange={(e) => setArea(+e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Interest Rate (%)
                                </label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(+e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                        </div>

                        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                            <h4 className="text-lg font-semibold mb-2">Calculation Results</h4>
                            <div className="space-y-2">
                                <p>Monthly Payment: ${calculateMortgage()}</p>
                                <p>Total Loan Amount: ${(price * (1 - downPayment/100)).toLocaleString()}</p>
                                <p>Price per Sqft: ${pricePerSqft}</p>
                            </div>
                        </div>
                    </div>

                    {/* Market Analytics */}
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <GiHouse className="text-blue-600" />
                            Market Trends
                        </h3>

                        <div className="h-64 mb-6">
                            <Line data={chartData} options={{ responsive: true }} />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <GiStairs className="text-green-600" />
                                    <span className="font-medium">Avg. Price Increase</span>
                                </div>
                                <p className="text-2xl font-bold">6.2%</p>
                                <p className="text-sm text-gray-600">Last 6 months</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <GiHouse className="text-blue-600" />
                                    <span className="font-medium">Listings</span>
                                </div>
                                <p className="text-2xl font-bold">1,240</p>
                                <p className="text-sm text-gray-600">Active properties</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Metrics */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-blue-600 text-white p-6 rounded-xl">
                        <h4 className="font-semibold mb-2">Affordability Calculator</h4>
                        <p className="text-2xl font-bold">
                            ${((parseFloat(calculateMortgage())) * 4).toLocaleString()}
                        </p>
                        <p className="text-sm">Recommended budget based on income</p>
                    </div>

                    <div className="bg-green-600 text-white p-6 rounded-xl">
                        <h4 className="font-semibold mb-2">ROI Estimate</h4>
                        <p className="text-2xl font-bold">8.4%</p>
                        <p className="text-sm">5-year projected return</p>
                    </div>

                    <div className="bg-purple-600 text-white p-6 rounded-xl">
                        <h4 className="font-semibold mb-2">Rent Comparison</h4>
                        <p className="text-2xl font-bold">${((parseFloat(calculateMortgage())) * 1.2).toFixed(0)}</p>
                        <p className="text-sm">Equivalent rental value</p>
                    </div>
                </div>
            </div>
        </section>
    );
}