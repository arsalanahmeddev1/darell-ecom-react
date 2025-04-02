import React, { useContext } from 'react'
import Slider from 'react-slick'
// import {products} from '../../data';
import Button from '../../components/ui/Button';
import {CartContext} from '../../context/CartContextProvider';
import { ProductContext } from '../../context/ProductContextProvider';
const FeaturedProducrs = () => {
    const { addToCart, removeFromCart, cartItems } = useContext(CartContext)
    const {products, loading, error} = useContext(ProductContext)
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        // responsive: [
        //   {
        //     breakpoint: 1024, 
        //     settings: {
        //       slidesToShow: 2,
        //     },
        //   },
        //   {
        //     breakpoint: 600, 
        //     settings: {
        //       slidesToShow: 1,
        //     },
        //   },
        // ],
    };

    if (loading) {
        return <div className="">loading...</div>
    }
    if (error) {
        return <div className="">Error: {error}</div>
    }
    return (
        <section className="sec-forth">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12">
                                <h2 className="title-text text-white mb-0">
                                    Featured Products
                                </h2>
                                <p className="para text-white mb-25">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="arrows mb-60 gap d-flex justify-content-end">
                                    <div className="arrow-left">
                                        <i className="fas fa-chevron-left"></i>
                                    </div>
                                    <div className="arrow-right">
                                        <i className="fas fa-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-12">
                        <div className="second-slide">
                            <Slider {...settings}>
                                {products.map((product) => (
                                    <div key={product.id} className="prod-box-wrap-3 text-center">
                                        <div className="prod-box-inner">
                                            <div className="prod-img">
                                                <img src={product.image} className="img-fluid" alt="" />
                                            </div>
                                            <h6 className="para">
                                                {product.title}
                                            </h6>
                                            <h4 className="primary-text line-h">
                                                {product.description}
                                            </h4>
                                            <div className="ratings-stars">
                                                <div className="d-flex justify-content-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <i
                                                            key={i}
                                                            className={`fas fa-star 
                                                 ${i < Math.round(product.rating.rate)
                                                                    ? "text-warning" : "text-muted"
                                                                }`}
                                                        >
                                                        </i>
                                                    ))}
                                                </div>
                                            </div>
                                            <h4 className="primary-text mt-3">
                                                $ {product.price}
                                            </h4>
                                        </div>
                                        <Button variant='primary-btn banner-btn' onClick={() => addToCart(product)} size='small'>Add To Cart</Button>
                                    </div>
                                ))}

                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-12 mt-60">
                        <img src="./assets/images/banner-img-bg.png" className="img-fluid " alt="" />
                    </div>
                    <div className="col-lg-6 col-12 mt-60">
                        <img src="./assets/images/banner52.png" className="img-fluid " alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <div className="d-flex mt-78 mb-60">
                            <div>
                                <div className="v-icon-wrap me-5">
                                    <i className="fas fa-house-user"></i>
                                </div>
                            </div>
                            <div className="">
                                <h2 className="title-text">
                                    Top Vendors
                                </h2>
                                <p className="para">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="store-box-wrap text-center mm-b-50">
                                    <h4 className="secondry-text text-md-h">
                                        My Store 1
                                    </h4>
                                    <p className="para mb-30">
                                        4 Products
                                    </p>
                                    <div className="d-flex test-prod-area">
                                        <div>
                                            <img src="./assets/images/15-300x300.png" className="img-fluid" alt="" />
                                        </div>
                                        <div>
                                            <img src="./assets/images/pdt-2.png" className="img-fluid" alt="" />
                                        </div>
                                        <div>
                                            <img src="./assets/images/pdt18.png" className="img-fluid" alt="" />
                                        </div>
                                        <div>
                                            <img src="./assets/images/35-300x300.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className="avatar border-img-pp avatar-mm">
                                        <img src="./assets/images/circle-img-1.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="store-box-wrap text-center mm-b-50">
                                    <h4 className="secondry-text text-md-h">
                                        My Store 2
                                    </h4>
                                    <p className="para mb-30">
                                        5 Products
                                    </p>
                                    <div className="d-flex test-prod-area">
                                        <div>
                                            <img src="./assets/images/15-300x300.png" className="img-fluid" alt="" />
                                        </div>
                                        <div>
                                            <img src="./assets/images/5-300x300.png" className="img-fluid" alt="" />
                                        </div>
                                        <div>
                                            <img src="./assets/images/16-300x300.png" className="img-fluid" alt="" />
                                        </div>
                                        <div>
                                            <img src="./assets/images/17-300x300.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className="avatar border-img-y avatar-mm">
                                        <img src="./assets/images/circle-img-2.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="store-box-wrap text-center mm-b-50">
                                    <h4 className="secondry-text text-md-h">
                                        My Store 3
                                    </h4>
                                    <p className="para mb-30">
                                        6 Products
                                    </p>
                                    <div className="d-flex test-prod-area">
                                        <div>
                                            <img src="./assets/images/25-300x300.png" className="img-fluid" alt="" />
                                        </div>
                                        <div>
                                            <img src="./assets/images/pdt18.png" className="img-fluid" alt="" />
                                        </div>
                                        <div>
                                            <img src="./assets/images/14-300x300.png" className="img-fluid" alt="" />
                                        </div>
                                        <div>
                                            <img src="./assets/images/pdt20-420x420.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className="avatar border-img-p avatar-mm">
                                        <img src="./assets/images/circle-img-3.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-12">
                                <div className="coupon-r-wrap  mt-38">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-lg-3 col-12">
                                            <h3 className="secondry-text text-hd-md mb-0 text-md-center text-sm-center">
                                                Carousel Special Gifts!
                                            </h3>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <h4 className="secondry-text-2 text-center mm-t-20">
                                                Wrap New Offers Every Single Day on Monday - Coupon Code: 3232OD2E
                                            </h4>
                                        </div>
                                        <div className="col-lg-3 col-12">
                                            <div className="d-flex justify-content-end coupen-btn-md mm-t-20">
                                                <button className="primary-btn banner-btn coupen-btn">Get Coupon</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducrs
