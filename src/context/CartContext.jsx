import React, { createContext, useReducer } from "react";

const CartContext = createContext(undefined);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Actions
  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });
  const removeFromCart = (productId) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  const updateQuantity = (productId, quantity) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: productId, quantity } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  // Calculated values
  const totalItems = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = {
    items: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};

// ✅ export CartContext so useCart hook can access it
export { CartContext };
