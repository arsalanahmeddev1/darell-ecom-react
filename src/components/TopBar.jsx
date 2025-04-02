import React from 'react'

const TopBar = () => {
  return (
    <div className="Top-bar">
      <div className="container">
        <div className="row align-items-center justify-contact-center">
          <div className="col-lg-4 col-7 order-right">
            <div className="d-flex">
              <div className="top-select">
                <select className="form-select" aria-label="Default select example">
                  <option selected>USD</option>
                  <option value="1">USD</option>
                  <option value="2">USD</option>
                  <option value="3">USD</option>
                </select>
              </div>
              <div className="top-select">
                <select className="form-select" aria-label="Default select example">
                  <option selected>ENG</option>
                  <option value="1">ENG</option>
                  <option value="2">ENG</option>
                  <option value="3">ENG</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-4 ">
            <div className="logo text-center">
              <a href="./" className=""><img src="../assets/images/logo.png" className="img-fluid" alt=""/></a>
            </div>
          </div>
          <div className="col-lg-4 col-1">
            <div className="d-flex justify-content-end">
              <div className="contact d-lg-block d-none ">
                <span>Support 24/7</span> <a href="tel: 123-456-7890" className="">123-456-7890</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
