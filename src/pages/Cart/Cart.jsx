import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContextProvider';
const Cart = () => {
    const {
        addToCart,
        removeFromCart,
        cartItems,
        removeItem,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        discountAmount,
        discount,
        grandTotal,
        deliveryCharges,
        applyDiscount,
        formatPrice,
        cartTotal,
    } = useContext(CartContext)

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Your Cart is Empty</h2>
                <Link to="/" className="btn btn-primary">
                    Continue Shopping
                </Link>
            </div>
        )
    }
    return (
        <section className="inner-sec-bg cart-sec">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12 col-12">
                        <div className="coupon-r-wrap products-coupen mb-30">
                            <div className="row justify-content-center text-center align-items-center">
                                <div className="products-c-wrap">
                                    <div>
                                        <h3 className="secondry-text text-hd-md mb-0">
                                            Delivering To:
                                        </h3>
                                    </div>
                                    <div>
                                        <h4 className="secondry-text-2 text-center">
                                            Address Selected By Customer
                                        </h4>
                                    </div>
                                    <div className="">
                                        <a href="" className="update-btn">Update Address</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-6 col-12">
                                <h2 className="inner-title medium mb-17">My Cart</h2>
                                <div className="c-acc-border m-auto"></div>
                            </div>
                        </div>
                        <div className="cart-content">
                            <div className="row">
                                <div className="col-lg-7 col-xl-8 col-12">
                                    <div className="cart-p-wrap mb-30 ">
                                        <div className="row nowrap">
                                            <div className="col-lg-6 col-6">
                                                <h3 className="primary-text">Product Name</h3>
                                            </div>
                                            <div className="col-lg-5 col-2">
                                                <div className="row nowrap">
                                                    <div className="col-lg-4">
                                                        <h3 className="primary-text">Price</h3>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <h3 className="primary-text">Quantity</h3>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <h3 className="primary-text">Subtotal</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-prod  d-flex flex-column ">
                                        {cartItems.map((item) => (
                                            <div className="row  align-items-center mb-5 prod-c-m">
                                                <div className="col-lg-6 col-6 ">
                                                    <div className="d-flex align-items-center ">
                                                        <div className="cart-item-image">
                                                            <img src={item.image} className="img-fluid" alt="" />
                                                        </div>
                                                        <div className="ms-4 ">
                                                            <h5 className="text-sm-hd-2 mb-0 ">{item.title}</h5>
                                                            {/* <a href="./shop-views.php" className="text-mini-md-3 secondry-color ul">View Store</a> */}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-6">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-2 col-3 p-0">
                                                            <h5 className="text-sm-hd-2">$ {item.price}</h5>
                                                        </div>
                                                        <div className="col-lg-5 col-6 col-md-5">
                                                            <div className="counter">
                                                                <div className="qty-container">
                                                                    <button onClick={() => decreaseQuantity(item.id)} className="qty-btn-minus btn-light" type="button"><i className="fa fa-minus"></i></button>
                                                                    <span className="input-qty qty-value">{item.quantity}</span>
                                                                    <button onClick={() => increaseQuantity(item.id)} className="qty-btn-plus btn-light" type="button"><i className="fa fa-plus"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-2 col-2">
                                                            <h5 className="text-sm-hd-2">${(item.price * item.quantity).toFixed(2)}</h5>
                                                        </div>
                                                        <div className="col-lg-2 col-12 col-md-2">
                                                            <div className="cros-btn-wrap-m">
                                                                <button onClick={() => removeItem(item.id)} className="cart-cross-btn " type="button"><i className="fa-solid fa-xmark"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-lg-5 col-xl-4 col-12">
                                    <div className="cart-box-wrap mm-t-20">
                                        <h4 className="secondry-text color-b mb-38 ">Order Summary</h4>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="text-sm-hd color-b">Subtotal</h5>
                                            <h5 className="text-sm-hd color-b">{formatPrice(cartTotal)}</h5>
                                        </div>
                                        <div className="cart-b-border-b mt-4 mb-4"></div>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="text-sm-hd color-b">Delivery Charges:</h5>
                                            <h5 className="text-sm-hd color-b">{formatPrice(deliveryCharges)}</h5>
                                        </div>
                                        <div className="cart-b-border-b mt-4 mb-4"></div>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="text-sm-hd color-b">Discount Price:</h5>
                                            <h5 className="text-sm-hd color-b">{formatPrice(discountAmount)}</h5>
                                        </div>
                                        <div className="cart-b-border-b mt-4 mb-4"></div>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="text-sm-hd bold color-b">Grand Total:</h5>
                                            <h5 className="text-sm-hd bold  secondry-color">{formatPrice(grandTotal)}</h5>
                                        </div>
                                        <div className="text-center m-t-left">
                                            <button className="primary-btn banner-btn cart-b-btn">Checkout</button>
                                            <Link to={'/'} className=" banner-btn cart-b-btn-2">Continue Shopping</Link>
                                        </div>
                                    </div>
                                </div>
                                <img src="./assets/images/leaf-bg-img.png" className="img-fluid leaf-img d-none d-lg-block" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Cart;
