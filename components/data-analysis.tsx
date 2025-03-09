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
ChartJS.defaults.plugins.tooltip.backgroundColor = 'rgba(0, 123, 255, 0.8)';
ChartJS.defaults.plugins.tooltip.titleFont = { weight: 'bold', size: 14 };
ChartJS.defaults.plugins.tooltip.padding = 12;
ChartJS.defaults.plugins.tooltip.cornerRadius = 8;
ChartJS.defaults.plugins.tooltip.bodySpacing = 6;

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
            borderColor: '#007BFF',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            borderWidth: 3,
            tension: 0.3,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: '#fff',
            pointHoverBackgroundColor: '#007BFF',
            pointBorderColor: '#007BFF',
            pointBorderWidth: 2,
            pointHitRadius: 10,
            cubicInterpolationMode: 'monotone' as const,
            spanGaps: true,
          },
          {
            label: 'Bacteria Levels with Monthly Cleaning',
            data: [100, 95, 90, 88, 86, 82],
            borderColor: '#DC3545',
            backgroundColor: 'rgba(220, 53, 69, 0.1)',
            borderWidth: 3,
            tension: 0.3,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: '#fff',
            pointHoverBackgroundColor: '#DC3545',
            pointBorderColor: '#DC3545',
            pointBorderWidth: 2,
            pointHitRadius: 10,
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
            label: 'Bacteria Levels with Professional Cleaning',
            data: [100, 20, 15, 12, 10, 8],
            borderColor: '#007BFF',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            borderWidth: 3,
            tension: 0.3,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: '#fff',
            pointHoverBackgroundColor: '#007BFF',
            pointBorderColor: '#007BFF',
            pointBorderWidth: 2,
            pointHitRadius: 10,
            cubicInterpolationMode: 'monotone' as const,
            spanGaps: true,
          },
          {
            label: 'Bacteria Levels with DIY Cleaning',
            data: [100, 60, 55, 58, 52, 50],
            borderColor: '#FFC107',
            backgroundColor: 'rgba(255, 193, 7, 0.1)',
            borderWidth: 3,
            tension: 0.3,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: '#fff',
            pointHoverBackgroundColor: '#FFC107',
            pointBorderColor: '#FFC107',
            pointBorderWidth: 2,
            pointHitRadius: 10,
            cubicInterpolationMode: 'monotone' as const,
            spanGaps: true,
          },
        ],
      },
      description: "Professional cleaning techniques and equipment remove up to 92% of bacteria initially and maintain low levels, while DIY methods typically achieve only a 50% reduction."
    },
  ];

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
        label: 'Percentage Reduction After Professional Cleaning',
        data: [90, 85, 80, 92, 88, 75],
        backgroundColor: [
          'rgba(0, 123, 255, 0.8)',
          'rgba(0, 174, 239, 0.8)',
          'rgba(30, 144, 255, 0.8)',
          'rgba(40, 167, 69, 0.8)',
          'rgba(50, 205, 50, 0.8)',
          'rgba(255, 193, 7, 0.8)',
        ],
        borderColor: [
          'rgba(0, 123, 255, 1)',
          'rgba(0, 174, 239, 1)',
          'rgba(30, 144, 255, 1)',
          'rgba(40, 167, 69, 1)',
          'rgba(50, 205, 50, 1)',
          'rgba(255, 193, 7, 1)',
        ],
        borderWidth: 2,
        hoverOffset: 15,
      },
    ],
  };

  // Health impact data with enhanced visual appeal
  const healthImpactData = {
    labels: ['Allergy Symptoms', 'Respiratory Issues', 'Sleep Quality', 'Sick Days', 'Overall Well-being'],
    datasets: [
      {
        label: 'Improvement After Regular Cleaning (%)',
        data: [65, 58, 72, 45, 80],
        backgroundColor: [
          'rgba(0, 123, 255, 0.7)',
          'rgba(0, 174, 239, 0.7)',
          'rgba(40, 167, 69, 0.7)',
          'rgba(50, 205, 50, 0.7)',
          'rgba(30, 144, 255, 0.7)',
        ],
        borderColor: [
          'rgba(0, 123, 255, 1)',
          'rgba(0, 174, 239, 1)',
          'rgba(40, 167, 69, 1)',
          'rgba(50, 205, 50, 1)',
          'rgba(30, 144, 255, 1)',
        ],
        borderWidth: 2,
        borderRadius: 6,
        hoverBackgroundColor: [
          'rgba(0, 123, 255, 0.9)',
          'rgba(0, 174, 239, 0.9)',
          'rgba(40, 167, 69, 0.9)',
          'rgba(50, 205, 50, 0.9)',
          'rgba(30, 144, 255, 0.9)',
        ],
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
    <section id="data" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            The Science of Clean
          </h2>
          <p className="text-lg text-neutral-DEFAULT max-w-3xl mx-auto">
            Our data analysis shows how regular professional cleaning dramatically reduces harmful bacteria
            and improves overall health and wellbeing.
          </p>
        </motion.div>

        {/* Bacteria Reduction Charts */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl font-semibold text-primary">
                {cleaningFrequencyComparisons[activeComparisonIndex].title}
              </h3>
              <div className="flex items-center space-x-2 mt-2 md:mt-0">
                <button 
                  onClick={() => setActiveComparisonIndex(i => (i > 0 ? i - 1 : cleaningFrequencyComparisons.length - 1))}
                  className="flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full transition"
                  aria-label="Previous comparison"
                >
                  <ArrowLeft size={16} />
                </button>
                <span className="text-sm text-neutral-DEFAULT">{activeComparisonIndex + 1}/{cleaningFrequencyComparisons.length}</span>
                <button 
                  onClick={() => setActiveComparisonIndex(i => (i < cleaningFrequencyComparisons.length - 1 ? i + 1 : 0))}
                  className="flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full transition"
                  aria-label="Next comparison"
                >
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => setShowBacteriaDetails(!showBacteriaDetails)}
                  className="flex items-center ml-2 px-3 py-1 bg-primary-light/10 hover:bg-primary-light/20 text-primary-dark rounded-md text-sm transition"
                >
                  <Info size={16} className="mr-1" />
                  {showBacteriaDetails ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
            </div>
            
            {showBacteriaDetails && (
              <div className="bg-blue-50 p-4 rounded-md mb-4 text-sm">
                <h4 className="font-semibold text-primary-dark mb-2">Why this matters:</h4>
                <ul className="list-disc pl-5 space-y-1 text-neutral-dark">
                  <li>Bacteria can double in numbers every 4-20 minutes in ideal conditions</li>
                  <li>A typical kitchen sponge can harbor up to 54 billion bacteria per cubic centimeter</li>
                  <li>Bathroom surfaces can contain 500,000 bacteria per square inch</li>
                  <li>Weekly cleaning disrupts bacteria reproduction cycles effectively</li>
                  <li>Studies show regular cleaning reduces respiratory infections by up to 40%</li>
                </ul>
              </div>
            )}
            
            <div className="h-80">
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
                          size: 12
                        }
                      }
                    },
                    tooltip: {
                      ...bacteriaTooltipCallback,
                      usePointStyle: true,
                      padding: 12,
                      boxWidth: 8
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
                        }
                      },
                      grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                      }
                    },
                    x: {
                      grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                      }
                    }
                  },
                  elements: {
                    line: {
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
            <p className="mt-4 text-neutral-DEFAULT">
              {cleaningFrequencyComparisons[activeComparisonIndex].description}
            </p>
          </motion.div>
        </div>

        {/* Two-column section for germ and health charts */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">Common Household Germs Elimination</h3>
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
            <div className="mt-4 text-neutral-DEFAULT text-sm bg-gray-50 p-3 rounded">
              <p className="font-medium mb-1">Why this matters:</p>
              <p>Professional cleaning effectively eliminates up to 92% of harmful bacteria like E. coli and Salmonella, significantly reducing the risk of foodborne illnesses and infections.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">Health Impact of Regular Cleaning</h3>
            <div className="h-80">
              <Bar
                data={healthImpactData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  animation: {
                    delay: (context) => context.dataIndex * 100,
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      ...healthTooltipCallback,
                    }
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 100,
                      title: {
                        display: true,
                        text: 'Improvement (%)',
                        font: {
                          size: 12,
                          weight: 'bold'
                        }
                      },
                      grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                      }
                    },
                    x: {
                      grid: {
                        display: false
                      }
                    }
                  },
                  // @ts-ignore
                  barPercentage: 0.7,
                  // @ts-ignore
                  categoryPercentage: 0.8,
                  // @ts-ignore
                  borderRadius: 6,
                }}
              />
            </div>
            <div className="mt-4 text-neutral-DEFAULT text-sm bg-gray-50 p-3 rounded">
              <p className="font-medium mb-1">Why this matters:</p>
              <p>Regular professional cleaning can improve overall well-being by up to 80% and reduce sick days by 45%, creating a healthier living and working environment.</p>
            </div>
          </motion.div>
        </div>
        
        {/* New Allergen Reduction Radar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4 text-primary">Indoor Allergen Reduction</h3>
          <div className="h-80">
            <Radar
              data={allergenReductionData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                  line: {
                    borderWidth: 3
                  },
                  point: {
                    radius: 4,
                    hoverRadius: 6
                  }
                },
                plugins: {
                  legend: {
                    position: 'top',
                    labels: {
                      usePointStyle: true,
                      padding: 15
                    }
                  },
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        const label = context.dataset.label || '';
                        const value = context.raw;
                        return `${label}: ${value} concentration units`;
                      }
                    }
                  }
                },
                scales: {
                  r: {
                    angleLines: {
                      display: true,
                      color: 'rgba(0, 0, 0, 0.05)'
                    },
                    grid: {
                      color: 'rgba(0, 0, 0, 0.05)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                      stepSize: 20,
                      backdropColor: 'transparent'
                    },
                    pointLabels: {
                      font: {
                        size: 12,
                        weight: 500
                      }
                    }
                  }
                }
              }}
            />
          </div>
          <div className="mt-4 text-neutral-DEFAULT text-sm bg-gray-50 p-3 rounded">
            <p className="font-medium mb-1">What this shows:</p>
            <p>Professional cleaning significantly reduces common indoor allergens, with an 80-90% decrease in allergen concentrations across all categories. This is particularly important for individuals with allergies, asthma, or respiratory sensitivities.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataAnalysis; 