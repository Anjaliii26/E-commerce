import React from 'react';
import { HeroSection } from './HeroSection';
import { FaRegThumbsUp, FaTruck, FaLock, FaHeadset } from 'react-icons/fa'; // Importing new icons
import { motion } from 'framer-motion'; // Animation library for smooth transitions

export const About = () => {
  const data = {
    name: "OUR Products"
  }

  return (
    <div>
      <HeroSection myData={data} />

      {/* About Section */}
      <motion.div 
        className="py-16 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 mb-10">
            We are dedicated to providing high-quality products, superior customer service, and the best shopping experience possible. Here’s what sets us apart:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* Feature 1 */}
          <motion.div 
            className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaRegThumbsUp className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assurance</h3>
            <p className="text-gray-500">
              We guarantee the highest quality for all our products. Our team carefully selects each item to ensure the best performance and longevity.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaTruck className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast & Free Delivery</h3>
            <p className="text-gray-500">
              We provide fast, reliable, and free shipping to ensure that your orders arrive on time and in perfect condition.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaLock className="text-4xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Payment</h3>
            <p className="text-gray-500">
              Your payments are completely secure with our trusted gateways. We use encryption technology to ensure a safe shopping experience.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div 
            className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaHeadset className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Customer Support</h3>
            <p className="text-gray-500">
              Our dedicated support team is available 24/7 to assist you with any questions or issues you might have during your shopping experience.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Our Mission Section */}
      <motion.div 
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-10">
            Our mission is to revolutionize the way people shop by offering high-quality, affordable, and innovative products, while ensuring exceptional customer experiences. We aim to build trust and loyalty with every interaction.
          </p>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 mb-10">Here are some reviews from our happy customers:</p>

          <div className="flex justify-center space-x-8">
            {/* Testimonial 1 */}
            <div className="p-8 bg-white shadow-lg rounded-lg max-w-xs text-center">
              <p className="text-lg text-gray-600 mb-4">
                "I love shopping here! The quality is amazing, and the delivery was super fast. Definitely coming back for more!"
              </p>
              <p className="font-semibold text-gray-800">Emily Johnson</p>
              <p className="text-sm text-gray-500">Satisfied Customer</p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 bg-white shadow-lg rounded-lg max-w-xs text-center">
              <p className="text-lg text-gray-600 mb-4">
                "Great customer service. They went above and beyond to help me. I feel confident shopping with them!"
              </p>
              <p className="font-semibold text-gray-800">Michael Smith</p>
              <p className="text-sm text-gray-500">Repeat Buyer</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
