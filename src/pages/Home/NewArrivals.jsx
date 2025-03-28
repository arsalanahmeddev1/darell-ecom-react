import React from 'react'
import ProductCard from '../../components/ui/ProductCard'
import {products} from '../../data';
const NewArrivals = () => {
  return (
    <section className="sec-second pb-160">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-12 col-12">
            <h2 className="title-text text-center mt-60">
              New Arrivals
            </h2>
            <h6 className="para text-center mb-20">
              Just in now
            </h6>
          </div>
          <div className="col-lg-4 col-12">
            <div className="arrivals-img">
              <img src="./assets/images/collection_3.png" className="img-fluid collection-img-3 d-none d-lg-block " alt="" />
            </div>
          </div>
          <div className="col-lg-8 col-12">
            <div className="row">
              {products.map((product, index) => (
                <div key={index} className="col-lg-4 col-6 mb-3">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
