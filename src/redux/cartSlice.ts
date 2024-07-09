import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}
const initialState: CartState = {
  items: [] as CartItem[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({...item, quantity: 1});
      }
    },
    decreseItemQuantity: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity -= 1;
      }
    },
    DeleteItem: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
    },
    updateQuantity: () => {},
  },
});

export const {addItem, decreseItemQuantity, DeleteItem} = cartSlice.actions;
export default cartSlice.reducer;
