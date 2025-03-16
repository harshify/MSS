import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          About Mishra Sales & Services
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Founded in 2010, MSS has grown from a small local supplier to a leading provider of industrial solutions. 
                Our journey has been driven by a commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300">
                To provide cutting-edge industrial solutions that empower businesses to achieve their operational goals 
                while maintaining the highest standards of quality and reliability.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300">
                To become the most trusted partner in industrial solutions across the region, known for our expertise, 
                innovation, and unwavering commitment to customer success.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Values</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Excellence in everything we do</li>
                <li>Innovation that drives progress</li>
                <li>Customer satisfaction as our priority</li>
                <li>Integrity in all our dealings</li>
                <li>Sustainability for the future</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}