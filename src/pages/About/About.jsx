import React, {useRef} from 'react'
import Slider from 'react-slick';
import { feedbackSlides } from '../../data';
const About = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  }

  const handlePrev = () => {
    sliderRef.current.slidePrev();
  }
  const handleNext = () => {
    sliderRef.current.slickNext();
  }
  return (
    <>
      <section class="inner-sec-bg about-sec  ">
        <div class="container">
          <div class="row text-center justify-content-center">
            <div class="col-lg-12 col-12 mm-t-30">
              <h2 class="inner-title md mt-100 mb-0 ">About Us</h2>
              <div class="c-acc-border m-auto mb-50"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="about-img mt-50">
                <img src="./assets/images/about-img-2.png" alt="" />
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <h2 class="inner-title rg  mb-0 mt-40">We Provide The Best </h2>
              <h2 class="inner-title rg  mb-0 mm-b-20"><span>Property</span> For You!</h2>
              <p class="para light">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
              <p class="para light">
                he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </p>
              <p class="para light">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.
              </p>
            </div>
            <div class="col-lg-12 col-12">
              <p class="para light mt-30">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
              </p>
              <p class="para light">
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="testimonials about">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-lg-6 col-12">
              <h5 class="para tes ">Testimonials</h5>
              <h2 class="inner-title mb-30">
                Check What Our Satisfied
                Clients Said
              </h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-12">
              <div class="tes-abput-wrap text-center">
                <img src="./assets/images/about-tes-1.png" alt="" />
                <h4 class="about-text-md mt-20">Dollie Horton</h4>
                <p class="para light">President & CEO</p>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="tes-abput-wrap text-center mm-t-20">
                <img src="./assets/images/about-tes-2.png" alt="" />
                <h4 class="about-text-md mt-20">Dollie Horton</h4>
                <p class="para light">President & CEO</p>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="tes-abput-wrap text-center mm-t-20">
                <img src="./assets/images/about-tes-3.png" alt="" />
                <h4 class="about-text-md mt-20">Dollie Horton</h4>
                <p class="para light">President & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="feedbacks">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-lg-12 col-12">
              <h5 class="para light text-white mb-0">Our Leadership</h5>
              <h2 class="inner-title text-white mb-20">People's Experiences</h2>
            </div>
          </div>
          <div class="row justify-content-center text-center">
            <div class="col-lg-12 col-12">
              <div class="feed-back-slide position-relative" style={{ zIndex: 1 }}>
                {feedbackSlides.length > 1 ? (
                  <Slider {...settings}>
                    {feedbackSlides.map((slide) => (
                      <div className="feeback-s-wrap" key={slide.id}>
                        <img src={slide.image} className="img-fluid f-slide-img" alt="" />
                        <p className="para light text-white mt-30">{slide.text}</p>
                        <h4 className="secondry-text-2 text-white">{slide.name}</h4>
                        <p className="para sm light text-white mb-0">{slide.role}</p>
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="feeback-s-wrap">
                    <img src={feedbackSlides[0].image} className="img-fluid f-slide-img" alt="" />
                    <p className="para light text-white mt-30">{feedbackSlides[0].text}</p>
                    <h4 className="secondry-text-2 text-white">{feedbackSlides[0].name}</h4>
                    <p className="para sm light text-white mb-0">{feedbackSlides[0].role}</p>
                  </div>
                )}
              </div>
              <img src="./assets/images/feed-back-img.png" class="img-fluid feedback-icon-img" alt="" />
              <img src="./assets/images/left-img-22.png" class="f-left-shadow" alt="" />
            </div>
            <div class="col-lg-12 col-12">
              <div class="feedback-arrwos">
                <div class="arrows gap d-flex justify-content-end">
                  <div class="arrow-prev" onClick={handlePrev}>
                    <i class="fa-solid fa-arrow-left"></i>
                  </div>
                  <div class="arrow-next" onClick={handleNext}>
                    <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="brands">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-lg-3 col-6">
              <img src="./assets/images/client-1.png" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-3 col-6">
              <img src="./assets/images/client-2.png" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-3 col-6">
              <img src="./assets/images/client-3.png" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-3 col-6">
              <img src="./assets/images/client1-4.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
