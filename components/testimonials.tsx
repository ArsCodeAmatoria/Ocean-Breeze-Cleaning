import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'Homeowner',
    content: 'Since hiring Karla for my cleaning needs, my family has experienced fewer allergy symptoms and sick days. Her attention to detail and focus on health has made a noticeable difference in our home environment.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Office Manager',
    content: 'The data Karla shared about workplace germs was eye-opening. After implementing her regular cleaning schedule, employee sick days dropped by 22% in just three months. The investment pays for itself.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah Thompson',
    role: 'Parent of Two',
    content:
      "As a mother of two young children, I appreciate Karla's use of eco-friendly products that effectively kill germs without harmful chemicals. My pediatrician has even noticed a difference in my children's respiratory health.",
    rating: 5,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-blue-50">
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
            Client Stories
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            What My <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-cyan-500/60 mx-auto mb-5"
          />
          <p className="text-lg text-neutral-DEFAULT max-w-3xl mx-auto">
            Discover how my personalized cleaning services have improved the health and wellbeing 
            of families and workplaces across the region.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="bg-white p-8 rounded-xl shadow-md relative hover:shadow-lg transition duration-300"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-50" />
              <div className="flex space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-cyan-500 fill-current" />
                ))}
              </div>
              <p className="text-neutral-DEFAULT mb-6 relative z-10">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {testimonial.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-neutral-dark">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-DEFAULT">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-medium text-blue-600 mb-6">Join dozens of satisfied clients</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition"
          >
            See More Testimonials
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 