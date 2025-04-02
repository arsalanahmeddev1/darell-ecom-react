import React, { useContext } from 'react'
import ProductCard from '../../components/ui/ProductCard'
import {CartContext} from '../../context/CartContextProvider';
import { ProductContext } from '../../context/ProductContextProvider';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
const NewArrivals = () => {
  const {products ,loading, error} = useContext(ProductContext);
  const limitProducts = products.slice(0,6)
  if(loading) {
    return <div className="">Loading...</div>
  }
  if(error) {
    return <div className="">Error {error}</div>
  }
  return (
    <section className="sec-second pb-160">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-12 col-12">
            <h2 className="title-text text-center mt-60">
              New Arrivals
            </h2>
            <h6 className="para text-center mb-20">
              Just in now
            </h6>
          </div>
          <div className="col-lg-4 col-12">
            <div className="arrivals-img">
              <img src="./assets/images/collection_3.png" className="img-fluid collection-img-3 d-none d-lg-block " alt="" />
            </div>
          </div>
          <div className="col-lg-8 col-12">
            <div className="row">
              {limitProducts.map((product, index) => (
                <div key={index} className="col-lg-4 col-6 mb-3">
                  <Link to={`/products/${product.id}`}>
                  <ProductCard product={product} />
                  </Link>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
