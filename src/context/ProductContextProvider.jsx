import React, { useContext, createContext, useState, useEffect } from 'react'
const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if(!response.ok) {
          throw new Error('Faild to fetch products');
        }
        const json = await response.json();
        setProducts(json);
        setLoading(false);
        console.log(json);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        console.log('cant fetch product because of', error);
      }
    };
    
    fetchData();
  }, [])
  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext, ProductContextProvider }
