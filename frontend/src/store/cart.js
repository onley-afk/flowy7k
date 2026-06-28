import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      
      // Agregar producto al carrito
      addItem: (product, quantity = 1) =>
        set((state) => {
          const existingItem = state.items.find((item) => item._id === product._id);
          
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item._id === product._id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            };
          }
          
          return {
            items: [...state.items, { ...product, quantity }]
          };
        }),

      // Remover producto del carrito
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item._id !== productId)
        })),

      // Actualizar cantidad
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item._id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
          )
        })),

      // Vaciar carrito
      clearCart: () => set({ items: [] }),

      // Obtener total
      getTotal: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      // Obtener cantidad de items
      getItemCount: () => {
        const state = get();
        return state.items.reduce((count, item) => count + item.quantity, 0);
      }
    }),
    {
      name: 'cart-storage'
    }
  )
);

export default useCartStore;
