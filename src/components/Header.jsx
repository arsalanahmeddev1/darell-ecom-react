import React from 'react'
import {navList} from '../data';
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
  <div className="container">
    <div className="row align-items-center justify-content-center">
      <div className="col-lg-3 ">
        <div className="s-drop multi-drop d-none d-lg-block">
          <div className="dropdown">
            <button className="s-drop-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-solid fa-bars"></i> SHOP BY CATEGORY
            </button>
            <ul className="dropdown-menu">
              <div className="section-wrapper">
                <nav className="accordion-wrapper">
                  <ul className="ul-reset">
                    {navList.map((item,index) => (
                      <li key={index}>
                        <Link to={item.path}></Link>
                      </li>
                    ))}
                    <li>
                      <a href="#">Beauty</a>
                      <ul className="ul-reset">
                        <li><a href="#">Rose Swag Bag</a></li>
                        <li><a href="#">Kit Rose</a></li>
                        <li><a href="#">Rose Gold</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Lipstick</a>
                      <ul className="ul-reset">
                        <li><a href="#">Sub-Category One</a></li>
                        <li><a href="#">Sub-Category Two</a></li>
                        <li><a href="#">Sub-Category Three</a></li>
                        <li><a href="#">Sub-Category Four</a></li>
                        <li><a href="#">Sub-Category Five</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Mascara</a>
                      <ul className="ul-reset">
                        <li><a href="#">Sub-Category One</a></li>
                        <li><a href="#">Sub-Category Two</a></li>
                        <li><a href="#">Sub-Category Three</a></li>
                        <li><a href="#">Sub-Category Four</a></li>
                        <li><a href="#">Sub-Category Five</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Nails</a>
                      <ul className="ul-reset">
                        <li><a href="#">Sub-Category One</a></li>
                        <li><a href="#">Sub-Category Two</a></li>
                        <li><a href="#">Sub-Category Three</a></li>
                        <li><a href="#">Sub-Category Four</a></li>
                        <li><a href="#">Sub-Category Five</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Perfumes</a>
                      <ul className="ul-reset">
                        <li><a href="#">Sub-Category One</a></li>
                        <li><a href="#">Sub-Category Two</a></li>
                        <li><a href="#">Sub-Category Three</a></li>
                        <li><a href="#">Sub-Category Four</a></li>
                        <li><a href="#">Sub-Category Five</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </ul>
          </div>
        </div>

      </div>
      <div className="col-lg-5">
        <nav className="primary-navs">
          <ul className="nav-list">
            {navList.map((item,index) => (
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <button className="menu-toggler close-btn"><i className="fa-solid fa-xmark"></i></button>
        </nav>
      </div>
      <div className="col-lg-4 col-12 pe-5">

        <div className="d-flex align-items-center gap-20">
          <div className="">
            <a href="#" className="menu-toggler open-menu "><i className="fa-solid fa-bars"></i></a>
          </div>
          <div className="flex-grow">
            <div className="search-bar">
              <input type="text" className="input-field" placeholder="Search Product"/>
              <div className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <ul className="header-items gap-20">
            <li className="header-drop pro-drop">
              <div className="dropdown">
                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="./assets/images/user-profile-av.svg" className="img-fluid profile-av-img" alt=""/>
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><img src="./assets/images/drop-av-1.svg" alt=""/> Profile</a>
                  </li>
                  <li><a className="dropdown-item" href="#"><img src="./assets/images/drop-av-2.svg" alt=""/>Order Log</a>
                  </li>
                  <li><a className="dropdown-item" href="#"><img src="./assets/images/drop-av-3.svg" alt=""/>Logout</a></li>

                </ul>
              </div>
            </li>
            <li className="h-icon">
              <a href=""><img src="./assets/images/heart-icon.svg" className="img-fluid heart-img" alt=""/><span
                  className="heart-icon">3</span></a>
            </li>
            <li className="h-icon">
              <a href=""><img src="./assets/images/shp-icon.svg" className="img-fluid shop-img" alt=""/><span
                  className="shop-icon">12</span></a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header
