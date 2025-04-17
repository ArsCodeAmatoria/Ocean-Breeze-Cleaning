import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Wind, Baby, Heart, Sparkles, Bug, Droplets, Flower, Brain, Zap } from 'lucide-react';
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
  RadialLinearScale,
} from 'chart.js';
import { Bar, Doughnut, Radar } from 'react-chartjs-2';
import Link from 'next/link';

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
  LineElement,
  RadialLinearScale
);

const benefitsData = [
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: 'Reduced Infection Risk',
    description: 'My thorough cleaning removes pathogens that cause infections, reducing the risk of illness by up to 65%.',
  },
  {
    icon: <Wind className="h-10 w-10 text-cyan-500" />,
    title: 'Improved Air Quality',
    description: 'I eliminate allergens and pollutants, making breathing easier for everyone in your home or workspace.',
  },
  {
    icon: <Flower className="h-10 w-10 text-teal-500" />,
    title: 'Aromatherapy Benefits',
    description: 'I use essential oils in my cleaning process that provide therapeutic benefits including stress reduction and improved mood.',
    featured: true,
  },
  {
    icon: <Baby className="h-10 w-10 text-blue-600" />,
    title: 'Safer for Children',
    description: 'Children are more vulnerable to germs. My cleaning protocols create safer environments for developing immune systems.',
  },
  {
    icon: <Heart className="h-10 w-10 text-cyan-500" />,
    title: 'Better Overall Health',
    description: 'Studies show properly cleaned spaces lead to fewer sick days, better sleep, and improved mental wellbeing.',
  },
  {
    icon: <Droplets className="h-10 w-10 text-teal-500" />,
    title: 'Therapeutic Scents',
    description: 'The natural essential oils I use provide lasting pleasant aromas that boost productivity and promote relaxation.',
  },
  {
    icon: <Sparkles className="h-10 w-10 text-blue-600" />,
    title: 'Longer-lasting Surfaces',
    description: 'My specialized cleaning methods preserve the integrity of surfaces and furniture, extending their lifespan.',
  },
  {
    icon: <Bug className="h-10 w-10 text-cyan-500" />,
    title: 'Virus Prevention',
    description: 'I use professional-grade protocols that effectively eliminate viruses, including coronavirus, on high-touch surfaces.',
  },
];

// Aromatherapy essential oil data
const essentialOilBenefits = [
  { 
    name: 'Lavender', 
    color: '#9678D3',
    benefits: ['Stress reduction', 'Better sleep', 'Antimicrobial'],
    description: 'Calming properties that reduce anxiety while also having natural antimicrobial properties.'
  },
  { 
    name: 'Eucalyptus', 
    color: '#79C09E',
    benefits: ['Respiratory health', 'Sinus clearing', 'Focus improvement'],
    description: 'Clears airways and improves focus while providing powerful germ-fighting properties.'
  },
  { 
    name: 'Lemon', 
    color: '#F9DA87',
    benefits: ['Mood elevation', 'Degreasing', 'Disinfection'],
    description: 'Natural degreaser and disinfectant that leaves spaces smelling fresh and uplifting.'
  },
  { 
    name: 'Tea Tree', 
    color: '#6AB9CA',
    benefits: ['Antimicrobial', 'Antifungal', 'Air purification'],
    description: 'Powerful antimicrobial that helps fight mold, mildew, and various bacteria.'
  },
  { 
    name: 'Peppermint', 
    color: '#A2D5C8',
    benefits: ['Energy boosting', 'Focus enhancement', 'Pest deterrent'],
    description: 'Invigorating scent that improves energy while naturally repelling pests.'
  }
];

// Mental wellbeing impact data
const mentalWellbeingData = {
  labels: ['Stress Reduction', 'Mood Improvement', 'Sleep Quality', 'Focus & Productivity', 'Anxiety Reduction'],
  datasets: [
    {
      label: 'Traditional Cleaning',
      data: [30, 35, 25, 40, 20],
      backgroundColor: 'rgba(107, 114, 128, 0.5)',
      borderColor: 'rgba(107, 114, 128, 1)',
      borderWidth: 1,
    },
    {
      label: 'Aromatherapy-Enhanced Cleaning',
      data: [70, 75, 80, 65, 68],
      backgroundColor: 'rgba(20, 184, 166, 0.5)',
      borderColor: 'rgba(20, 184, 166, 1)',
      borderWidth: 1,
    },
  ],
};

