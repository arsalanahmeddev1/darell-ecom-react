import React from 'react'

const Hero = () => {
  return (
    <section className="banner">
        <div className="container">
            <div className="row">
                <div className="offset-3 col-lg-6 col-xl-6 col-8">
                    <h1 className="title-text">
                        Let Us Help You To
                        Choose The Best.
                    </h1>
                </div>
                <div className="offset-3 col-lg-5 col-8">
                    <p className="para">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                    <div className="mt-20">
                        <button className="primary-btn banner-btn">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
