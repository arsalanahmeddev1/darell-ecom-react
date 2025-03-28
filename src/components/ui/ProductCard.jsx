import React from 'react'
const ProductCard = ({product}) => {
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
      </div>
    </div>
  )
}

export default ProductCard
