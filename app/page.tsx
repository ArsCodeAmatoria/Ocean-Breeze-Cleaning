'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRightCircle } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import dynamic from 'next/dynamic';

// Dynamically import the 3D components to avoid SSR issues
const MicrobeScene = dynamic(() => import('../components/3d/MicrobeScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse text-white text-xl">Loading 3D Scene...</div>
    </div>
  )
});

export default function Home() {
  return (
    <main className="overflow-hidden bg-neutral-dark">
      <Navbar />
      
      <div className="horizontal-scroll-container">
        {/* Section 1: Hero with 3D viruses */}
        <section className="horizontal-section flex flex-col justify-center">
          <div className="relative w-full h-full">
            {/* 3D Scene as background */}
            <div className="absolute inset-0 z-0">
              <MicrobeScene density={20} autoRotate={true} showControls={false} />
            </div>
            
            {/* Overlay content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                  <span className="gradient-text">Clean Spaces.</span>
                  <br />
                  <span className="text-white">Healthier Lives.</span>
                </h1>
                <p className="text-xl text-neutral mb-8 max-w-3xl mx-auto">
                  Ocean Breeze Cleaning uses advanced cleaning techniques and health-focused 
                  approaches to eliminate pathogens and create safer environments for your family.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="#microbes"
                    className="px-8 py-3 rounded-md text-lg font-medium bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg transition duration-300"
                  >
                    Explore the Science
                  </Link>
                  <Link
                    href="#contact"
                    className="px-8 py-3 rounded-md text-lg font-medium bg-neutral-dark border border-blue-600 text-white hover:bg-blue-600/10 transition duration-300"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
              
              {/* Scroll indicator */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center">
                <p className="mb-2 text-sm">Scroll Right</p>
                <ArrowRightCircle className="h-8 w-8 animate-pulse" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 2: Common Microbes */}
        <section id="microbes" className="horizontal-section bg-gradient-to-br from-neutral-dark to-zinc-900">
          <div className="h-full w-full flex flex-col lg:flex-row">
            {/* Left content */}
            <div className="flex-1 flex flex-col justify-center items-center lg:items-start p-8 lg:p-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                The Hidden Threats
              </h2>
              <p className="text-xl text-neutral mb-10 max-w-2xl">
                Your home harbors millions of microorganisms that can impact your health. 
                From viruses to bacteria, these invisible threats require professional 
                cleaning techniques to effectively eliminate.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                {/* Virus cards */}
                <div className="bg-neutral-dark/50 backdrop-blur-sm border border-blue-600/20 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-400">Viruses</h3>
                  <ul className="space-y-3 text-neutral">
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span>Coronavirus (lives up to 3 days on surfaces)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                      <span>Rhinovirus (common cold)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span>Influenza (survives 24-48 hours)</span>
                    </li>
                  </ul>
                </div>
                
                {/* Bacteria cards */}
                <div className="bg-neutral-dark/50 backdrop-blur-sm border border-blue-600/20 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-cyan-400">Bacteria</h3>
                  <ul className="space-y-3 text-neutral">
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span>E. coli (found on 90% of bathroom surfaces)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span>Streptococcus (causes strep throat)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span>Salmonella (lives up to 4 hours on surfaces)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Right content - 3D model */}
            <div className="flex-1 relative">
              <div className="absolute inset-0">
                <MicrobeScene 
                  density={6} 
                  interactive={true} 
                  autoRotate={false} 
                  showControls={true}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 3: Cleaning Effect */}
        <section className="horizontal-section bg-gradient-to-br from-zinc-900 to-blue-900/40">
          <div className="h-full w-full flex flex-col lg:flex-row">
            {/* Left - 3D cleaning effect */}
            <div className="flex-1 relative">
              <div className="absolute inset-0">
                <MicrobeScene 
                  density={15} 
                  cleaningEffect={true} 
                  showControls={false}
                />
              </div>
            </div>
            
            {/* Right content */}
            <div className="flex-1 flex flex-col justify-center items-center lg:items-start p-8 lg:p-16 z-10 backdrop-blur-sm bg-black/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                The Ocean Breeze Difference
              </h2>
              <p className="text-xl text-neutral mb-10 max-w-2xl">
                Our scientifically-proven cleaning methods don't just mask dirt – they eliminate 
                harmful pathogens at the source. Using advanced techniques and health-focused 
                approaches, we create spaces that are truly clean and healthy.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <div className="bg-neutral-dark/50 backdrop-blur-sm border border-blue-600/20 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold mb-3 gradient-text">99.9% Effective</h3>
                  <p className="text-neutral">
                    Our cleaning techniques eliminate up to 99.9% of viruses and bacteria, 
                    significantly reducing the risk of illness in your home or office.
                  </p>
                </div>
                
                <div className="bg-neutral-dark/50 backdrop-blur-sm border border-blue-600/20 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold mb-3 gradient-text">Health-Focused</h3>
                  <p className="text-neutral">
                    We use health-safe products and techniques that are effective against 
                    pathogens while being gentle on your family and the environment.
                  </p>
                </div>
              </div>
              
              <Link
                href="#contact"
                className="mt-10 px-8 py-3 rounded-md text-lg font-medium bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg transition duration-300"
              >
                Experience the Difference
              </Link>
            </div>
          </div>
        </section>
        
        {/* Section 4: Data & Benefits */}
        <section className="horizontal-section bg-gradient-to-br from-blue-900/40 to-zinc-900">
          <div className="h-full w-full flex flex-col justify-center items-center p-8 lg:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 gradient-text text-center">
              The Science Behind Clean Spaces
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
              <div className="bg-neutral-dark/50 backdrop-blur-sm border border-blue-600/20 rounded-xl p-6">
                <div className="text-4xl font-bold mb-3 gradient-text">70%</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Reduced Sick Days</h3>
                <p className="text-neutral">
                  Regular professional cleaning can reduce illness-related absences by up to 70% according to studies.
                </p>
              </div>
              
              <div className="bg-neutral-dark/50 backdrop-blur-sm border border-blue-600/20 rounded-xl p-6">
                <div className="text-4xl font-bold mb-3 gradient-text">80%</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Improved Air Quality</h3>
                <p className="text-neutral">
                  Professional cleaning removes allergens and particles that lower indoor air quality by up to 80%.
                </p>
              </div>
              
              <div className="bg-neutral-dark/50 backdrop-blur-sm border border-blue-600/20 rounded-xl p-6">
                <div className="text-4xl font-bold mb-3 gradient-text">65%</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Lower Stress Levels</h3>
                <p className="text-neutral">
                  Studies show that clean environments can reduce stress and anxiety by up to 65%.
                </p>
              </div>
              
              <div className="bg-neutral-dark/50 backdrop-blur-sm border border-blue-600/20 rounded-xl p-6">
                <div className="text-4xl font-bold mb-3 gradient-text">5x</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Better Than DIY Cleaning</h3>
                <p className="text-neutral">
                  Professional cleaning removes up to 5 times more contaminants than typical household cleaning.
                </p>
              </div>
              
              <div className="bg-neutral-dark/50 backdrop-blur-sm border border-blue-600/20 rounded-xl p-6">
                <div className="text-4xl font-bold mb-3 gradient-text">99.9%</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Pathogen Elimination</h3>
                <p className="text-neutral">
                  Our specialized cleaning protocols kill 99.9% of common household pathogens.
                </p>
              </div>
              
              <div className="bg-neutral-dark/50 backdrop-blur-sm border border-blue-600/20 rounded-xl p-6">
                <div className="text-4xl font-bold mb-3 gradient-text">50%</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Reduced Allergies</h3>
                <p className="text-neutral">
                  Regular professional cleaning can reduce allergy symptoms by up to 50%.
                </p>
              </div>
            </div>
            
            <Link
              href="#contact"
              className="mt-12 px-8 py-3 rounded-md text-lg font-medium bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg transition duration-300"
            >
              Book Your Cleaning
            </Link>
          </div>
        </section>
        
        {/* Footer Section */}
        <section className="horizontal-section">
          <Footer />
        </section>
      </div>
    </main>
  );
} 