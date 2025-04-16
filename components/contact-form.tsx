import React, { useState } from 'react';
import { Mail, Phone, Clock, Send, Check } from 'lucide-react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log('Form submitted with:', formData);
    
    // For demo purposes, we'll just set submitted to true
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: '',
        message: '',
      });
    }, 5000);
  };

  const inputClasses = "bg-neutral-dark border border-blue-600/30 focus:border-blue-500 text-white rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-gray-500";
  const labelClasses = "text-white font-medium mb-1 block";

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-neutral-dark to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-neutral max-w-2xl mx-auto">
            Experience the difference of a truly clean space. Fill out the form below to get your personalized quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-dark/70 backdrop-blur-sm border border-blue-600/20 rounded-xl p-6 md:p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-cyan-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-white">Call Us</h4>
                    <p className="text-neutral-light">(555) 123-4567</p>
                    <p className="text-sm text-neutral mt-1">Available Monday - Friday, 9am - 5pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-cyan-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-white">Email Us</h4>
                    <p className="text-neutral-light">info@breezify.me</p>
                    <p className="text-sm text-neutral mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-cyan-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-white">Business Hours</h4>
                    <p className="text-neutral-light">Monday - Friday: 9am - 5pm</p>
                    <p className="text-neutral-light">Saturday: 10am - 2pm</p>
                    <p className="text-neutral-light">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-xl font-medium text-white mb-3">What happens next?</h4>
                <ol className="space-y-4">
                  <li className="flex items-center">
                    <div className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-white text-sm">1</div>
                    <p className="text-neutral-light">We'll contact you within 24 hours to discuss your needs</p>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-white text-sm">2</div>
                    <p className="text-neutral-light">We'll provide a detailed, no-obligation quote</p>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-white text-sm">3</div>
                    <p className="text-neutral-light">Schedule your service at a time that works for you</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          
          {/* Right - Form */}
          <div className="lg:col-span-2">
            <div className="bg-neutral-dark/70 backdrop-blur-sm border border-blue-600/20 rounded-xl p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12">
                  <div className="bg-blue-600/20 rounded-full p-4 mb-6">
                    <Check className="h-12 w-12 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-xl text-neutral-light mb-6">Your message has been sent successfully.</p>
                  <p className="text-neutral text-center max-w-md">
                    We appreciate your interest in Ocean Breeze Cleaning. One of our team members will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={labelClasses}>Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className={labelClasses}>Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className={labelClasses}>Service Needed</label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className={inputClasses}
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="residential">Residential Cleaning</option>
                        <option value="commercial">Commercial Cleaning</option>
                        <option value="deep">Deep Sanitization</option>
                        <option value="post-construction">Post-Construction</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="address" className={labelClasses}>Address</label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="123 Main St, City, State"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className={labelClasses}>Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Tell us about your specific needs, property size, or any special requests."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-lg transition duration-300 flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 