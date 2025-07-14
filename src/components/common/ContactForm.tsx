import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertTriangle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | 'loading' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill out all required fields.',
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    // Set loading state
    setFormStatus({
      type: 'loading',
      message: 'Sending your message...',
    });
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 8 seconds
      setTimeout(() => {
        setFormStatus({ type: null, message: '' });
      }, 8000);
    }, 2000);
  };

  const inputClasses = (fieldName: string, hasError: boolean = false) => `
    w-full px-6 py-4 text-secondary-900 bg-white border-2 rounded-2xl
    transition-all duration-300 ease-in-out text-base
    focus:outline-none focus:ring-4 focus:ring-primary-100
    ${hasError 
      ? 'border-red-300 focus:border-red-500' 
      : focusedField === fieldName || formData[fieldName as keyof typeof formData]
        ? 'border-primary-500 focus:border-primary-600'
        : 'border-secondary-200 hover:border-secondary-300 focus:border-primary-500'
    }
  `;

  const labelClasses = (fieldName: string, hasValue: boolean) => `
    absolute left-6 z-10 transition-all duration-300 ease-in-out pointer-events-none px-2
    ${focusedField === fieldName || hasValue
      ? '-top-3 text-xs bg-white text-primary-600 font-semibold'
      : 'top-4 text-secondary-500 bg-transparent'}
  `;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-bold text-secondary-900 mb-4">Get in Touch</h3>
          <p className="text-secondary-600 text-lg">Fill out the form below and we'll get back to you as soon as possible.</p>
        </div>

        <AnimatePresence>
          {formStatus.type && (
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`p-6 mb-8 rounded-2xl border-2 shadow-lg ${
                formStatus.type === 'success' 
                  ? 'bg-accent-50 border-accent-200 text-accent-800' 
                  : formStatus.type === 'error'
                  ? 'bg-red-50 border-red-200 text-red-800'
                  : 'bg-primary-50 border-primary-200 text-primary-800'
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  {formStatus.type === 'success' && <CheckCircle2 size={24} className="text-accent-600" />}
                  {formStatus.type === 'error' && <AlertTriangle size={24} className="text-red-600" />}
                  {formStatus.type === 'loading' && <Loader2 size={24} className="text-primary-600 animate-spin" />}
                </div>
                <div>
                  <p className="font-medium text-base">{formStatus.message}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('name')}
                required
              />
              <label 
                htmlFor="name" 
                className={labelClasses('name', !!formData.name)}
              >
                Full Name <span className="text-red-500">*</span>
              </label>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('email')}
                required
              />
              <label 
                htmlFor="email" 
                className={labelClasses('email', !!formData.email)}
              >
                Email Address <span className="text-red-500">*</span>
              </label>
            </motion.div>
          </div>
          
          {/* Phone and Subject Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('phone')}
              />
              <label 
                htmlFor="phone" 
                className={labelClasses('phone', !!formData.phone)}
              >
                Phone Number
              </label>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField(null)}
                className={`${inputClasses('subject')} appearance-none cursor-pointer pr-12`}
              >
                <option value="">Select a subject</option>
                <option value="Confidential Computing">Confidential Computing</option>
                <option value="Quantum Computing">Quantum Computing</option>
                <option value="Partnership">Partnership Opportunity</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
              </select>
              {/* Removed the floating label for subject */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                <ChevronDown size={20} className="text-secondary-400" />
              </div>
            </motion.div>
          </div>
          
          {/* Message */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              rows={6}
              className={`${inputClasses('message')} resize-none`}
              required
            />
            <label 
              htmlFor="message" 
              className={labelClasses('message', !!formData.message)}
            >
              Message <span className="text-red-500">*</span>
            </label>
          </motion.div>
          
          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              type="submit"
              disabled={formStatus.type === 'loading'}
              className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus.type === 'loading' ? (
                <>
                  <Loader2 size={20} className="mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={20} className="ml-2" />
                </>
              )}
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;