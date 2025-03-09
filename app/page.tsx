'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import Benefits from '../components/benefits';
import Testimonials from '../components/testimonials';
import ContactForm from '../components/contact-form';
import Footer from '../components/footer';

// Dynamically import the DataAnalysis component to avoid Chart.js SSR issues
const DataAnalysis = dynamic(() => import('../components/data-analysis'), {
  ssr: false,
  loading: () => (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-8"></div>
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md h-80"></div>
            <div className="bg-white p-6 rounded-xl shadow-md h-80"></div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md h-80"></div>
        </div>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <DataAnalysis />
      <Benefits />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
} 