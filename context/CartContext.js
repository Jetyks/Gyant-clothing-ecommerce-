import React, { useReducer, createContext, useContext, useEffect } from 'react';

// Estado inicial
let initialState = [];

if (typeof window !== "undefined") {
  try {
    const storedCart = localStorage.getItem("cart");
    initialState = storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Error al leer localStorage:", error);
    initialState = [];
  }
}

// Reducer
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.find(item => item.product_id === action.payload.product_id);
      if (existingItem) {
        // Si el producto ya está en el carrito, solo se aumenta la cantidad
        return state.map(item =>
          item.product_id === action.payload.product_id
            ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) } // Si no se especifica quantity, aumenta 1
            : item
        );
      }
      // Si no existe, lo agrega con la cantidad especificada o 1 por defecto
      return [...state, { ...action.payload, quantity: action.payload.quantity || 1 }];

    case "REMOVE_ONE_FROM_CART":
      return state
        .map(item =>
          item.product_id === action.payload.product_id
            ? { ...item, quantity: item.quantity - 1 } // Reduce la cantidad en 1
            : item
        )
        .filter(item => item.quantity > 0); // Elimina productos con cantidad 0

    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.payload.product_id);

    case "CLEAR_CART":
      return [];

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Contexto
const CartContext = createContext();

// Proveedor
function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // Persistir cambios en localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // función para agregar un producto/item al carrito
  const addToCart = (item) => {
    dispatch({
     type: 'ADD_TO_CART',
     payload: item
    })
  }

  const removeOneFromCart = (productId) => {
    dispatch({
      type: "REMOVE_ONE_FROM_CART",
      payload: { product_id: productId },
    });
  };

  return (
    <CartContext.Provider value={{ cart, dispatch, addToCart, removeOneFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
