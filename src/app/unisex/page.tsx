"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useState } from "react";
import MainNavigation from "../components/MainNavigation";
import Image from "next/image";
import { ShoppingCartIcon } from 'lucide-react';
import { useCart } from 'src/stores/cart.store';
import { useRouter } from 'next/navigation';

const UnisexShoesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Updated product data without IDs
  const trendingProducts = [
    {
      image: "/images/utrend1.jpg",
      name: "Boots",
      price: "$120.00"
    },
    {
      image: "/images/utrend2.jpg",
      name: "Loafers",
      price: "$110.00"
    },
    {
      image: "/images/utrend3.jpg",
      name: "Sneakers",
      price: "$140.00"
    },
    {
      image: "/images/utrend4.jpg",
      name: "Sandals",
      price: "$200.00"
    }
  ];

  const featuredProducts = Array(36).fill(null).map((_, i) => ({
    name: `Universal Style ${i + 1}`,
    price: `$${(120 + i * 10).toFixed(2)}`,
    image: `/images/uimg${i + 1}.jpg`
  }));

  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (product: { name: string; price: string; image: string }) => {
    addToCart(product);
    router.push('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MainNavigation />

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
              Step Into Versatility
            </motion.h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover our universal collection of premium unisex footwear 
              blending style and comfort for everyone. Expertly crafted 
              to transcend gender norms and elevate every wardrobe.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition dark:text-black">
                Shop Collection
              </button>
              <button className="border-2 border-gray-900 dark:border-white px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                Explore Styles
              </button>
            </div>
          </div>

          <motion.div 
            className="md:w-1/2"
            whileHover={{ scale: 1.02 }}
          >
            <Image 
              src="/images/ufirstimg.jpg"
              alt="Versatile Unisex Footwear"
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
            placeholder="Search universal styles..."
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
          Universal Favorites
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
            &copy; 2024 Universal Footwear. All rights reserved.
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

      {/* Floating Cart Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link href="/cart">
          <button className="p-4 rounded-full bg-primary text-white shadow-xl hover:bg-primary-dark transition-transform active:scale-95 flex items-center gap-2">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="font-medium">View Cart</span>
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default UnisexShoesPage;