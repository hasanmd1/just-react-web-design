'use client'

import React from 'react'
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";


export default function About() {
    return (
        <>
            <Head>
                <title>About | EstatePro</title>
                <meta name="description" content="Discover your dream home with EstatePro" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="real estate, property, home buying, home selling, estate agents" />
                <meta name="author" content="EstatePro" />
                <script type={`application/ld+json`}>
                    {`{
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "EstatePro",
                        "url": "https://www.estatepro.com",
                        "sameAs": [
                            "https://www.facebook.com/estatepro",
                            "https://twitter.com/estatepro",
                            "https://www.instagram.com/estatepro"
                        ]
                    }`}
                </script>
            </Head>
            <div className={`gap-y-8`}>
                <Navbar/>
                <AboutUs/>
                <Footer/>
            </div>

        </>
    )
}