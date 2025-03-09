import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wind, Baby, Heart, Sparkles, Bug } from 'lucide-react';

const benefitsData = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'Reduced Infection Risk',
    description: 'Regular cleaning removes pathogens that cause infections, reducing the risk of illness by up to 65%.',
  },
  {
    icon: <Wind className="h-10 w-10 text-primary" />,
    title: 'Improved Air Quality',
    description: 'Clean spaces have fewer allergens and pollutants, making breathing easier for everyone in your home.',
  },
  {
    icon: <Baby className="h-10 w-10 text-primary" />,
    title: 'Safer for Children',
    description: 'Children are more vulnerable to germs. Clean environments protect their developing immune systems.',
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: 'Better Overall Health',
    description: 'Studies show regular cleaning leads to fewer sick days, better sleep, and improved mental wellbeing.',
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'Longer-lasting Surfaces',
    description: 'Regular cleaning preserves the integrity of surfaces and furniture, making your investments last longer.',
  },
  {
    icon: <Bug className="h-10 w-10 text-primary" />,
    title: 'Virus Prevention',
    description: 'Professional cleaning protocols effectively kill viruses, including coronavirus, on high-touch surfaces.',
  },
];

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
  return (
    <section id="benefits" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Health Benefits of Regular Cleaning
          </h2>
          <p className="text-lg text-neutral-DEFAULT max-w-3xl mx-auto">
            Discover how our professional cleaning services can transform your home into 
            a healthier environment for you and your loved ones.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                {benefit.icon}
                <h3 className="text-xl font-semibold ml-3 text-neutral-dark">{benefit.title}</h3>
              </div>
              <p className="text-neutral-DEFAULT">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-primary-light text-white p-8 rounded-xl shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to Breathe Easier?</h3>
              <p className="text-blue-50">
                Schedule a free consultation to learn how our cleaning services can improve your home's health metrics.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-accent text-white font-medium rounded-md shadow-lg hover:shadow-xl transition"
            >
              Book Your Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits; 