import React, {useContext} from 'react'
import Button from './Button';
import {CartContext} from '../../context/CartContextProvider';
const ProductCard = ({product}) => {
  const {addToCart} = useContext(CartContext);
  const {title, description, price, image} = product
  
  
  return (
    <div className="prod-box-wrap-2 text-center">
      <div className="prod-box-inner">
        <div className="prod-img">
          <img src={image} className="img-fluid" alt="" />
          
        </div>
        <h6 className="para">
          {title}
        </h6>
        <h4 className="primary-text">
          {description}
        </h4>
        <div className="ratings-stars">
          <div className="d-flex justify-content-center">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
        <h4 className="primary-text mt-3">
          ${price}
        </h4>
        <Button variant='primary-btn banner-btn mt-4' onClick={() => addToCart(product)} size='small'>Add To Cart</Button>
      </div>
    </div>
  )
}

export default ProductCard
