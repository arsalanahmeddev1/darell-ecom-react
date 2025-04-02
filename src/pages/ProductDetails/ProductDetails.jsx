import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import {CartContext} from '../../context/CartContextProvider';
import { ProductContext } from '../../context/ProductContextProvider';
const ProductDetails = () => {
  const {products} = useContext(ProductContext)
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  const limitProducts = products.slice(0,4);
  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${id}`
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('cant show product');
        }
        const json = await response.json();
        setProduct(json)
        setLoading(false);
        console.log(json);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        console.log(`cant fetch product ${error}`);
      }
    }
    fetchData();
  }, [id])
  // const product = {title,price,descirption}
  if (error) {
    return <div className="">{error}</div>
  }
  if (loading) {
    return <div className="">Loading...</div>
  }

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  }
  return (
    <section class="inner-sec-bg product-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-12">
            <div class="coupon-r-wrap products-coupen mb-30">
              <div class="row justify-content-center text-center align-items-center">
                <div class="products-c-wrap">
                  <div>
                    <h3 class="secondry-text text-hd-md mb-0">
                      Delivering To:
                    </h3>
                  </div>
                  <div>
                    <h4 class="secondry-text-2 text-center">
                      Address Selected By Customer
                    </h4>
                  </div>
                  <div class="">
                    <a href="" class="update-btn">Update Address</a>
                  </div>
                </div>
              </div>
            </div>
            <img src="./assets/images/leaf-bg-img.png" class="img-fluid leaf-img d-lg-block d-none" alt="" />
            <div class="row">
              <div class="col-lg-5 col-12">
                <div class="products-d-wrap relative">
                  <div class="prodcts-d-img main">
                    <img src={product.image} class="img-fluid" alt="" />
                  </div>
                  <div class="heart-icon-d">
                    <button class="" type="button"><img src="./assets/images/heart-icon-1.svg" class="img-fluid" alt="" /></button>
                  </div>
                  <div class="share-icon-d">
                    <button class="" type="button"><img src="./assets/images/share-icon-1.svg" class="img-fluid" alt="" /></button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 col-12">
                    <div class="product-d-slide mt-3">
                      <Slider {...settings}>
                        {products.map((product) => (
                          <div class="sm-img-wrap" key={product.id}>
                            <div class="product-d-s-img-area prodcts-d-img sm-img">
                              <img src={product.image} alt="" />
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 col-12">
                <div class="products-d-content">
                  <div class="d-flex mt-20">
                    <div>
                      <h3 class="inner-title-2">
                        {product.title}
                      </h3>
                    </div>
                    <div>
                      <div class="message-icon-1">
                        <button class="" type="button"><img src="./assets/images/message-icon-2-1.svg" class="img-fluid" alt="" /></button>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="p-d-logo">
                      <img src="./assets/images/p-d-icon-3-1.svg" class="img-fluid" alt="" />
                    </div>
                    <div>
                      <h5 class="text-mini reg">Category: Beauty <br /> SKU: MS46891340</h5>
                    </div>
                  </div>
                  <div class="d-flex align-itemd-center mt-20">
                    {/* <h4 class="secondry-text light-gray mt-1 me-3">#999999</h4> */}
                    <h3 class="inner-heading-3 ">$ {product.price}</h3>
                  </div>
                  <div class="ratings">
                    <div class="d-flex align-items-center">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <span class="text-sm-hd ms-3">(6 Review)</span>
                    </div>
                  </div>
                  <p class="para mt-20">
                     {product.details}
                  </p>
                  <p class="para mb-20">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  </p>
                  <div class="border-bottom-3 mb-20"></div>
                  <div class="d-flex align-items-center">
                    <div class="counter">
                      <div class="qty-container">
                        <button class="qty-btn-minus btn-light" type="button"><i class="fa fa-minus"></i></button>
                        <input type="text" name="qty" value="0" class="input-qty" />
                        <button class="qty-btn-plus btn-light" type="button"><i class="fa fa-plus"></i></button>
                      </div>
                    </div>
                    <div>
                      <button class="primary-btn banner-btn location-btn ms-4">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-12">
                <h3 class="inner-heading-2 mt-78">Related Products</h3>
                <div class="border-bottom-3 mb-38"></div>
              </div>
            </div>
            <div class="row">
              {limitProducts.map((product) => (
              <div class="col-lg-3 col-6" key={id}>
                <div class="prod-box-wrap-2 mt-16 text-center ">
                  <div class="prod-box-inner">
                    <div class="prod-img">
                      <img src={product.image} class="img-fluid" alt="" />
                    </div>
                    <h6 class="para">
                      Beauty
                    </h6>
                    <h4 class="primary-text">
                      {product.title}
                    </h4>
                    <div class="ratings-stars">
                      <div class="d-flex justify-content-center">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fas fa-star 
                             ${i < Math.round(product.rating.rate) ? 'text-warning' : 'text-muted'}`}
                          ></i>

                        ))}
                      </div>
                    </div>
                    <h4 class="primary-text mt-3">
                      $ {product.price}
                    </h4>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default ProductDetails
