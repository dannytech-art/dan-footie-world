"use client";
import Link from 'next/link'; // Ensure you import Link from next/link
import { motion } from "framer-motion";
import { useState } from "react";
import MainNavigation from "../components/MainNavigation";
import Image from "next/image";
import { ShoppingCartIcon } from 'lucide-react'; // Import ShoppingCartIcon
import { useCart } from '../../context/CartContext'; // Import useCart
import { useRouter } from 'next/navigation'; // Import useRouter

const WomenShoesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const trendingProducts = [
    {
      id: 1,
      image: "/images/wtrend1.jpg",
      name: "Boots"
    },
    {
      id: 2,
      image: "/images/wtrend2.jpg",
      name: "Crocs"
    },
    {
      id: 3,
      image: "/images/wtrend3.jpg",
      name: "Sneakers"
    },
    {
      id: 4,
      image: "/images/wtrend4.jpg",
      name: "Bespoke"
    }
  ];

  const featuredProducts = Array(36).fill(null).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: `$${(120 + i * 10).toFixed(2)}`,
    image: `/images/wimg${i + 1}.jpg`
  }));

  const { addToCart } = useCart(); // Use the addToCart function
  const router = useRouter(); // Use the useRouter hook

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
          {/* Write-up */}
          <div className="md:w-1/2 space-y-6">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Step Into Elegance
            </motion.h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover our curated collection of premium women&apos;s footwear blending 
              style, comfort, and sophistication. Crafted with precision for the modern woman.
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

          {/* Image */}
          <motion.div 
            className="md:w-1/2"
            whileHover={{ scale: 1.02 }}
          >
            <Image 
              src="/images/wfirstimg.jpg"
              alt="Premium Women's Shoes"
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
          Our Offers
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <div className="mt-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <div className="flex gap-2 mt-2">
                  <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark dark:text-black">
                    Shop
                  </button>
                  <button 
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => {
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: `$${(120 + product.id * 10).toFixed(2)}`, // Adjust pricing logic as needed
                        image: product.image
                      });
                      router.push('/cart');
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto border-t-2 border-gray-200 dark:border-gray-700 my-8"></div>
        
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Featured Products
        </h2>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
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
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition dark:bg-gray-100 dark:text-black dark:hover:bg-gray-300"
                onClick={() => {
                  addToCart(product);
                  router.push('/cart');
                }}
              >
               Add to Cart
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }} // Add this to ensure animation triggers once
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
      >
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Footwear Co. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
        {/* Cart Button */}
        <Link href="/cart">
          <button 
            className="fixed top-4 right-4 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transition transform active:scale-110 z-10"
          >
            <ShoppingCartIcon className="h-6 w-6" />
          </button>
        </Link>
      </motion.footer>
    </div>
  );
};

export default WomenShoesPage;
