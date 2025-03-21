"use client";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import Link from 'next/link';
import MainNavigation from "../components/MainNavigation";
import Image from 'next/image';

const CartPage = () => {
  const { cart, clearCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + Number(item.price.replace('$', '')), 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MainNavigation />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container py-16 px-4 md:px-6"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Shopping Cart ({cart.length})</h1>
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4">S/N</th>
                <th className="text-left py-4">Product</th>
                <th className="text-left py-4">Price</th>
                <th className="text-left py-4">Date Added</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item.id} className="border-b">
                <td className="py-4">{index + 1}</td>
                <td className="py-4">
                  <div className="flex items-center gap-4">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      width={64}
                      height={64}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span>{item.name}</span>
                  </div>
                </td>
                {/* ... */}
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-right">
          <div className="text-2xl font-bold mb-4">
            Total: ${calculateTotal()}
          </div>
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition">
            Proceed to Payment
          </button>
        </div>

        <Link href="/" className="mt-8 inline-block text-primary hover:underline">
          ← Continue Shopping
        </Link>
      </motion.div>
    </div>
  );
};

export default CartPage;