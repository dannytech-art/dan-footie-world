"use client";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import MainNavigation from "../components/MainNavigation";
import Image from "next/image";
import { ShoppingCartIcon } from 'lucide-react';
import { useCart } from 'src/stores/cart.store';
import { FiCheck } from 'react-icons/fi';

const MenShoesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const { cart, addToCart } = useCart();

  const trendingProducts = [
    {
      image: "/images/trend1.jpg",
      name: "Boots",
      price: "$120.00"
    },
    {
      image: "/images/trend2.jpg",
      name: "Crocs",
      price: "$110.00"
    },
    {
      image: "/images/trend3.jpg",
      name: "Sneakers",
      price: "$140.00"
    },
    {
      image: "/images/trend4.jpg",
      name: "Bespoke",
      price: "$200.00"
    }
  ];

  const featuredProducts = Array(36).fill(null).map((_, i) => ({
    name: `Premium Shoe ${i + 1}`,
    price: `$${(120 + i * 10).toFixed(2)}`,
    image: `/images/img${i + 1}.jpg`
  }));

  const handleAddToCart = (product: { name: string; price: string; image: string }) => {
    addToCart({
      id: product.name,
      name: product.name,
      price: product.price,
      image: product.image,
      category: "Men Shoes",
      quantity: 1,
    } as any);

    setShowNotification(true);
  };


  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MainNavigation />

      {/* Notification Popup */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-8 z-50 bg-green-500 text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <FiCheck className="w-5 h-5" />
            Item Added to Cart
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container py-16 px-4 md:px-6"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 space-y-6">
            <motion.h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Step Into Excellence
            </motion.h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover our curated collection of premium men&apos;s footwear blending 
              style, comfort, and durability.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition dark:text-black">
                Shop Now
              </button>
              <button className="border-2 border-gray-900 dark:border-white px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                Learn More
              </button>
            </div>
          </div>

          <motion.div 
            className="md:w-1/2"
            whileHover={{ scale: 1.02 }}
          >
            <Image 
              src="/images/firstimg.jpg"
              alt="Premium Shoes"
              width={600}
              height={400}
              className="rounded-xl shadow-xl"
              priority
            />
          </motion.div>
        </div>

        {/* Search Bar */}
        <motion.div 
          className="max-w-2xl mx-auto mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <input
            type="text"
            placeholder="Search our collection..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </motion.div>
      </motion.section>

      {/* Trending Section */}
      <section className="container py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto border-t-2 border-gray-200 dark:border-gray-700 my-8"></div>
        
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Trending Now
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="mt-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="text-primary text-lg font-bold my-2">{product.price}</p>
                <button 
                  className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto border-t-2 border-gray-200 dark:border-gray-700 my-8"></div>
        
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Featured Collection
        </h2>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {product.name}
              </h3>
              <p className="text-xl font-bold text-primary mb-4">{product.price}</p>
              <button 
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-16 py-8 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; 2024 Elite Footwear. All rights reserved.
          </p>
          <nav className="mt-4 flex justify-center gap-4">
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>

      {/* Floating Cart Button with Counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link href="/cart">
          <button className="p-4 rounded-full bg-primary text-white shadow-xl hover:bg-primary-dark transition-transform active:scale-95 flex items-center gap-2 relative">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="font-medium">View Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {totalItems}
              </span>
            )}
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default MenShoesPage;
