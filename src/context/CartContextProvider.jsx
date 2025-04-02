import React, {useState, useEffect } from "react";

const CartContext = React.createContext();

const CartContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(() => {
    const saveCartItems = localStorage.getItem("cartItems");
    return saveCartItems ? JSON.parse(saveCartItems) : [];
  });
  
  
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      console.log(existingItem);
      if(existingItem) {
        return prevItems.map((item) => 
          item.id === product.id
        ? {...item, quantity: item.quantity + 1} : item
        );
      }
      return [...prevItems, {...product, quantity: 1}]
    });
  };

  const increaseQuantity = (productId) => {
    setCartItems((prevItem) => (
      prevItem.map((item) => (
        item.id === productId
        ? {...item, quantity: item.quantity + 1} : item
      ))
    ))
  }

  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id !== productId);
      if(existingItem === 1) {
        return prevItems.filter((item) => item.id !== productId);
      } 
      return prevItems.map((item) => (
        item.id === productId
        ? {...item, quantity: item.quantity - 1 } : item
      ));
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);
      if(existingItem.quantity > 1) {
        return prevItems.map((item) => 
          item.id === productId
          ? {...item, quantity: item.quantity - 1} : item
        )
      }
      return prevItems.filter((item) => item.id !== productId)
    });
  };
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const  clearCart = () => (
    setCartItems([])
  )

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const removeItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])
  return (
    <CartContext.Provider 
    value={{
      cartItems,
      addToCart,
      removeFromCart,
      cartCount,
      increaseQuantity,
      decreaseQuantity,
      clearCart,
      cartTotal,
      removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export  {CartContext, CartContextProvider};