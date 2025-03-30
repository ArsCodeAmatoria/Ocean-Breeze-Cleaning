import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'Homeowner',
    content: 'Since switching to Ocean Breeze Cleaning, my family has experienced fewer allergy symptoms and sick days. Their attention to detail and focus on health has made a noticeable difference in our home environment.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Office Manager',
    content: 'The data they shared about workplace germs was eye-opening. After implementing their regular cleaning schedule, employee sick days dropped by 22% in just three months. The investment pays for itself.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah Thompson',
    role: 'Parent of Two',
    content:
      "As a mother of two young children, I appreciate their use of eco-friendly products that effectively kill germs without harmful chemicals. My pediatrician has even noticed a difference in my children's respiratory health.",
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-neutral-DEFAULT max-w-3xl mx-auto">
            Discover how our cleaning services have improved the health and wellbeing 
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
              className="bg-white p-8 rounded-xl shadow-md relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-gray-100" />
              <div className="flex space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-neutral-DEFAULT mb-6 relative z-10">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
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
          <p className="text-lg font-medium text-primary mb-6">Join hundreds of satisfied customers</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-accent text-white font-medium rounded-md shadow-lg hover:shadow-xl transition"
          >
            Read More Testimonials
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 