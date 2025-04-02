import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
        <div className="row justify-content-between">
            <div className="col-lg-12 col-12">
                <div className="footer-content">
                    <div className="row justify-content-between">
                        <div className="col-lg-6 col-12">
                            <div className="footer-border-wrap">
                                <h4 className="secondry-text-3  mb-20">ADD MORE BEAUTY TO YOUR EMAIL</h4>
                                <div className="footer-input-wrap">
                                    <input type="text" className="input-field footer-input-a" placeholder="Enter Your Email"/>
                                    <div className="f-icon-wrap">
                                        <i className="fa-solid fa-paper-plane"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <h4 className="secondry-text-3 mb-20 mm-t-20">STAY IN TOUCH WITH US</h4>
                            <ul className="d-flex footer-links-wrap">
                                <li><a href="tell: 123 456 789" className="primary-text "><span><img src="./assets/images/f-tell-i.svg" className="me-3" alt=""/></span> (+1) 123 456 789</a></li>
                                <li className="mm-t-20"><a href="mailto: carousel.email.com" className="primary-text"><span><img src="./assets/images/f-m-icon.svg" className="me-3" alt=""/></span>carousel.email.com</a></li>
                            </ul>
                            <ul className="footer-links">
                                <li><a href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-12">
                        <div className="footer-navs">
                            <ul className="f-nav-list d-flex justify-content-between">
                                <li><a href="./about.php">ABOUT US</a></li>
                                <li><a href="./contact.php">CONTACT US</a></li>
                                <li><a href="">MY ACCOUNT</a></li>
                                <li><a href="">ORDER STATUS</a></li>
                                <li><a href="">PRIVACY POLICIES</a></li>
                                <li><a href="">TERMS & CONDITIONS</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12">
                    <h3 className="primary-text text-white mb-0">Copyright ©Carousel 2022. All rights reserved.</h3>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="footer-cards d-flex justify-content-end align-items-center mob-mt-20">
                        <a href=""><img src="./assets/images/footer-cards.png" className="img-fluid" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
