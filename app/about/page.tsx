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
  Star
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
        backgroundColor: 'rgba(0, 123, 255, 0.4)',
        borderColor: 'rgba(0, 123, 255, 1)',
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
        data: [65, 25, 8, 2],
        backgroundColor: [
          'rgba(40, 167, 69, 0.8)',
          'rgba(0, 123, 255, 0.8)',
          'rgba(255, 193, 7, 0.8)',
          'rgba(220, 53, 69, 0.8)',
        ],
        borderColor: [
          'rgba(40, 167, 69, 1)',
          'rgba(0, 123, 255, 1)',
          'rgba(255, 193, 7, 1)',
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
        backgroundColor: 'rgba(50, 205, 50, 0.6)',
        borderColor: 'rgba(50, 205, 50, 0.8)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  // Key metrics
  const metrics = [
    { icon: <Users className="h-10 w-10 text-primary" />, value: '5,000+', label: 'Happy Clients' },
    { icon: <Building className="h-10 w-10 text-primary" />, value: '12,000+', label: 'Properties Cleaned' },
    { icon: <Calendar className="h-10 w-10 text-primary" />, value: '8', label: 'Years of Excellence' },
    { icon: <Star className="h-10 w-10 text-primary" />, value: '4.9', label: 'Average Rating' },
  ];

  // Team members
  const teamMembers = [
    { name: 'Karla Figueroa Zuniga', role: 'Founder & CEO', image: '/images/about-image.jpg' },
    { name: 'Michael Rodriguez', role: 'Head of Operations', image: '/images/about-image.jpg' },
    { name: 'Emily Chen', role: 'Client Relations Manager', image: '/images/about-image.jpg' },
    { name: 'David Thompson', role: 'Lead Cleaning Specialist', image: '/images/about-image.jpg' },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-light text-white py-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src="/images/about-image.jpg"
              alt="Karla Figueroa Zuniga - Ocean Breeze Cleaning"
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
              className="inline-block text-accent text-lg md:text-xl font-medium uppercase tracking-wider mb-3"
            >
              About Our Services
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              <span className="text-white drop-shadow-lg">Ocean Breeze Cleaning</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">by Karla Figueroa Zuniga</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "180px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-accent mx-auto mb-6"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto leading-relaxed"
            >
              A personalized approach to creating healthier living and working environments through quality cleaning services.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-w-4 aspect-h-3 w-full h-full">
                <Image 
                  src="/images/about-image.jpg" 
                  alt="Karla Figueroa Zuniga"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">My Story</h2>
              <p className="text-lg text-neutral-DEFAULT mb-6">
                Founded in 2015, Ocean Breeze Cleaning began with my passion for creating clean, healthy living spaces. I'm Karla Figueroa Zuniga, and I started this business with a simple mission: to provide cleaning services that go beyond appearance and truly contribute to healthier environments.
              </p>
              <p className="text-lg text-neutral-DEFAULT mb-6">
                With a background in environmental health and a dedication to excellence, I recognized that traditional cleaning methods often fell short in addressing the microscopic threats that impact our health daily.
              </p>
              <p className="text-lg text-neutral-DEFAULT mb-6">
                Today, my team and I combine scientific knowledge with industry-leading practices to deliver cleaning services that not only make spaces shine but significantly reduce pathogens, allergens, and environmental toxins.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Award className="h-12 w-12 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-dark">Personalized Service</h3>
                  <p className="text-neutral-DEFAULT">I personally oversee every project to ensure the highest quality standards.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Key Metrics Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block text-accent text-sm uppercase tracking-wider font-medium mb-2"
            >
              Measuring Our Success
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Our Impact By The <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Numbers</span>
            </h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "120px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-primary/60 mx-auto mb-5"
            />
            <p className="text-lg text-neutral-DEFAULT max-w-3xl mx-auto">
              Over the years, we've made a significant impact in homes and businesses across the region.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  {metric.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{metric.value}</h3>
                <p className="text-neutral-DEFAULT">{metric.label}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">Our Growth Journey</h3>
              <div className="h-64">
                <Line
                  data={growthData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    scales: {
                      y: {
                        beginAtZero: false,
                        title: {
                          display: true,
                          text: 'Growth Index (2018 = 100)',
                        },
                      },
                    },
                  }}
                />
              </div>
              <p className="mt-4 text-neutral-DEFAULT text-sm">
                Consistent growth since our founding, with accelerated expansion in recent years as demand for health-focused cleaning has increased.
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">Customer Satisfaction</h3>
              <div className="h-64">
                <Doughnut
                  data={satisfactionData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'right',
                      },
                    },
                    cutout: '60%',
                  }}
                />
              </div>
              <p className="mt-4 text-neutral-DEFAULT text-sm">
                90% of our clients report being satisfied or highly satisfied with our services, with less than 2% expressing any dissatisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
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
              className="inline-block text-accent text-sm uppercase tracking-wider font-medium mb-2"
            >
              Guiding Principles
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Our <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Core Values</span>
            </h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "120px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-primary/60 mx-auto mb-5"
            />
            <p className="text-lg text-neutral-DEFAULT max-w-3xl mx-auto">
              The principles that guide every decision we make and every service we provide.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-neutral-dark">Scientific Excellence</h3>
              <p className="text-neutral-DEFAULT mb-6">
                We approach cleaning as a science, not just a service. All our methods are research-backed and continually refined based on the latest findings.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Evidence-based cleaning protocols</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Regular staff training on new techniques</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-secondary"
            >
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-neutral-dark">Environmental Responsibility</h3>
              <p className="text-neutral-DEFAULT mb-6">
                We believe clean spaces shouldn't come at the cost of a clean planet. Our practices minimize environmental impact while maximizing effectiveness.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Eco-friendly, non-toxic cleaning solutions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mt-0.5 mr-2 flex-shrink-0" />
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
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent"
            >
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-neutral-dark">Reliability & Integrity</h3>
              <p className="text-neutral-DEFAULT mb-6">
                We stand behind our work with a satisfaction guarantee and believe in transparent, honest practices in every interaction.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span>100% satisfaction guarantee</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span>Transparent pricing and policies</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Environmental Impact */}
      <section className="py-16 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">Our Environmental Commitment</h2>
              <p className="text-lg text-neutral-DEFAULT mb-6">
                At Ocean Breeze Cleaning, we believe that effective cleaning shouldn't harm the planet. We're committed to sustainable practices that reduce our environmental footprint while delivering exceptional results.
              </p>
              <p className="text-lg text-neutral-DEFAULT mb-6">
                From the products we use to the methods we employ, environmental sustainability is a core consideration in all our operations.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h3 className="font-semibold text-primary mb-2">2023 Green Cleaning Award Winner</h3>
                <p className="text-neutral-DEFAULT text-sm">
                  Recognized for our commitment to environmentally sustainable cleaning practices and innovation in green cleaning technology.
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
              <h3 className="text-xl font-semibold mb-4 text-secondary">Environmental Impact Metrics</h3>
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
                Our commitment to sustainability is reflected in our operational metrics, with significant achievements in reducing chemical usage and incorporating green products.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Our Team Section */}
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
              className="inline-block text-accent text-sm uppercase tracking-wider font-medium mb-2"
            >
              The People Behind Our Success
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Meet Our <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Team</span>
            </h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "120px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-primary/60 mx-auto mb-5"
            />
            <p className="text-lg text-neutral-DEFAULT max-w-3xl mx-auto">
              Working alongside me to deliver exceptional cleaning services that prioritize your health and wellbeing.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-64 relative">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-dark">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
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