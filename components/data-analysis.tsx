import React from 'react';
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
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

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
  ArcElement
);

const DataAnalysis = () => {
  // Bacteria reduction over time
  const bacteriaReductionData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        label: 'Bacteria Levels with Weekly Cleaning',
        data: [100, 42, 28, 15, 10, 5],
        borderColor: '#007BFF',
        backgroundColor: 'rgba(0, 123, 255, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Bacteria Levels with Monthly Cleaning',
        data: [100, 95, 90, 88, 86, 82],
        borderColor: '#DC3545',
        backgroundColor: 'rgba(220, 53, 69, 0.1)',
        tension: 0.4,
      },
    ],
  };

  // Common household germs
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
          '#007BFF',
          '#00AEEF',
          '#1E90FF',
          '#28A745',
          '#32CD32',
          '#FFC107',
        ],
      },
    ],
  };

  // Health impact data
  const healthImpactData = {
    labels: ['Allergy Symptoms', 'Respiratory Issues', 'Sleep Quality', 'Sick Days', 'Overall Well-being'],
    datasets: [
      {
        label: 'Improvement After Regular Cleaning (%)',
        data: [65, 58, 72, 45, 80],
        backgroundColor: '#28A745',
      },
    ],
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

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">Bacteria Reduction Over Time</h3>
            <div className="h-80">
              <Line
                data={bacteriaReductionData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      title: {
                        display: true,
                        text: 'Bacteria Level (% of initial)',
                      },
                    },
                  },
                }}
              />
            </div>
            <p className="mt-4 text-neutral-DEFAULT text-sm">
              Weekly cleaning reduces bacteria levels by up to 95% over a 6-week period, compared to only 18%
              reduction with monthly cleaning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
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
                  plugins: {
                    legend: {
                      position: 'right',
                    },
                  },
                }}
              />
            </div>
            <p className="mt-4 text-neutral-DEFAULT text-sm">
              Professional cleaning effectively eliminates up to 92% of harmful bacteria like E. coli and Salmonella.
            </p>
          </motion.div>
        </div>

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
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                      display: true,
                      text: 'Improvement (%)',
                    },
                  },
                },
              }}
            />
          </div>
          <p className="mt-4 text-neutral-DEFAULT text-sm">
            Regular cleaning can improve overall well-being by up to 80% and reduce sick days by 45%.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DataAnalysis; 