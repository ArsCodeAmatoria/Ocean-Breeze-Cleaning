import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  Filler,
} from 'chart.js';
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2';
import { Info, ArrowRight, ArrowLeft } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  Filler
);

// Custom tooltip style
ChartJS.defaults.plugins.tooltip.backgroundColor = 'rgba(3, 105, 161, 0.95)';
ChartJS.defaults.plugins.tooltip.titleFont = { weight: 'bold', size: 14 };
ChartJS.defaults.plugins.tooltip.padding = 12;
ChartJS.defaults.plugins.tooltip.cornerRadius = 8;
ChartJS.defaults.plugins.tooltip.bodySpacing = 6;
ChartJS.defaults.plugins.tooltip.bodyFont = { weight: 'normal', size: 13 };
ChartJS.defaults.plugins.tooltip.borderColor = 'rgba(56, 189, 248, 0.3)';
ChartJS.defaults.plugins.tooltip.borderWidth = 1;
ChartJS.defaults.plugins.tooltip.displayColors = true;
ChartJS.defaults.plugins.tooltip.boxPadding = 6;

const DataAnalysis = () => {
  // State for toggles and active data
  const [showBacteriaDetails, setShowBacteriaDetails] = useState(false);
  const [activeComparisonIndex, setActiveComparisonIndex] = useState(0);
  
  // Enhanced data with detailed information
  const cleaningFrequencyComparisons = [
    {
      title: "Weekly vs. Monthly Cleaning",
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        datasets: [
          {
            label: 'Bacteria Levels with Weekly Cleaning',
            data: [100, 42, 28, 15, 10, 5],
            borderColor: 'rgba(14, 165, 233, 1)',
            backgroundColor: 'rgba(14, 165, 233, 0.3)',
            borderWidth: 4,
            tension: 0.3,
            pointRadius: 7,
            pointHoverRadius: 10,
            pointBackgroundColor: '#0ea5e9',
            pointHoverBackgroundColor: '#0ea5e9',
            pointBorderColor: '#0284c7',
            pointBorderWidth: 3,
            pointHitRadius: 12,
            fill: true,
            cubicInterpolationMode: 'monotone' as const,
            spanGaps: true,
          },
          {
            label: 'Bacteria Levels with Monthly Cleaning',
            data: [100, 95, 90, 88, 86, 82],
            borderColor: 'rgba(239, 68, 68, 1)',
            backgroundColor: 'rgba(239, 68, 68, 0.3)',
            borderWidth: 4,
            tension: 0.3,
            pointRadius: 7,
            pointHoverRadius: 10,
            pointBackgroundColor: '#f87171',
            pointHoverBackgroundColor: '#f87171',
            pointBorderColor: '#dc2626',
            pointBorderWidth: 3,
            pointHitRadius: 12,
            fill: true,
            cubicInterpolationMode: 'monotone' as const,
            spanGaps: true,
          },
        ],
      },
      description: "Weekly cleaning leads to a 95% bacteria reduction after 6 weeks, whereas monthly cleaning only achieves an 18% reduction in the same period."
    },
    {
      title: "Professional vs. DIY Cleaning",
      data: {
        labels: ['Day 1', 'Day 3', 'Day 7', 'Day 14', 'Day 21', 'Day 30'],
        datasets: [
          {
            label: 'Bacteria Levels with My Professional Cleaning',
            data: [100, 20, 15, 12, 10, 8],
            borderColor: 'rgba(14, 165, 233, 1)',
            backgroundColor: 'rgba(14, 165, 233, 0.3)',
            borderWidth: 4,
            tension: 0.3,
            pointRadius: 7,
            pointHoverRadius: 10,
            pointBackgroundColor: '#0ea5e9',
            pointHoverBackgroundColor: '#0ea5e9',
            pointBorderColor: '#0284c7',
            pointBorderWidth: 3,
            pointHitRadius: 12,
            fill: true,
            cubicInterpolationMode: 'monotone' as const,
            spanGaps: true,
          },
          {
            label: 'Bacteria Levels with DIY Cleaning',
            data: [100, 60, 55, 58, 52, 50],
            borderColor: 'rgba(234, 179, 8, 1)',
            backgroundColor: 'rgba(234, 179, 8, 0.3)',
            borderWidth: 4,
            tension: 0.3,
            pointRadius: 7,
            pointHoverRadius: 10,
            pointBackgroundColor: '#facc15',
            pointHoverBackgroundColor: '#facc15',
            pointBorderColor: '#ca8a04',
            pointBorderWidth: 3,
            pointHitRadius: 12,
            fill: true,
            cubicInterpolationMode: 'monotone' as const,
            spanGaps: true,
          },
        ],
      },
      description: "My professional cleaning techniques and equipment remove up to 92% of bacteria initially and maintain low levels, while DIY methods typically achieve only a 50% reduction."
    },
  ];

  // Health impact data with enhanced visual appeal
  const healthImpactData = {
    labels: ['Allergy Symptoms', 'Respiratory Issues', 'Sleep Quality', 'Sick Days', 'Overall Well-being'],
    datasets: [
      {
        label: 'Improvement After Regular Cleaning (%)',
        data: [65, 58, 72, 45, 80],
        backgroundColor: [
          'rgba(25, 113, 194, 0.8)',
          'rgba(29, 78, 216, 0.8)',
          'rgba(56, 189, 248, 0.8)',
          'rgba(8, 145, 178, 0.8)',
          'rgba(6, 182, 212, 0.8)',
        ],
        borderColor: [
          'rgba(25, 113, 194, 1)',
          'rgba(29, 78, 216, 1)',
          'rgba(56, 189, 248, 1)',
          'rgba(8, 145, 178, 1)',
          'rgba(6, 182, 212, 1)',
        ],
        borderWidth: 2,
        borderRadius: 8,
        hoverBackgroundColor: [
          'rgba(25, 113, 194, 1)',
          'rgba(29, 78, 216, 1)',
          'rgba(56, 189, 248, 1)',
          'rgba(8, 145, 178, 1)',
          'rgba(6, 182, 212, 1)',
        ],
      },
    ],
  };

  // Enhanced common household germs data
  const commonGermsData = {
    labels: [
      'E. coli',
      'Staphylococcus',
      'Streptococcus',
      'Salmonella',
      'Listeria',
      'Other Bacteria',
    ],
    datasets: [
      {
        label: 'Percentage Reduction After My Professional Cleaning',
        data: [90, 85, 80, 92, 88, 75],
        backgroundColor: [
          'rgba(2, 132, 199, 0.8)',
          'rgba(14, 165, 233, 0.8)',
          'rgba(56, 189, 248, 0.8)',
          'rgba(103, 232, 249, 0.8)',
          'rgba(34, 211, 238, 0.8)',
          'rgba(8, 145, 178, 0.8)',
        ],
        borderColor: [
          'rgba(2, 132, 199, 1)',
          'rgba(14, 165, 233, 1)',
          'rgba(56, 189, 248, 1)',
          'rgba(103, 232, 249, 1)',
          'rgba(34, 211, 238, 1)',
          'rgba(8, 145, 178, 1)',
        ],
        borderWidth: 2,
        hoverOffset: 15,
      },
    ],
  };
  
  // Additional radar chart data for allergen reduction
  const allergenReductionData = {
    labels: [
      'Dust Mites',
      'Pet Dander',
      'Pollen',
      'Mold Spores',
      'Cockroach Allergens',
      'Dust Particles'
    ],
    datasets: [
      {
        label: 'Before Professional Cleaning',
        data: [90, 85, 80, 95, 75, 90],
        backgroundColor: 'rgba(220, 53, 69, 0.2)',
        borderColor: 'rgba(220, 53, 69, 0.8)',
        pointBackgroundColor: 'rgba(220, 53, 69, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(220, 53, 69, 1)',
        borderWidth: 2,
      },
      {
        label: 'After Professional Cleaning',
        data: [15, 20, 30, 10, 15, 20],
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderColor: 'rgba(0, 123, 255, 0.8)',
        pointBackgroundColor: 'rgba(0, 123, 255, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 2,
      }
    ]
  };

  // Enhanced tooltip callbacks
  const bacteriaTooltipCallback = {
    callbacks: {
      label: function(context: any) {
        const label = context.dataset.label || '';
        const value = context.parsed.y;
        return `${label}: ${value}% of initial bacteria level`;
      },
      afterLabel: function(context: any) {
        const weekNumber = parseInt(context.label.replace('Week ', ''));
        const isWeekly = context.datasetIndex === 0;
        
        if (isWeekly) {
          return `${100 - context.parsed.y}% reduction since Week 1`;
        } else {
          return `${100 - context.parsed.y}% reduction since Week 1`;
        }
      }
    }
  };
  
  const germsTooltipCallback = {
    callbacks: {
      label: function(context: any) {
        const label = context.label || '';
        const value = context.parsed;
        return `${label} reduction: ${value}%`;
      },
      afterLabel: function(context: any) {
        const germ = context.label;
        let info = '';
        
        switch(germ) {
          case 'E. coli':
            info = 'Common in kitchens and bathrooms';
            break;
          case 'Staphylococcus':
            info = 'Found on high-touch surfaces';
            break;
          case 'Streptococcus':
            info = 'Often on doorknobs and switches';
            break;
          case 'Salmonella':
            info = 'Kitchen counters and sinks';
            break;
          case 'Listeria':
            info = 'Refrigerator and food surfaces';
            break;
          default:
            info = 'Various household surfaces';
        }
        
        return info;
      }
    }
  };
  
  const healthTooltipCallback = {
    callbacks: {
      label: function(context: any) {
        const label = context.label || '';
        const value = context.parsed.y;
        return `${label} improvement: ${value}%`;
      },
      afterLabel: function(context: any) {
        const category = context.label;
        let info = '';
        
        switch(category) {
          case 'Allergy Symptoms':
            info = 'Reduced sneezing, coughing, eye irritation';
            break;
          case 'Respiratory Issues':
            info = 'Easier breathing, less congestion';
            break;
          case 'Sleep Quality':
            info = 'Deeper, more restful sleep';
            break;
          case 'Sick Days':
            info = 'Fewer illnesses and time off work';
            break;
          case 'Overall Well-being':
            info = 'Improved mood and energy levels';
            break;
        }
        
        return info;
      }
    }
  };

  return (
    <section id="data-analysis" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block text-cyan-400 text-sm uppercase tracking-wider font-medium mb-2"
          >
            Data-Driven Cleaning
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Science</span> Behind Clean Spaces
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            My approach is based on scientific research and data. I track bacterial reduction, 
            allergen levels, and health impacts to ensure your space is truly clean and healthy.
          </p>
        </motion.div>

        {/* Metrics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-cyan-900/20 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-cyan-300">92%</h3>
            </div>
            <p className="text-slate-300">Reduction in harmful bacteria after my professional cleaning service</p>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-cyan-500 hover:shadow-cyan-900/20 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-cyan-900/50 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-cyan-300">65%</h3>
            </div>
            <p className="text-slate-300">Improvement in allergy symptoms for families with regular cleaning</p>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-teal-500 hover:shadow-cyan-900/20 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-cyan-300">45%</h3>
            </div>
            <p className="text-slate-300">Fewer sick days reported by families who use my cleaning services</p>
          </div>
        </motion.div>

        {/* Bacteria Reduction Charts */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-xl shadow-lg overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-900/20 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-900/20 rounded-full translate-y-1/2 -translate-x-1/2 z-0"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <span className="text-cyan-400 text-sm uppercase tracking-wider font-medium">Data Comparison</span>
                  <h3 className="text-2xl font-semibold text-white mt-1">
                    {cleaningFrequencyComparisons[activeComparisonIndex].title}
                  </h3>
                </div>
                <div className="flex items-center space-x-2 mt-2 md:mt-0">
                  <button 
                    onClick={() => setActiveComparisonIndex(i => (i > 0 ? i - 1 : cleaningFrequencyComparisons.length - 1))}
                    className="flex items-center justify-center w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full transition duration-300"
                    aria-label="Previous comparison"
                  >
                    <ArrowLeft size={18} className="text-cyan-400" />
                  </button>
                  <span className="text-sm text-slate-300 font-medium">{activeComparisonIndex + 1}/{cleaningFrequencyComparisons.length}</span>
                  <button 
                    onClick={() => setActiveComparisonIndex(i => (i < cleaningFrequencyComparisons.length - 1 ? i + 1 : 0))}
                    className="flex items-center justify-center w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full transition duration-300"
                    aria-label="Next comparison"
                  >
                    <ArrowRight size={18} className="text-cyan-400" />
                  </button>
                  <button
                    onClick={() => setShowBacteriaDetails(!showBacteriaDetails)}
                    className="flex items-center ml-2 px-4 py-2 bg-blue-900/50 hover:bg-blue-800 text-cyan-300 rounded-md text-sm transition duration-300"
                  >
                    <Info size={16} className="mr-2" />
                    {showBacteriaDetails ? 'Hide Details' : 'Show Details'}
                  </button>
                </div>
              </div>
              
              {showBacteriaDetails && (
                <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 p-6 rounded-lg mb-6 text-sm shadow-inner">
                  <h4 className="font-semibold text-cyan-300 mb-3 text-lg">Why This Matters For Your Health:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mt-1 mr-2 h-4 w-4 rounded-full bg-blue-800 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        </div>
                        <span className="text-slate-300">Bacteria can double every 4-20 minutes in ideal conditions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 mr-2 h-4 w-4 rounded-full bg-blue-800 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        </div>
                        <span className="text-slate-300">A typical kitchen sponge can harbor up to 54 billion bacteria per cubic centimeter</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 mr-2 h-4 w-4 rounded-full bg-blue-800 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        </div>
                        <span className="text-slate-300">Bathroom surfaces can contain 500,000 bacteria per square inch</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mt-1 mr-2 h-4 w-4 rounded-full bg-cyan-800 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                        </div>
                        <span className="text-slate-300">Weekly cleaning disrupts bacteria reproduction cycles effectively</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 mr-2 h-4 w-4 rounded-full bg-cyan-800 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                        </div>
                        <span className="text-slate-300">Studies show regular cleaning reduces respiratory infections by up to 40%</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 mr-2 h-4 w-4 rounded-full bg-cyan-800 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                        </div>
                        <span className="text-slate-300">My cleaning service targets high-touch surfaces where germs collect most</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              
              <div className="h-80 bg-slate-100 dark:bg-slate-700 p-2 rounded-lg shadow-inner">
                <Line
                  data={cleaningFrequencyComparisons[activeComparisonIndex].data}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                      duration: 1000,
                      easing: 'easeOutQuart'
                    },
                    plugins: {
                      legend: {
                        position: 'top',
                        labels: {
                          usePointStyle: true,
                          boxWidth: 6,
                          padding: 20,
                          font: {
                            size: 12,
                            weight: 'bold'
                          },
                          color: '#1e293b'
                        }
                      },
                      tooltip: {
                        ...bacteriaTooltipCallback,
                        usePointStyle: true,
                        padding: 12,
                        boxWidth: 8,
                        backgroundColor: 'rgba(15, 23, 42, 0.95)'
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        title: {
                          display: true,
                          text: 'Bacteria Level (% of initial)',
                          padding: {top: 10, bottom: 10},
                          font: {
                            size: 12,
                            weight: 'bold'
                          },
                          color: '#334155'
                        },
                        grid: {
                          color: 'rgba(51, 65, 85, 0.15)'
                        },
                        ticks: {
                          color: '#334155',
                          font: {
                            weight: 'bold'
                          }
                        }
                      },
                      x: {
                        grid: {
                          color: 'rgba(51, 65, 85, 0.15)'
                        },
                        ticks: {
                          color: '#334155',
                          font: {
                            weight: 'bold'
                          }
                        }
                      }
                    },
                    elements: {
                      line: {
                        borderWidth: 4
                      },
                      point: {
                        radius: 6,
                        hoverRadius: 9,
                        borderWidth: 3
                      }
                    },
                    interaction: {
                      mode: 'index',
                      intersect: false
                    }
                  }}
                />
              </div>
              <div className="mt-6 text-slate-300 bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-medium">Key insight:</p>
                <p>{cleaningFrequencyComparisons[activeComparisonIndex].description}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Two-column section for germ and health charts */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-cyan-900/20 hover:shadow-xl transition duration-300"
          >
            <span className="text-cyan-400 text-sm uppercase tracking-wider font-medium">Bacteria Elimination</span>
            <h3 className="text-2xl font-semibold mb-6 text-white mt-1">Common Household Germs</h3>
            <div className="h-80">
              <Doughnut
                data={commonGermsData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  animation: {
                    animateRotate: true,
                    animateScale: true,
                    duration: 1000
                  },
                  plugins: {
                    legend: {
                      position: 'right',
                      labels: {
                        usePointStyle: true,
                        padding: 15,
                        font: {
                          size: 11
                        }
                      }
                    },
                    tooltip: {
                      ...germsTooltipCallback,
                      usePointStyle: true
                    }
                  },
                  cutout: '60%',
                }}
              />
            </div>
            <div className="mt-6 text-slate-300 text-sm bg-gradient-to-r from-blue-900/40 to-cyan-900/40 p-4 rounded-lg">
              <p className="font-medium text-blue-300 mb-2">Why this matters:</p>
              <p>My professional cleaning effectively eliminates up to 92% of harmful bacteria like E. coli and Salmonella, significantly reducing the risk of foodborne illnesses and infections in your home.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-cyan-900/20 hover:shadow-xl transition duration-300"
          >
            <span className="text-cyan-400 text-sm uppercase tracking-wider font-medium">Health Improvements</span>
            <h3 className="text-2xl font-semibold mb-6 text-white mt-1">Impact on Well-being</h3>
            <div className="h-80">
              <Bar
                data={healthImpactData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  animation: {
                    delay: (context: any) => context.dataIndex * 150
                  },
                  plugins: {
                    legend: {
                      display: false
                    },
                    tooltip: {
                      ...healthTooltipCallback,
                      usePointStyle: true
                    }
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 100,
                      title: {
                        display: true,
                        text: 'Improvement (%)',
                      },
                      grid: {
                        display: false
                      }
                    },
                    x: {
                      grid: {
                        display: false
                      }
                    }
                  },
                }}
              />
            </div>
            <div className="mt-6 text-slate-300 text-sm bg-gradient-to-r from-cyan-900/40 to-blue-900/40 p-4 rounded-lg">
              <p className="font-medium text-cyan-300 mb-2">The health connection:</p>
              <p>My clients report significant improvements across multiple health factors. Sleep quality and overall well-being see the highest gains, with a 72% and 80% improvement respectively after regular cleaning.</p>
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-xl p-10 shadow-2xl text-white text-center relative overflow-hidden border border-cyan-400/30"
        >
          {/* Background pattern with overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-300/20 rounded-full blur-xl"></div>
                <div className="absolute top-20 right-10 w-40 h-40 bg-cyan-300/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-teal-300/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-cyan-300/20 rounded-full blur-xl"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/50 to-cyan-700/50"></div>
          </div>
          
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium text-cyan-200 mb-4 backdrop-blur-sm">Data-driven cleaning approach</span>
            <h3 className="text-3xl font-bold mb-6 text-white">Experience the Science of Clean</h3>
            <p className="max-w-2xl mx-auto mb-8 text-cyan-50 text-lg">
              Ready to see how my data-driven cleaning approach can transform your home's health metrics? Book a consultation today and breathe easier tomorrow.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-50"
            >
              Book a Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataAnalysis; 