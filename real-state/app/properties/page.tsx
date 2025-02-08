'use client'

import React from 'react'
import Head from "next/head";
import Navbar from "@/components/Navbar";
import PropertiesPage from "@/components/Properties";
import Footer from "@/components/Footer";


export default function Properties() {
    return (
        <>
            <Head>
                <title>Properties | EstatePro</title>
                <meta name="description" content="Discover your dream home with EstatePro" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="real estate, property, home buying, home selling, estate agents" />
                <meta name="author" content="EstatePro" />
                {/* application + page specific meta tags */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.estatepro.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Properties"
                            }
                        ]
                    })}
                </script>
            </Head>
            <div className={`gap-y-8`}>
                <Navbar/>
                <PropertiesPage/>
                <Footer/>
            </div>
        </>
    )
}