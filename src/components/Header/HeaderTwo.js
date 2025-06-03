import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";
import MobileMenuItems from "./MobileMenuItems";

export default function HeaderTwo({ menuFormat, isLoggedIn, email }) {
  // const { menuFormat } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const cartItemsCount = useSelector((state) => state.product).addedProducts
    .length;

  useEffect(() => {
    // Sticky is displayed after scrolling for 100 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  
  return (
    <>
      <header className="it-header-height">
        <div className="it-header-2-top-area it-header-2-top-style black-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-6 col-md-5 col-sm-7">
                <div className="it-header-2-top-left">
                  <ul className="text-center text-sm-start">
                    <li className="d-none d-xl-inline-block">
                      <a href="tel:+91 9074644022">
                        <span>
                          <i className="fa-light fa-phone-volume"></i>
                        </span>
                        +91 9074644022
                      </a>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <a href="mailto:codingclassestfp@gmail.com">
                        <span>
                          <i className="fa-light fa-envelope-open-text"></i>
                        </span>
                        <div style={{marginTop:"4px"}}> codingclassestfp@gmail.com </div>
                      </a>
                    </li>
                    <li style={{marginTop:"8px"}}>
                      <a href="">
                        <span>
                          <i className="fal fa-map-marker-alt"></i>
                        </span>{" "}
                        <div style={{marginTop:"4px"}}>3rd Floor, RS tower, Circuit House Sq., Satna, (M.P.)</div>
                        
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-7 col-sm-5 d-none d-sm-block">
                <div className="it-header-2-top-right-wrap text-end">
                  <div className="it-header-2-top-right">
                    <ul>
                      <li>
                        <div className="it-header-2-top-right-text d-none d-md-block">
                          <Link to="/contact">Help |</Link>
                          <Link to="/contact"> support </Link>
                        </div>
                      </li>
                      <li>
                        <div className="it-header-2-top-social">
                          <a href="https://www.youtube.com/@TFPCodingclasses" style={{ fontSize: '15px' }}>
                          <i class="fa-brands fa-youtube"></i>
                          </a>

                          <a href="https://www.instagram.com/tfpcoding/" style={{ fontSize: '15px' }}>
                          <i className="fa-brands fa-instagram"></i>
                          </a>

                          <a href="https://x.com/tfpcoding" style={{ fontSize: '15px' }}>
                          <i className="fa-brands fa-x"></i>
                          </a>

                          <a href="https://www.linkedin.com/company/tfpcodingclass/" style={{ fontSize: '15px' }}>
                          <i class="fa-brands fa-linkedin-in"></i>
                          </a>

                          <a href="https://wa.me/9074644022" style={{fontSize: '16px' }}>
                            <i class="fa-brands fa-whatsapp"></i>
                          </a>


                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="header-sticky"
          className={`it-header-5-area it-header-1-style it-header-2-style ${
            isVisible ? "header-sticky" : ""
          }`}
        >
          <div className="container">
            <div className="it-header-wrap p-relative">
              <div className="row align-items-center">
                <div className="col-xl-2 col-6">
                  <div className="it-header-5-logo">
                    <Link to="/">
                    <img
                            src="\img\logo\tfp_logo.png"
                            alt=""
                            width={71}
                            height={30}
                          />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-7 d-none d-xl-block">
                  <div className="it-header-2-main-menu">
                    <nav className="it-menu-content">
                      <MenuItems onePage={menuFormat} />
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-6">
                  <div className="it-header-2-right d-flex align-items-center justify-content-end">
                    <div className="it-header-2-icon relative d-flex gap-3">
                     
                    {/* {isLoggedIn ? (
                        <div
                          className="user-avatar"
                          style={{
                            width: "32px",
                            height: "32px",
                            backgroundColor: "#1877f2",
                            color: "white",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "bold",
                          }}
                        >
                          {email[0].toUpperCase()}
                        </div>
                      ) : (
                        <Link to="/signin">
                          <i className="fa fa-sign-in"></i>
                        </Link>
                      )} */}
{/* 
                      <Link to="/cart">
                        <i className="fa-regular fa-cart-shopping"></i>
                      </Link> */}
                      {/* {cartItemsCount > 0 ? (
                        <span className="cart-badge">{cartItemsCount}</span>
                      ) : (
                        ""
                      )} */}
                    </div>
                    <div className="it-header-2-button d-none d-lg-block">
                      <Link className="it-btn-white sky-bg" to="/contact">
                        <span>
                          Contact Us
                          <svg
                            width="17"
                            height="14"
                            viewBox="0 0 17 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11 1.24023L16 7.24023L11 13.2402"
                              stroke="currentcolor"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1 7.24023H16"
                              stroke="currentcolor"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>
                    <div
                      className="it-header-2-bar d-xl-none"
                      onClick={() => {
                        setOffCanvasOpen(true);
                      }}
                    >
                      <button className="it-menu-bar">
                        <i className="fa-solid fa-bars"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="it-offcanvas-area">
        <div className={offCanvasOpen ? "itoffcanvas opened" : "itoffcanvas"}>
          <div className="it-offcanva-bottom-shape d-none d-xxl-block"></div>
          <div className="itoffcanvas__close-btn">
            <button
              className="close-btn"
              onClick={() => {
                setOffCanvasOpen(false);
              }}
            >
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="itoffcanvas__logo">
            <Link to="/">
              <img
                src="/img/logo/tfp_logo_white.png"
                alt=""
                width={60}
                height={20}
              />
            </Link>
          </div>
          <div className="itoffcanvas__text">
            <p>
              {/* Suspendisse interdum consectetur libero id. Fermentum leo vel orci
              porta non. Euismod viverra nibh cras pulvinar suspen. */}
            </p>
          </div>
          <div className="it-menu-mobile">
            <MobileMenuItems onePage={menuFormat} />
          </div>
          <div className="itoffcanvas__info">
            <h3 className="offcanva-title">Get In Touch</h3>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-envelope"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Email</span>
                <a href="maito:codingclassestfp@gmail.com">codingclassestfp@gmail.com</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-phone-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Phone</span>
                <a href="tel:+91 9074644022">+91 9074644022</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Location</span>
                <Link
                  to="htits://www.google.com/maps/@37.4801311,22.8928877,3z"
                  target="_blank"
                >
                 3rd Floor, RS tower, Circuit House Sq., Satna, (M.P.){" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={offCanvasOpen ? "body-overlay apply" : "body-overlay"}
      ></div>
    </>
  );
}

