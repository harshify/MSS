import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import type { Swiper as SwiperType } from 'swiper';
import { getProductById, productsData, Product } from '../productsData';

export function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  
  // Load products from localStorage or use the default data
  useEffect(() => {
    const savedProducts = localStorage.getItem('mss-products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(productsData);
    }
  }, []);
  
  // Get the product from the loaded products
  const product = products.find(p => p.id === id) || getProductById(id || '');

  if (!product) {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product not found</h1>
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Get related products (excluding current product)
  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12"
      >
        <button
          onClick={() => navigate('/products')}
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 sm:mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </button>

        <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12">
          {/* Product Images - Left Column */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-1/2 space-y-4 mb-6 md:mb-0"
          >
            {/* Main Swiper */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <Swiper
                spaceBetween={10}
                navigation={true}
                loop={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="aspect-square"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex items-center justify-center w-full h-full">
                      <img
                        src={image}
                        alt={`${product.name} - View ${index + 1}`}
                        className="w-full h-full object-contain"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Thumbnail Swiper */}
            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={8}
                slidesPerView="auto"
                breakpoints={{
                  320: { slidesPerView: 3 },
                  480: { slidesPerView: 4 },
                  640: { slidesPerView: 5 },
                }}
                freeMode={true}
                watchSlidesProgress={true}
                loop={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="thumbs-swiper"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index} style={{ width: 'auto' }}>
                    <button 
                      className="w-16 sm:w-20 aspect-square rounded-md overflow-hidden border-2 border-transparent hover:border-blue-500 focus:border-blue-500 focus:outline-none transition-colors"
                      aria-label={`View image ${index + 1}`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>

          {/* Product Details - Right Column */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full md:w-1/2 flex flex-col space-y-6"
          >
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </div>

            <div className="flex-grow">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Features
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Interested in this product?
              </h3>
              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact for Inquiry
                </Link>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mt-3">
                  <a 
                    href="tel:+919990126163" 
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </a>
                  <a 
                    href="mailto:contact@mss.com" 
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products Section */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
            You May Also Like
          </h2>
          <div className="flex flex-wrap -mx-2">
            {relatedProducts.map((relatedProduct) => (
              <motion.div
                key={relatedProduct.id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4"
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Link to={`/products/${relatedProduct.id}`} className="block h-full">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white line-clamp-1">
                        {relatedProduct.name}
                      </h3>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
