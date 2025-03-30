'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Calendar, 
  Check, 
  TrendingUp, 
  Building, 
  Globe,
  Clock,
  Star,
  Heart,
  Shield,
  BookOpen
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const AboutPage = () => {
  // Company growth chart data
  const growthData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Annual Revenue Growth',
        data: [100, 125, 140, 180, 220, 280],
        backgroundColor: 'rgba(0, 150, 199, 0.4)',
        borderColor: 'rgba(0, 150, 199, 1)',
        borderWidth: 2,
        tension: 0.3,
        fill: true,
        cubicInterpolationMode: 'monotone' as const,
        spanGaps: true,
      },
    ],
  };

  // Customer satisfaction chart data
  const satisfactionData = {
    labels: ['Highly Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'],
    datasets: [
      {
        data: [75, 20, 4, 1],
        backgroundColor: [
          'rgba(0, 150, 199, 0.8)',
          'rgba(72, 202, 228, 0.8)',
          'rgba(144, 224, 239, 0.8)',
          'rgba(220, 53, 69, 0.8)',
        ],
        borderColor: [
          'rgba(0, 150, 199, 1)',
          'rgba(72, 202, 228, 1)',
          'rgba(144, 224, 239, 1)',
          'rgba(220, 53, 69, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Environmental impact chart data
  const environmentalImpactData = {
    labels: ['Chemical Reduction', 'Water Saved', 'Green Products', 'Energy Efficient Methods', 'Waste Reduction'],
    datasets: [
      {
        label: 'Environmental Impact',
        data: [85, 70, 92, 78, 88],
        backgroundColor: 'rgba(72, 202, 228, 0.6)',
        borderColor: 'rgba(72, 202, 228, 0.8)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  // Key metrics
  const metrics = [
    { icon: <Users className="h-10 w-10 text-cyan-500" />, value: '500+', label: 'Happy Clients' },
    { icon: <Building className="h-10 w-10 text-cyan-500" />, value: '2,000+', label: 'Properties Cleaned' },
    { icon: <Calendar className="h-10 w-10 text-cyan-500" />, value: '8', label: 'Years of Excellence' },
    { icon: <Star className="h-10 w-10 text-cyan-500" />, value: '4.9', label: 'Average Rating' },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Skills and certifications
  const certifications = [
    { 
      icon: <Award className="h-10 w-10 text-cyan-500" />, 
      title: "Master Cleaner Certification", 
      description: "Certified professional in advanced cleaning techniques and protocols."
    },
    { 
      icon: <Shield className="h-10 w-10 text-cyan-500" />, 
      title: "Health & Safety Expert", 
      description: "Specialized training in health-focused cleaning approaches."
    },
    { 
      icon: <BookOpen className="h-10 w-10 text-cyan-500" />, 
      title: "Environmental Studies", 
      description: "Educational background in environmental health and sustainability."
    },
    { 
      icon: <Heart className="h-10 w-10 text-cyan-500" />, 
      title: "Customer Service Excellence", 
      description: "Recognized for outstanding customer care and satisfaction."
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src="/images/about-image.jpg"
              alt="Ocean Breeze Cleaning"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-white text-lg md:text-xl font-medium uppercase tracking-wider mb-3"
            >
              About Breezify
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              <span className="text-white drop-shadow-lg">Your Clean Space,</span>
              <br />
              <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">My Personal Commitment</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "180px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-white mx-auto mb-6"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto leading-relaxed"
            >
              A scientific approach to creating healthier living environments
              through personalized, quality cleaning services.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* My Story Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Background decoration */}
          <div className="absolute top-20 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 -z-10"></div>
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-cyan-50 rounded-full blur-3xl opacity-60 -z-10"></div>
          
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-center mb-14"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-cyan-600 text-sm uppercase tracking-wider font-medium mb-2"
            >
              My Cleaning Journey
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-dark mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Experience</span> 
              <span className="relative mx-2 inline-block">
                &
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-cyan-500"
                ></motion.span>
              </span>
              <span className="bg-gradient-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
          </motion.div>
          
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
            
            {/* Timeline Nodes */}
            <div className="relative z-10">
              {/* 2015 - Founding */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row items-center mb-20"
              >
                <div className="md:w-1/2 md:pr-16 md:text-right mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 md:border-l-0 md:border-r-4 border-blue-500">
                    <span className="text-blue-600 font-bold text-xl mb-2 block">2023</span>
                    <h3 className="text-2xl font-semibold text-neutral-dark mb-3">The Beginning</h3>
                    <p className="text-neutral-DEFAULT">
                      Founded Breezify with a passion for creating clean, healthy living spaces and a mission 
                      to provide services that go beyond appearance.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-blue-500 shadow-lg z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="w-6 h-6 rounded-full bg-blue-500"
                  />
                </div>
                
                <div className="md:w-1/2 md:pl-16 flex justify-start items-center">
                  <div className="bg-blue-50 rounded-full p-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                      className="w-16 h-16 relative"
                    >
                      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="fill-blue-500">
                        <path d="M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z M50,10 C27.9,10 10,27.9 10,50 C10,72.1 27.9,90 50,90 C72.1,90 90,72.1 90,50 C90,27.9 72.1,10 50,10 Z M50,20 C66.5,20 80,33.5 80,50 C80,66.5 66.5,80 50,80 C33.5,80 20,66.5 20,50 C20,33.5 33.5,20 50,20 Z M50,30 C38.9,30 30,38.9 30,50 C30,61.1 38.9,70 50,70 C61.1,70 70,61.1 70,50 C70,38.9 61.1,30 50,30 Z M50,40 C55.5,40 60,44.5 60,50 C60,55.5 55.5,60 50,60 C44.5,60 40,55.5 40,50 C40,44.5 44.5,40 50,40 Z" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Mission & Vision */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row-reverse items-center mb-20"
              >
                <div className="md:w-1/2 md:pl-16 md:text-left mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 md:border-l-4 md:border-r-0 border-cyan-500">
                    <h3 className="text-2xl font-semibold text-neutral-dark mb-3">Mission & Vision</h3>
                    <p className="text-neutral-DEFAULT">
                      With a background in environmental health and a dedication to excellence, I recognized that 
                      traditional cleaning methods often fell short in addressing the microscopic threats that 
                      impact our health daily.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-cyan-500 shadow-lg z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="w-6 h-6 rounded-full bg-cyan-500"
                  />
                </div>
                
                <div className="md:w-1/2 md:pr-16 flex justify-end items-center">
                  <div className="bg-cyan-50 rounded-full p-2">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 flex items-center justify-center"
                    >
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-cyan-500">
                        <path d="M12,2 C17.5228,2 22,6.47715 22,12 C22,17.5228 17.5228,22 12,22 C6.47715,22 2,17.5228 2,12 C2,6.47715 6.47715,2 12,2 Z M12,4 C10.3431,4 9,5.34315 9,7 C9,8.65685 10.3431,10 12,10 C13.6569,10 15,8.65685 15,7 C15,5.34315 13.6569,4 12,4 Z M12,14 C16.4183,14 20,17.5817 20,22 L4,22 C4,17.5817 7.58172,14 12,14 Z M12,16 C9.87827,16 8.06452,16.8724 6.85285,18.2917 C6.24306,19.0063 6.0603,19.9357 6.32698,20.8022 L6.38729,21 L17.6127,21 C17.8746,21 18.0916,20.8325 18.1715,20.5876 C18.2732,20.2794 18.1867,19.947 17.9474,19.7112 C16.7348,18.5143 14.9209,17.7451 12.9328,17.5355 L12.6584,17.5092 L12,17.5 C11.6652,17.5 11.3363,17.5189 11.0144,17.555 L10.533,17.6158 L10,17.7 L9.8,17.73 L9.067,17.9921 L8.89189,18.0609 L8.7,18.14 L8.527,18.2266 L8.3,18.33 L8.18,18.4 L8,18.5 L7.82,18.61 L7.3,19 C7.18,19.11 7.07,19.22 6.96,19.34 L6.74817,19.6034 L6.6,19.8 L6.47,20 L6.33016,20.3216 L6.32698,20.3305 L6.32698,20.8022 L6.38729,21 L17.6127,21 Z"></path>
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Today */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-16 md:text-right mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 md:border-l-0 md:border-r-4 border-teal-500">
                    <span className="text-teal-600 font-bold text-xl mb-2 block">Today</span>
                    <h3 className="text-2xl font-semibold text-neutral-dark mb-3">Aromatherapy & Innovation</h3>
                    <p className="text-neutral-DEFAULT">
                      Today, I continue to evolve my cleaning practices by incorporating aromatherapy and 
                      staying up-to-date with the latest research, ensuring that every home I clean becomes
                      a healthier, more rejuvenating space.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-teal-500 shadow-lg z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="w-6 h-6 rounded-full bg-teal-500"
                  />
                </div>
                
                <div className="md:w-1/2 md:pl-16 flex justify-start items-center">
                  <div className="bg-teal-50 rounded-full p-2">
                    <motion.div
                      animate={{ 
                        boxShadow: ['0px 0px 0px rgba(20, 184, 166, 0)', '0px 0px 20px rgba(20, 184, 166, 0.5)', '0px 0px 0px rgba(20, 184, 166, 0)'] 
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                      className="w-16 h-16 flex items-center justify-center rounded-full"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-teal-500" viewBox="0 0 24 24">
                        <path d="M12,2 C14.7614,2 17,4.23858 17,7 C17,9.76142 14.7614,12 12,12 C9.23858,12 7,9.76142 7,7 C7,4.23858 9.23858,2 12,2 Z M12,4 C10.3431,4 9,5.34315 9,7 C9,8.65685 10.3431,10 12,10 C13.6569,10 15,8.65685 15,7 C15,5.34315 13.6569,4 12,4 Z M12,14 C16.4183,14 20,17.5817 20,22 L4,22 C4,17.5817 7.58172,14 12,14 Z M12,16 C9.87827,16 8.06452,16.8724 6.85285,18.2917 C6.24306,19.0063 6.0603,19.9357 6.32698,20.8022 L6.38729,21 L17.6127,21 C17.8746,21 18.0916,20.8325 18.1715,20.5876 C18.2732,20.2794 18.1867,19.947 17.9474,19.7112 C16.7348,18.5143 14.9209,17.7451 12.9328,17.5355 L12.6584,17.5092 L12,17.5 C11.6652,17.5 11.3363,17.5189 11.0144,17.555 L10.533,17.6158 L10,17.7 L9.8,17.73 L9.067,17.9921 L8.89189,18.0609 L8.7,18.14 L8.527,18.2266 L8.3,18.33 L8.18,18.4 L8,18.5 L7.82,18.61 L7.3,19 C7.18,19.11 7.07,19.22 6.96,19.34 L6.74817,19.6034 L6.6,19.8 L6.47,20 L6.33016,20.3216 L6.32698,20.3305 L6.32698,20.8022 L6.38729,21 L17.6127,21 Z"></path>
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* My Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block text-cyan-600 text-sm uppercase tracking-wider font-medium mb-2"
            >
              Guiding Principles
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "120px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-cyan-500/60 mx-auto mb-5"
            />
            <p className="text-lg text-neutral-DEFAULT max-w-3xl mx-auto">
              The principles that guide every decision I make and every service I provide.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600 hover:shadow-lg transition duration-300"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-neutral-dark">Scientific Excellence</h3>
              <p className="text-neutral-DEFAULT mb-6">
                I approach cleaning as a science, not just a service. All my methods are research-backed and continually refined based on the latest findings.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Evidence-based cleaning protocols</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Ongoing education in new techniques</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-cyan-500 hover:shadow-lg transition duration-300"
            >
              <div className="bg-cyan-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-neutral-dark">Environmental Responsibility</h3>
              <p className="text-neutral-DEFAULT mb-6">
                I believe clean spaces shouldn't come at the cost of a clean planet. My practices minimize environmental impact while maximizing effectiveness.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Eco-friendly, non-toxic cleaning solutions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Water conservation practices</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-teal-500 hover:shadow-lg transition duration-300"
            >
              <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-neutral-dark">Reliability & Integrity</h3>
              <p className="text-neutral-DEFAULT mb-6">
                I stand behind my work with a satisfaction guarantee and believe in transparent, honest practices in every interaction.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>100% satisfaction guarantee</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Transparent pricing and policies</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Environmental Impact */}
      <section className="py-16 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">My Environmental Commitment</h2>
              <p className="text-lg text-neutral-DEFAULT mb-6">
                At Breezify, I believe that effective cleaning shouldn't harm the planet. I'm committed to sustainable practices that reduce environmental footprint while delivering exceptional results.
              </p>
              <p className="text-lg text-neutral-DEFAULT mb-6">
                From the products I use to the methods I employ, environmental sustainability is a core consideration in all my operations.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6 border-l-4 border-cyan-500">
                <h3 className="font-semibold text-blue-600 mb-2">My Green Cleaning Promise</h3>
                <p className="text-neutral-DEFAULT text-sm">
                  I'm committed to using only eco-friendly cleaning methods and sustainable practices as I build my business, with the aim of setting new standards for environmentally responsible cleaning services.
                </p>
              </div>
            </div>
            
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-500">Environmental Impact Metrics</h3>
              <div className="h-80">
                <Bar
                  data={environmentalImpactData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    scales: {
                      x: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                          display: true,
                          text: 'Percentage (%)',
                        },
                      },
                    },
                  }}
                />
              </div>
              <p className="mt-4 text-neutral-DEFAULT text-sm">
                My commitment to sustainability is reflected in operational metrics, with significant achievements in reducing chemical usage and incorporating green products.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Skills & Certifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block text-cyan-600 text-sm uppercase tracking-wider font-medium mb-2"
            >
              Expertise & Credentials
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Professional Background</span>
            </h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "120px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-cyan-500/60 mx-auto mb-5"
            />
            <p className="text-lg text-neutral-DEFAULT max-w-3xl mx-auto">
              The qualifications and expertise I bring to every cleaning project.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-2 text-center">{cert.title}</h3>
                <p className="text-neutral-DEFAULT text-center">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default AboutPage; 