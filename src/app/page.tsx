"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { ShoppingCartIcon } from 'lucide-react';
import MainNavigation from './components/MainNavigation';
import Mycarousel from './components/Mycarousel';

const TypingBanner = () => {
  const phrases = [
    "Discover our most popular and best-selling footwear items",
     
  ];
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = phrases[0];
      
      if (!isDeleting) {
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
        setDisplayText(fullText.slice(0, displayText.length + 1));
      } else {
        if (displayText === '') {
          setIsDeleting(false);
          return;
        }
        setDisplayText(fullText.slice(0, displayText.length - 1));
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  
  return (
    <div className="text-center text-xl font-light mb-8">
      {displayText}
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Main Content */}
      <main className="pt-24">
        {/* Category Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container py-12"
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Choose Your Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {['men', 'women', 'unisex'].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer"
              >
  <Link href={`/${category}`}>
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    {/* Updated image paths */}
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      src={`/images/category${index + 1}.jpg`} // Now using category1.jpg, category2.jpg, category3.jpg
                      alt={category}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-center mt-4 capitalize">
                    {category}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Products Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container pb-4 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            We Sell Quality Products
          </h2>
          <TypingBanner />
        </motion.div>

        {/* Slider Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="container py-12 pt-4"
        >
          <Mycarousel />
        </motion.section>

        {/* Footer */}
        <motion.footer
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
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
</motion.footer>

      </main>

      {/* Fixed Cart Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Link href="/cart">
          <button className="p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transition">
            <ShoppingCartIcon className="h-6 w-6" />
          </button>
        </Link>
      </motion.div>
    </div>
  );
}


