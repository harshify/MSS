import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { productsData, Product } from '../productsData';
import { useMemo, useState, useEffect } from 'react';

export function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  
  // Load products from localStorage or use the default data
  useEffect(() => {
    const savedProducts = localStorage.getItem('mss-products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(productsData);
    }
  }, []);

  // Filter featured products
  const featuredProducts = useMemo(() => {
    return products.filter(product => product.featured);
  }, [products]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900"
      >
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/60 dark:bg-blue-950/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            >
              Mishra Sales & Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto"
            >
              Your trusted partner in industrial solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/products"
                className="inline-flex items-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:text-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section className="py-12 sm:py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Featured Products
              </h1>
              <div className="hidden sm:block">
                <Link 
                  to="/products" 
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                >
                  View All
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              loop={featuredProducts.length > 1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                480: {
                  slidesPerView: Math.min(2, featuredProducts.length),
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: Math.min(3, featuredProducts.length),
                  spaceBetween: 30,
                },
              }}
              className="pb-12"
            >
              {featuredProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <Link to={`/products/${product.id}`} className="block h-full">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg h-full flex flex-col"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          Featured
                        </div>
                      </div>
                      <div className="p-4 sm:p-6 flex-grow">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base line-clamp-2">
                          {product.description}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}

      {/* All Products Section */}
      <section className="py-12 sm:py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
            All Products
          </h1>
          <div className="flex flex-wrap -mx-2">
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="w-1/2 sm:w-1/2 lg:w-1/3 px-2 mb-4"
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Link to={`/products/${product.id}`} className="block h-full">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      {product.featured && (
                        <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          Featured
                        </div>
                      )}
                      {product.category && (
                        <div className="absolute top-2 right-2 bg-gray-800 bg-opacity-75 text-white text-xs px-2 py-1 rounded-full">
                          {product.category}
                        </div>
                      )}
                    </div>
                    <div className="p-4 sm:p-6">
                      <h2 className="text-sm sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                        {product.name}
                      </h2>
                      <p className="text-xs sm:text-base text-gray-600 dark:text-gray-300 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
