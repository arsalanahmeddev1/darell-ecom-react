import React from 'react'

const Footer = () => {
  return (
    <footer class="footer">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-lg-12 col-12">
                <div class="footer-content">
                    <div class="row justify-content-between">
                        <div class="col-lg-6 col-12">
                            <div class="footer-border-wrap">
                                <h4 class="secondry-text-3  mb-20">ADD MORE BEAUTY TO YOUR EMAIL</h4>
                                <div class="footer-input-wrap">
                                    <input type="text" class="input-field footer-input-a" placeholder="Enter Your Email"/>
                                    <div class="f-icon-wrap">
                                        <i class="fa-solid fa-paper-plane"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-12">
                            <h4 class="secondry-text-3 mb-20 mm-t-20">STAY IN TOUCH WITH US</h4>
                            <ul class="d-flex footer-links-wrap">
                                <li><a href="tell: 123 456 789" class="primary-text "><span><img src="./assets/images/f-tell-i.svg" class="me-3" alt=""/></span> (+1) 123 456 789</a></li>
                                <li class="mm-t-20"><a href="mailto: carousel.email.com" class="primary-text"><span><img src="./assets/images/f-m-icon.svg" class="me-3" alt=""/></span>carousel.email.com</a></li>
                            </ul>
                            <ul class="footer-links">
                                <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                                <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                                <li><a href=""><i class="fa-brands fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-12">
                        <div class="footer-navs">
                            <ul class="f-nav-list d-flex justify-content-between">
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
    <div class="footer-bottom">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-12">
                    <h3 class="primary-text text-white mb-0">Copyright ©Carousel 2022. All rights reserved.</h3>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="footer-cards d-flex justify-content-end align-items-center mob-mt-20">
                        <a href=""><img src="./assets/images/footer-cards.png" class="img-fluid" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
