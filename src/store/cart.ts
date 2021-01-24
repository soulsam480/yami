import create, { State } from 'zustand';

export interface YamiCart {
  id: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
}

interface CartState extends State {
  cart: YamiCart[];
  addToCart: (payload: YamiCart) => void;
}

export const useCart = create<CartState>((set, get) => ({
  cart: [],
  addToCart: (payload) =>
    set((state) => {
      const isPresent = state.cart.find((fruit) => fruit.id === payload.id);

      if (!isPresent) {
        return {
          ...state,
          cart: [...state.cart, { ...payload }],
        };
      }

      const updatedCart = state.cart.map((product) =>
        product.id === payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );

      return {
        ...state,
        cart: updatedCart,
      };
    }),
}));
