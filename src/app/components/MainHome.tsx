"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { ShoppingCartIcon } from 'lucide-react';

// Add this new component
const TypingBanner = () => {
  const phrases = [
    "We bring to you the best offers",
    "Quality over mediocrity",
    "Shop with us"
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = phrases[currentPhrase];
      
      if (!isDeleting) {
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
        setDisplayText(fullText.slice(0, displayText.length + 1));
      } else {
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          return;
        }
        setDisplayText(fullText.slice(0, displayText.length - 1));
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhrase]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center text-xl font-light mb-8"
    >
      {displayText}
    </motion.div>
  );
};

// Updated MainNavigation component
function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-950 shadow-sm">
      {/* ... existing navigation code ... */}

      {/* New Page Content */}
      <div className="container py-24">
        {/* Category Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Choose Your Category
          </h2>
          <TypingBanner />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      src={`/images/${category}-category.jpg`}
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
          className="mt-24 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            We Sell Quality Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover our most popular and best-selling footwear items
          </p>
        </motion.div>

        {/* Slider Section (Add your slider component here) */}

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="fixed bottom-4 left-4"
        >
          <Link href='/cart'>
          <button   className="p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transition transform active:scale-110">
            <ShoppingCartIcon className="h-6 w-6" />
          </button>
          </Link>
        </motion.footer>
      </div>

      {/* Existing Mobile Menu Code ... */}
    </nav>
  );
}

export default MainNavigation;