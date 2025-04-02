import React, {useState, useEffect } from "react";

const CartContext = React.createContext();

const CartContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(() => {
    const saveCartItems = localStorage.getItem("cartItems");
    return saveCartItems ? JSON.parse(saveCartItems) : [];
  });

  const [discount, setDiscount] = useState(() => {
    const savedDiscount = localStorage.getItem('discount');
    return savedDiscount ? parseFloat(savedDiscount) : 0;
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
        item.id === productId && item.quantity > 1
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

  useEffect(() => {
    localStorage.setItem('discount', discount.toString());
  }, [discount]);

  const [deliveryCharges, setDeliveryCharges] = useState(0);

  const applyDiscount = (code) => {
    if(code === 'save10') {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  }

  const discountAmount = cartTotal * (discount / 100);

  const discountedTotal = cartTotal - discountAmount;

  const grandTotal = discountedTotal + deliveryCharges;

  const formatPrice = (price) => `$${parseFloat(price).toFixed(2)}`;

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
      discountAmount,
      discount,
      grandTotal,
      deliveryCharges,
      applyDiscount,
      formatPrice,
      cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export  {CartContext, CartContextProvider};