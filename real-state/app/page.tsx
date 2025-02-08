'use client'

import React from 'react';
import Navbar from '@/components/Navbar'; // Fixed typo
import Hero from '@/components/Hero';
import PropertiesPage from '@/components/Properties';
import Analytics from '@/components/Analytics';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Head from "next/head";

export default function Home() {
  return (
      <>
          <Head>
              <title>Home | EstatePro</title>
              <meta name="description" content="Discover your dream home with EstatePro" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="keywords" content="real estate, property, home buying, home selling, estate agents" />
              <meta name="author" content="EstatePro" />
          </Head>
          <div>
              <Navbar />
              <Hero />
              <PropertiesPage />
              <Analytics />
              <Testimonials />
              <Footer />
          </div>
      </>
  );
}