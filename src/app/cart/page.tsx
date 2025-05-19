"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "src/stores/cart.store";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiShoppingBag, FiX, FiPlus, FiMinus } from "react-icons/fi";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cart, clearCart, removeFromCart, updateQuantity } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const calculateTotal = () => {
    const subtotal = cart.reduce(
      (sum, item) => sum + Number(item.price.replace("$", "")) * item.quantity,
      0
    );
    return (subtotal - discount).toFixed(2);
  };

  const applyPromo = () => {
    if (promoCode.toUpperCase() === "SAVE10") {
      setDiscount(10);
    }
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container py-16 px-4 md:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Cart Items */}
            <div className="md:w-2/3">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-2">
                  <FiShoppingBag className="w-6 h-6" />
                  Your Cart ({cart.length})
                </h1>
                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-600 flex items-center gap-1"
                  >
                    <FiX className="w-5 h-5" />
                    Clear Cart
                  </button>
                )}
              </div>

              <AnimatePresence>
                {cart.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-4xl mb-4">🛒</div>
                    <h2 className="text-xl mb-4">Your cart is empty</h2>
                    <Link href="/products" className="btn-primary">
                      Start Shopping
                    </Link>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                      >
                        <div className="flex items-center gap-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={96}
                            height={96}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                              {item.category}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-1"
                              >
                                <FiMinus className="w-4 h-4" />
                              </button>
                              <span className="w-6 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-1"
                              >
                                <FiPlus className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="w-24 text-right">
                              <span className="font-medium">{item.price}</span>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <FiX className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Summary */}
            {cart.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="md:w-1/3"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm sticky top-8">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${calculateTotal()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Discount</span>
                      <span className="text-green-500">-${discount}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 border rounded-lg px-4 py-2"
                      />
                      <button
                        onClick={applyPromo}
                        className="btn-secondary whitespace-nowrap"
                      >
                        Apply
                      </button>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold mb-4">
                      <span>Total</span>
                      <span>${calculateTotal()}</span>
                    </div>
                    <button className="btn-primary w-full">
                      Checkout Now
                    </button>
                  </div>

                  <button
                    onClick={() => router.back()}
                    className="mt-4 inline-block w-full text-center text-green-600 hover:text-green-700 hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CartPage;
