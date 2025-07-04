import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import MobileMenuItems from "./MobileMenuItems";

export default function FservicesHeader({ menuFormat, isLoggedIn, email }) {
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
      <header>
        <div className="it-header-transparent">
          <div className="it-header-2-top-area it-header-2-top-height">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8 col-md-5 col-sm-4">
                  <div className="it-header-2-top-left">
                    <ul className="text-center text-sm-start">
                      <li className="d-none d-lg-inline-block"  style={{paddingTop:"4px"}}>
                        <Link to="tel:+91 9074644022">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_451_1559)">
                                <path
                                  d="M15.8064 12.3892C15.397 11.9628 14.9031 11.7349 14.3797 11.7349C13.8605 11.7349 13.3624 11.9586 12.936 12.385L11.6021 13.7146C11.4924 13.6555 11.3827 13.6006 11.2771 13.5458C11.1252 13.4698 10.9816 13.398 10.8592 13.3221C9.60978 12.5285 8.47429 11.4943 7.38524 10.1562C6.85759 9.48926 6.50302 8.92785 6.24553 8.358C6.59166 8.04141 6.91247 7.71216 7.22483 7.39558C7.34303 7.27739 7.46122 7.15497 7.57941 7.03678C8.46585 6.15034 8.46585 5.00219 7.57941 4.11576L6.42704 2.96338C6.29618 2.83253 6.16111 2.69745 6.03447 2.56238C5.7812 2.30067 5.51527 2.03051 5.2409 1.77725C4.83145 1.37202 4.3418 1.15674 3.82682 1.15674C3.31184 1.15674 2.81375 1.37202 2.39163 1.77725C2.38741 1.78147 2.38741 1.78147 2.38319 1.78569L0.948004 3.23354C0.407699 3.77384 0.099556 4.43234 0.0320178 5.19637C-0.0692895 6.42894 0.293728 7.57709 0.572323 8.32845C1.25615 10.1731 2.27766 11.8826 3.80149 13.7146C5.65035 15.9223 7.87489 17.6656 10.416 18.894C11.3869 19.3541 12.6828 19.8986 14.1306 19.9914C14.2193 19.9957 14.3121 19.9999 14.3965 19.9999C15.3716 19.9999 16.1905 19.6495 16.8321 18.9531C16.8364 18.9446 16.8448 18.9404 16.849 18.9319C17.0685 18.666 17.3218 18.4254 17.5877 18.1679C17.7692 17.9949 17.955 17.8133 18.1365 17.6234C18.5544 17.1886 18.7739 16.6821 18.7739 16.1629C18.7739 15.6395 18.5501 15.1371 18.1238 14.715L15.8064 12.3892ZM17.3176 16.834C17.3133 16.834 17.3133 16.8383 17.3176 16.834C17.1529 17.0113 16.9841 17.1717 16.8026 17.349C16.5282 17.6107 16.2496 17.8851 15.9879 18.1932C15.5616 18.6491 15.0593 18.8644 14.4008 18.8644C14.3374 18.8644 14.2699 18.8644 14.2066 18.8602C12.9529 18.78 11.7879 18.2903 10.9141 17.8724C8.52494 16.7158 6.42704 15.0738 4.68371 12.9928C3.2443 11.2579 2.28188 9.65389 1.64449 7.93166C1.25193 6.8806 1.10841 6.0617 1.17172 5.28923C1.21394 4.79536 1.40389 4.38591 1.75424 4.03555L3.19365 2.59615C3.40048 2.40197 3.61998 2.29645 3.83526 2.29645C4.10119 2.29645 4.31647 2.45685 4.45155 2.59192C4.45577 2.59615 4.45999 2.60037 4.46421 2.60459C4.7217 2.84519 4.96653 3.09424 5.22401 3.36017C5.35487 3.49525 5.48995 3.63032 5.62502 3.76962L6.77739 4.92199C7.22483 5.36943 7.22483 5.7831 6.77739 6.23055C6.65498 6.35296 6.53679 6.47537 6.41437 6.59356C6.0598 6.95658 5.72211 7.29427 5.35487 7.62352C5.34643 7.63196 5.33799 7.63618 5.33376 7.64463C4.97075 8.00764 5.03828 8.36222 5.11427 8.60282C5.11849 8.61549 5.12271 8.62815 5.12693 8.64081C5.42663 9.36685 5.84874 10.0507 6.49036 10.8654L6.49458 10.8696C7.65961 12.3048 8.88796 13.4234 10.2429 14.2803C10.416 14.39 10.5933 14.4786 10.7621 14.5631C10.9141 14.639 11.0576 14.7108 11.18 14.7868C11.1969 14.7952 11.2138 14.8079 11.2307 14.8163C11.3742 14.8881 11.5093 14.9219 11.6486 14.9219C11.9989 14.9219 12.2184 14.7024 12.2902 14.6306L13.7338 13.187C13.8773 13.0435 14.1053 12.8704 14.3712 12.8704C14.6329 12.8704 14.8482 13.035 14.9791 13.1785C14.9833 13.1828 14.9833 13.1828 14.9875 13.187L17.3133 15.5128C17.7481 15.9434 17.7481 16.3866 17.3176 16.834Z"
                                  fill="currentcolor"
                                />
                                <path
                                  d="M10.8084 4.7574C11.9144 4.94313 12.919 5.46656 13.721 6.26857C14.523 7.07059 15.0422 8.07522 15.2322 9.18116C15.2786 9.45975 15.5192 9.65392 15.7936 9.65392C15.8274 9.65392 15.8569 9.6497 15.8907 9.64548C16.203 9.59483 16.4099 9.29935 16.3592 8.98698C16.1313 7.64888 15.4981 6.42897 14.5315 5.46233C13.5648 4.49569 12.3449 3.86252 11.0068 3.63458C10.6944 3.58393 10.4032 3.79076 10.3483 4.09891C10.2934 4.40705 10.4961 4.70675 10.8084 4.7574Z"
                                  fill="curentcolor"
                                />
                                <path
                                  d="M19.9771 8.82242C19.6014 6.61899 18.563 4.61395 16.9674 3.01836C15.3718 1.42277 13.3668 0.384369 11.1634 0.00868773C10.8552 -0.0461871 10.564 0.16487 10.5091 0.473013C10.4584 0.785377 10.6653 1.07664 10.9776 1.13151C12.9447 1.46498 14.7387 2.39785 16.1654 3.82037C17.5922 5.24712 18.5208 7.0411 18.8543 9.00815C18.9007 9.28675 19.1413 9.48092 19.4157 9.48092C19.4495 9.48092 19.479 9.4767 19.5128 9.47248C19.8209 9.42605 20.032 9.13057 19.9771 8.82242Z"
                                  fill="#currentcolor"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_451_1559">
                                  <rect width="20" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>{" "}
                          +91 9074644022
                        </Link>
                      </li>

                      <li  style={{paddingTop:"4px"}}>
                        <a href="codingclassestfp@gmail.com" >
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.8627 11.5702L15.509 7.21652C15.326 7.03352 15.0291 7.03352 14.8461 7.21652C14.663 7.39956 14.663 7.69638 14.8461 7.87947L18.3022 11.3356H10.0604C9.37673 11.3356 8.82055 10.7794 8.82055 10.0957V1.85397L12.1573 5.19063C12.3403 5.37363 12.6371 5.37363 12.8202 5.19063C13.0033 5.00758 13.0033 4.71077 12.8202 4.52767L8.58599 0.2935C8.40294 0.1105 8.10613 0.1105 7.92308 0.2935L0.450273 7.76645C0.267227 7.9495 0.267227 8.24631 0.450273 8.42941L11.7269 19.706C11.8148 19.7939 11.9341 19.8433 12.0584 19.8433C12.1827 19.8433 12.302 19.7939 12.3898 19.706L19.8627 12.2331C19.9506 12.1452 20 12.026 20 11.9017C20 11.7774 19.9506 11.6581 19.8627 11.5702ZM7.88315 1.65939V7.6292H1.91334L7.88315 1.65939ZM11.5896 18.2429L1.91334 8.56666H7.88315V10.0957C7.88315 11.2963 8.85993 12.2731 10.0605 12.2731H11.5896V18.2429ZM12.5271 18.2429V12.2731H18.4969L12.5271 18.2429Z"
                                fill="currentcolor"
                              />
                            </svg>
                          </span>
                          codingclassestfp@gmail.com 
                        </a>
                      </li>

                      <li className="d-none d-xl-inline-block" style={{marginTop:"8px"}}>
                        <a>
                          <span>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.1776 2.9731C17.2604 1.05586 14.7113 0 11.9999 0C9.28857 0 6.73941 1.05586 4.82222 2.9731C2.90498 4.89038 1.84912 7.43945 1.84912 10.1508C1.84912 15.6357 7.03529 20.1978 9.8215 22.6487C10.2087 22.9893 10.543 23.2835 10.8094 23.5323C11.1432 23.844 11.5716 24 11.9999 24C12.4283 24 12.8566 23.844 13.1904 23.5323C13.4568 23.2834 13.7911 22.9893 14.1783 22.6487C16.9645 20.1978 22.1507 15.6357 22.1507 10.1508C22.1506 7.43945 21.0948 4.89038 19.1776 2.9731ZM13.2497 21.5932C12.854 21.9412 12.5124 22.2419 12.2306 22.505C12.1012 22.6258 11.8985 22.6258 11.7691 22.505C11.4874 22.2418 11.1457 21.9412 10.75 21.5932C8.13062 19.289 3.25491 15 3.25491 10.1508C3.25491 5.32885 7.17783 1.40592 11.9998 1.40592C16.8218 1.40592 20.7447 5.32885 20.7447 10.1508C20.7448 15 15.8691 19.289 13.2497 21.5932Z"
                                fill="currentcolor"
                              />
                              <path
                                d="M12.0002 5.29395C9.53358 5.29395 7.52686 7.30062 7.52686 9.76724C7.52686 12.2339 9.53358 14.2405 12.0002 14.2405C14.4668 14.2405 16.4735 12.2339 16.4735 9.76724C16.4735 7.30062 14.4668 5.29395 12.0002 5.29395ZM12.0002 12.8346C10.3088 12.8346 8.93273 11.4585 8.93273 9.76719C8.93273 8.07584 10.3088 6.69978 12.0002 6.69978C13.6916 6.69978 15.0676 8.07584 15.0676 9.76719C15.0676 11.4585 13.6916 12.8346 12.0002 12.8346Z"
                                fill="currentcolor"
                              />
                            </svg>
                          </span>
                          <div style={{marginTop:"8px"}}>3rd Floor, RS tower, Circuit House Sq., Satna, (M.P.)</div>
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-7 col-sm-8 d-none d-sm-block">
                  <div className="it-header-2-top-right text-end">
                    <ul>
                     
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

          <div
            id="header-sticky"
            className={`it-header-2-area ${isVisible ? "header-sticky" : ""}`}
          >
            <div className="container container-1380">
              <div className="it-header-2-plr">
                <div className="it-header-wrap p-relative">
                  <div className="row align-items-center">
                    <div className="col-xl-2 col-6">
                      <div className="it-header-2-logo">
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
                        {/* <div className="it-header-2-icon relative d-flex gap-3">
                          
                        {isLoggedIn ? (
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
                      )}


                          <Link to="/cart">
                            <i className="fa-regular fa-cart-shopping"></i>
                          </Link>
                          {cartItemsCount > 0 ? (
                            <span className="cart-badge">{cartItemsCount}</span>
                          ) : (
                            ""
                          )}
                        </div> */}
                        <div className="it-header-2-button d-none d-md-block">
                          <Link className="it-btn" to="/contact">
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
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M1 7.24023H16"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </Link>
                        </div>
                        <div className="it-header-2-bar d-xl-none">
                          <button
                            className="it-menu-bar"
                            onClick={() => {
                              setOffCanvasOpen(true);
                            }}
                          >
                            <i className="fa-solid fa-bars"></i>
                          </button>
                        </div>
                      </div>
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
                src="\img\logo\tfp_logo_white.png"
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
                <Link to="#">
                  <i className="fal fa-envelope"></i>
                </Link>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Email</span>
                <Link to="maito:codingclassestfp@gmail.com ">codingclassestfp@gmail.com </Link>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <Link to="#">
                  <i className="fal fa-phone-alt"></i>
                </Link>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Phone</span>
                <a href="tel:9074644022">+91 9074644022</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <Link to="#">
                  <i className="fas fa-map-marker-alt"></i>
                </Link>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Location</span>
                <Link
                  to="htits://www.google.com/maps/@37.4801311,22.8928877,3z"
                  target="_blank"
                >
                  3rd Floor, RS tower, Circuit House Sq., Satna,(M.P.){" "}
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

   