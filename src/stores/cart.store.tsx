import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  category?: string;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, "id" | "quantity">) => void;
  clearCart: () => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) => 
        set((state) => ({
          cart: [...state.cart, {
            ...product,
            quantity: 1,
            id: Date.now(),
          }]
        })),
      clearCart: () => set({ cart: [] }),
      removeFromCart: (id) => 
        set((state) => ({
          cart: state.cart.filter(item => item.id !== id)
        })),
      updateQuantity: (id, quantity) => 
        set((state) => ({
          cart: state.cart.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
          )
        }))
    }),
    {
      name: 'cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);