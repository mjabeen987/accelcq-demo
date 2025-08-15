import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Cpu, Play, ExternalLink, TrendingUp, Zap, BarChart, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const CaseStudyQuantum = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stockData = [
    { symbol: 'AAPL', current: '$178.25', predicted: '$185.40', confidence: '92%', change: '+4.01%' },
    { symbol: 'GOOGL', current: '$141.80', predicted: '$148.25', confidence: '89%', change: '+4.55%' },
    { symbol: 'MSFT', current: '$378.85', predicted: '$372.10', confidence: '91%', change: '-1.78%' },
    { symbol: 'TSLA', current: '$248.50', predicted: '$267.30', confidence: '87%', change: '+7.57%' }
  ];

  return (
    <>
      <Helmet>
        <title>Quantum Computing Case Study | AccelCQ Inc</title>
        <meta name="description" content="Explore our Stock Price Prediction demo showcasing quantum computing capabilities for advanced financial modeling and forecasting." />
      </Helmet>

      <PageHeader 
        title="Quantum Computing Case Study"
        subtitle="Stock Price Prediction with Quantum Machine Learning"
        backgroundImage="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Demo Overview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 px-6 py-3 rounded-full mb-8 border border-emerald-200 shadow-lg">
                <Sparkles size={20} className="mr-3 text-emerald-600" />
                <span className="font-semibold">✅ Live Demo Available</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-slate-900">
                QuantumStock AI Live Demo
              </h2>
              <p className="text-slate-600 mb-8 text-xl leading-relaxed">
                Experience the power of quantum machine learning in financial forecasting with our live QuantumStock AI platform. Achieving 94.7% prediction accuracy with lightning-fast 0.3-second processing, our demo showcases quantum algorithms analyzing market patterns and historical data for superior stock price predictions.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <a 
                  href="https://quantum-demo-frontend.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 transition-all duration-300 hover:scale-105"
                >
                  <Play className="mr-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                  Launch Quantum Demo
                </a>
                <Link 
                  to="/contact?subject=Quantum Computing&template=quantum-computing#contact-form" 
                  className="group inline-flex items-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 transition-all duration-300 hover:scale-105"
                >
                  Request Implementation
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-2xl border border-purple-200 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h4 className="font-bold mb-8 text-center text-slate-900 text-xl">Quantum Predictions vs Market</h4>
                  
                  <div className="space-y-4">
                    {stockData.map((stock, index) => (
                      <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 group-hover:shadow-xl transition-all duration-300">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-bold text-2xl text-slate-900">{stock.symbol}</span>
                          <span className={`px-4 py-2 rounded-xl text-sm font-bold ${
                            stock.change.startsWith('+') ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {stock.change}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-slate-500 font-medium">Current:</span>
                            <div className="font-bold text-slate-900 text-lg">{stock.current}</div>
                          </div>
                          <div>
                            <span className="text-slate-500 font-medium">Predicted:</span>
                            <div className="font-bold text-slate-900 text-lg">{stock.predicted}</div>
                          </div>
                          <div>
                            <span className="text-slate-500 font-medium">Confidence:</span>
                            <div className="font-bold text-purple-600 text-lg">{stock.confidence}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center bg-white px-6 py-4 rounded-2xl shadow-lg border border-purple-200 group-hover:shadow-xl transition-all duration-300">
                      <Zap className="text-purple-600 mr-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <span className="text-sm font-bold text-slate-700">Quantum Circuit: 12 Qubits Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-800/20"></div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Ready to Harness Quantum Advantage?
            </h2>
            <p className="text-blue-100 max-w-4xl mx-auto mb-10 text-xl leading-relaxed">
              Try our live QuantumStock AI demo featuring 94.7% accuracy and 0.3-second predictions. Experience firsthand how quantum computing is revolutionizing financial forecasting and trading strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://quantum-demo-frontend.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                <ExternalLink className="mr-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                Try Quantum Demo
              </a>
              <Link 
                to="/contact?subject=Quantum Computing&template=quantum-computing#contact-form" 
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyQuantum; 