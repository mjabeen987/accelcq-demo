import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Building2,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Connect with our enterprise architecture experts to discuss your TOGAF implementation 
              and digital transformation needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="card"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Get Started Today</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Tell us about your enterprise architecture needs..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </motion.div>

              {/* Contact Info & Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-8"
              >
                {/* Contact Info */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900">Email</div>
                        <div className="text-neutral-600">contact@accelcq.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-accent-600" />
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900">Phone</div>
                        <div className="text-neutral-600">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900">Location</div>
                        <div className="text-neutral-600">San Francisco, CA</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-6">Why Choose AccelCQ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-neutral-900">TOGAF Certified Experts</div>
                        <div className="text-sm text-neutral-600">Certified architects with proven track record</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Building2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-neutral-900">Enterprise Scale</div>
                        <div className="text-sm text-neutral-600">Experience with Fortune 500 transformations</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-accent-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-neutral-900">Rapid Delivery</div>
                        <div className="text-sm text-neutral-600">Accelerated implementation methodologies</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-neutral-900">Dedicated Support</div>
                        <div className="text-sm text-neutral-600">Ongoing partnership throughout transformation</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Metrics */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-6">Our Track Record</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">50+</div>
                      <div className="text-sm text-neutral-600">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-600">98%</div>
                      <div className="text-sm text-neutral-600">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$100M+</div>
                      <div className="text-sm text-neutral-600">Value Created</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">6mo</div>
                      <div className="text-sm text-neutral-600">Avg. Time to Value</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 