// Antimicrobial effectiveness data
const antimicrobialData = {
  labels: ['E. coli', 'Staph', 'Mold', 'Airborne Bacteria', 'Surface Viruses'],
  datasets: [
    {
      label: 'Effectiveness (%)',
      data: [82, 90, 75, 65, 78],
      backgroundColor: [
        'rgba(59, 130, 246, 0.7)',
        'rgba(6, 182, 212, 0.7)',
        'rgba(20, 184, 166, 0.7)',
        'rgba(16, 185, 129, 0.7)',
        'rgba(139, 92, 246, 0.7)',
      ],
      borderColor: [
        'rgba(59, 130, 246, 1)',
        'rgba(6, 182, 212, 1)',
        'rgba(20, 184, 166, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(139, 92, 246, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

// Aroma lasting effects data
const aromaLastingEffectsData = {
  labels: ['Conventional Products', 'Generic Essential Oils', 'Premium Essential Oils (My Service)'],
  datasets: [
    {
      label: 'Positive Aroma Duration (Hours)',
      data: [2, 6, 24],
      backgroundColor: [
        'rgba(156, 163, 175, 0.7)',
        'rgba(147, 197, 253, 0.7)',
        'rgba(94, 234, 212, 0.7)',
      ],
      borderColor: [
        'rgba(156, 163, 175, 1)',
        'rgba(147, 197, 253, 1)',
        'rgba(94, 234, 212, 1)',
      ],
      borderWidth: 1,
      borderRadius: 6,
    },
  ],
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Benefits = () => {
  const [activeOilIndex, setActiveOilIndex] = useState(0);
  
  // Radar chart data for the selected essential oil
  const selectedOilRadarData = {
    labels: ['Antimicrobial', 'Mood Enhancement', 'Air Purification', 'Scent Longevity', 'Health Benefits'],
    datasets: [
      {
        label: essentialOilBenefits[activeOilIndex].name,
        data: [
          activeOilIndex === 3 ? 95 : activeOilIndex === 2 ? 88 : activeOilIndex === 0 ? 75 : activeOilIndex === 1 ? 70 : 65,
          activeOilIndex === 0 ? 90 : activeOilIndex === 2 ? 85 : activeOilIndex === 4 ? 80 : 65,
          activeOilIndex === 1 ? 90 : activeOilIndex === 2 ? 85 : activeOilIndex === 3 ? 80 : 60,
          activeOilIndex === 2 ? 88 : activeOilIndex === 0 ? 85 : activeOilIndex === 4 ? 80 : 70,
          activeOilIndex === 0 ? 92 : activeOilIndex === 1 ? 88 : activeOilIndex === 3 ? 85 : 75,
        ],
        backgroundColor: `${essentialOilBenefits[activeOilIndex].color}44`,
        borderColor: essentialOilBenefits[activeOilIndex].color,
        borderWidth: 2,
        pointBackgroundColor: essentialOilBenefits[activeOilIndex].color,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: essentialOilBenefits[activeOilIndex].color,
        pointLabelFontSize: 14,
      },
    ],
  };
  
  return (
    <section id="benefits" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
            Why Clean Matters
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Health Benefits of <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Professional Cleaning</span>
          </h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-cyan-500/60 mx-auto mb-5"
          />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover how my professional cleaning services with aromatherapy elements can transform your space into 
            a healthier and more rejuvenating environment.
          </p>
        </motion.div>

        {/* Featured Aromatherapy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 bg-gray-800 p-8 rounded-xl shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-900/20 to-blue-900/20 blur-md"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Flower className="h-24 w-24 text-teal-500" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-white mb-3">The Aromatherapy Difference</h3>
              <p className="text-gray-300 mb-4">
                I enhance my cleaning services with carefully selected essential oils that not only leave your space smelling 
                wonderful but provide genuine health benefits backed by research:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-teal-900/30 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                  </div>
                  <p className="ml-2 text-sm text-gray-300">Lavender for stress reduction and better sleep</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-teal-900/30 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                  </div>
                  <p className="ml-2 text-sm text-gray-300">Lemon for improved mood and energy</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-teal-900/30 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                  </div>
                  <p className="ml-2 text-sm text-gray-300">Eucalyptus for respiratory health and focus</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-teal-900/30 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                  </div>
                  <p className="ml-2 text-sm text-gray-300">Tea tree for natural antimicrobial properties</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Aromatherapy Deep Dive Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Aromatherapy & Cleaning Science</h3>
            <p className="text-blue-50">Discover how essential oils enhance the cleaning experience and provide lasting health benefits</p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Mental Wellbeing Impact */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
                  <Brain className="h-6 w-6 text-blue-400 mr-2" />
                  Mental Wellbeing Impact
                </h4>
                <div className="bg-gray-700 p-4 rounded-lg mb-4">
                  <div className="h-64">
                    <Bar 
                      data={mentalWellbeingData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: true,
                            max: 100,
                            title: {
                              display: true,
                              text: 'Improvement (%)',
                              color: '#e5e7eb'
                            },
                            ticks: {
                              color: '#e5e7eb'
                            },
                            grid: {
                              color: 'rgba(255, 255, 255, 0.1)'
                            }
                          },
                          x: {
                            ticks: {
                              color: '#e5e7eb'
                            },
                            grid: {
                              color: 'rgba(255, 255, 255, 0.1)'
                            }
                          }
                        },
                        plugins: {
                          legend: {
                            position: 'bottom',
                            labels: {
                              usePointStyle: true,
                              padding: 15,
                              boxWidth: 10,
                              color: '#e5e7eb'
                            }
                          }
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="text-sm text-gray-300 p-3 bg-blue-900/20 rounded-lg border-l-3 border-blue-500">
                  <p className="font-medium text-blue-400 mb-1">Did you know?</p>
                  <p>Studies have shown that certain essential oils can reduce anxiety by up to 65% and improve cognitive function by up to 30%, creating a more productive and comfortable environment.</p>
                </div>
              </div>

              {/* Antimicrobial Effectiveness */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
                  <Shield className="h-6 w-6 text-cyan-400 mr-2" />
                  Antimicrobial Properties
                </h4>
                <div className="bg-gray-700 p-4 rounded-lg mb-4">
                  <div className="h-64 flex items-center justify-center">
                    <Doughnut 
                      data={antimicrobialData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'right',
                            labels: {
                              usePointStyle: true,
                              padding: 15,
                              boxWidth: 10,
                              color: '#e5e7eb'
                            }
                          },
                          tooltip: {
                            callbacks: {
                              label: function(context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                return `${label}: ${value}% effective`;
                              }
                            }
                          }
                        },
                        cutout: '60%'
                      }}
                    />
                  </div>
                </div>
                <div className="text-sm text-gray-300 p-3 bg-cyan-900/20 rounded-lg border-l-3 border-cyan-500">
                  <p className="font-medium text-cyan-400 mb-1">Scientific fact:</p>
                  <p>Many essential oils have been clinically proven to have powerful antimicrobial properties, with some oils like tea tree being as effective as common chemical disinfectants without the harmful effects.</p>
                </div>
              </div>
            </div>

            {/* Explore Essential Oils Section */}
            <div className="mt-10 mb-6">
              <h4 className="text-xl font-semibold mb-6 text-white text-center">Explore Essential Oil Benefits</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex space-x-3 mb-6 overflow-x-auto py-2 scrollbar-hide">
                    {essentialOilBenefits.map((oil, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveOilIndex(index)}
                        className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
                          index === activeOilIndex 
                            ? `bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md`
                            : `bg-gray-700 text-gray-300 border border-gray-600 hover:border-cyan-700`
                        }`}
                      >
                        {oil.name}
                      </button>
                    ))}
                  </div>
                  
                  <motion.div
                    key={activeOilIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-700 p-5 rounded-xl shadow-sm border border-gray-600"
                  >
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-full mr-4 flex items-center justify-center" 
                        style={{backgroundColor: `${essentialOilBenefits[activeOilIndex].color}22`}}
                      >
                        <div 
                          className="w-8 h-8 rounded-full" 
                          style={{backgroundColor: essentialOilBenefits[activeOilIndex].color}}
                        ></div>
                      </div>
                      <h5 className="text-xl font-semibold text-white">{essentialOilBenefits[activeOilIndex].name}</h5>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{essentialOilBenefits[activeOilIndex].description}</p>
                    
                    <div className="grid grid-cols-1 gap-2">
                      {essentialOilBenefits[activeOilIndex].benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded-full mr-2"
                            style={{backgroundColor: essentialOilBenefits[activeOilIndex].color}}
                          ></div>
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="h-80">
                    <Radar
                      data={selectedOilRadarData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                          r: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                              stepSize: 20,
                              showLabelBackdrop: false,
                              color: '#9ca3af'
                            },
                            pointLabels: {
                              font: {
                                size: 12
                              },
                              color: '#e5e7eb'
                            },
                            grid: {
                              color: 'rgba(255, 255, 255, 0.1)'
                            },
                            angleLines: {
                              color: 'rgba(255, 255, 255, 0.2)'
                            }
                          }
                        },
                        plugins: {
                          legend: {
                            display: false
                          }
                        },
                        elements: {
                          line: {
                            borderWidth: 2
                          },
                          point: {
                            radius: 4,
                            hoverRadius: 6
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Aroma Lasting Effects */}
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4 text-white flex items-center justify-center">
                <Zap className="h-6 w-6 text-teal-400 mr-2" />
                Aroma Lasting Effects
              </h4>
              <div className="bg-gray-700 p-4 rounded-lg mb-4">
                <div className="h-64">
                  <Bar 
                    data={aromaLastingEffectsData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      indexAxis: 'y',
                      scales: {
                        x: {
                          beginAtZero: true,
                          title: {
                            display: true,
                            text: 'Hours of Pleasant Aroma',
                            color: '#e5e7eb'
                          },
                          ticks: {
                            color: '#e5e7eb'
                          },
                          grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                          }
                        },
                        y: {
                          ticks: {
                            color: '#e5e7eb'
                          },
                          grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                          }
                        }
                      },
                      plugins: {
                        legend: {
                          display: false
                        }
                      }
                    }}
                  />
                </div>
              </div>
              <div className="text-sm text-gray-300 p-3 bg-teal-900/20 rounded-lg border-l-3 border-teal-500">
                <p className="font-medium text-teal-400 mb-1">Health insight:</p>
                <p>The longer-lasting aromas from premium essential oils continue to provide therapeutic benefits long after cleaning is complete. This creates an environment that supports mental wellbeing and physical health for a full day.</p>
              </div>
            </div>

            {/* Key Findings Box */}
            <div className="mt-10 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-cyan-900/50">
              <h4 className="text-lg font-semibold text-white mb-4">Key Aromatherapy Benefits in Cleaning</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="text-teal-400 font-bold text-xl mb-1">78%</div>
                  <p className="text-sm text-gray-300">Report better mood after aromatherapy cleaning vs. conventional cleaning</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="text-blue-400 font-bold text-xl mb-1">65%</div>
                  <p className="text-sm text-gray-300">Reduction in airborne bacteria when using antimicrobial essential oils</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="text-cyan-400 font-bold text-xl mb-1">85%</div>
                  <p className="text-sm text-gray-300">Of people prefer essential oil scents to synthetic chemical smells</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`bg-gray-800 p-6 rounded-xl shadow-md border-t-4 ${
                benefit.title.includes('Aroma') || benefit.title.includes('Scents') 
                  ? 'border-teal-500' 
                  : index % 2 === 0 
                    ? 'border-blue-600' 
                    : 'border-cyan-500'
              } hover:shadow-lg transition duration-300`}
            >
              <div className="flex items-center mb-4">
                {benefit.icon}
                <h3 className="text-xl font-semibold ml-3 text-white">{benefit.title}</h3>
              </div>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8 rounded-xl shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to Experience Aromatherapy-Enhanced Cleaning?</h3>
              <p className="text-blue-50">
                Schedule a free consultation to experience the difference my aromatherapy-enhanced cleaning can make.
              </p>
            </div>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-800 text-blue-400 font-medium rounded-md shadow-lg hover:shadow-xl transition"
              >
                Explore Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits; 