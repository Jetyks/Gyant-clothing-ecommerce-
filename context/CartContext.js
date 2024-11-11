import React, { useReducer, createContext} from 'react'

const initialState = {
    cart: [],
}
const CartContext = createContext();

const cartReducer = (state, action) => {
    switch(action.type){
        // Añadir un producto al carrito
        case 'ADD_TO_CART':
            return {
                ...state, cart: [...state.cart, action.payload]
            }
        // Eliminar un producto del carrito
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
            // Devolver el estado actual si no se reconoce la acción
            default:
                return state
    }
}

const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(cartReducer, initialState)

     // función para agregar un producto/item al carrito
     const addToCart = (item) => {
        dispatch({
         type: 'ADD_TO_CART',
         payload: item
        })
    }

    const removeFromCart = (item) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: item._id 
           })
    }

    return(
        <CartContext.Provider
            value={
                {
                    ...state, addToCart, removeFromCart
                }
            }
        >
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a ProductsProvider');
    }
    return context;
};

export { CartProvider, useCart }