import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
// import imgfrom "next/img "

import SingleTestimonial from "../../components/Testimonial/SingleTestimonial";

import Testimonials from "../../components/data/testimonials.json";

const Testimonial = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const sliderSettings = {
    asNavFor: nav2,
    ref: slider1,
    dots: false,
    arrows: true,
    infinite: true,
    margin: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderNavSettings = {
    asNavFor: nav1,
    ref: slider2,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    margin: 10,
    vertical: true,
    arrows: false,
    focusOnSelect: true,
    centerPadding: "0",
    verticalSwiping: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          vertical: false,
          centerMode: false,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "Aman Singh Parihar",
      role: "FRONTEND ENGG.",
      text: "My career has taken a complete turn thanks to TFPCoding Classes. I knew nothing about web development before starting, and was guided expertly through the instructors to learn these concepts well, including advanced topics like React. The practical aspects of a course and individual mentoring helped me with interviews, and today I am happily placed with one of the reputed MNC’s. You are the TFP, thank you for letting me fulfill my dreams!",
      info: "Completed 5 courses • 4.8 average rating",
      images: ["/placeholder.svg?height=80&width=80"],
    },
    {
      id: 2,
      name: "Vidhi Agrawal",
      role: "PROFESSIONAL",
      text: "TFPCoding Classes changed my life when I learned Java and Android App Development. I would highly recommend WORK Sandesh as a self-paced online course that provides structured learning, hands-on experience, and continuous guidance from trainers, all of which made even the most challenging concepts easy to grasp. Now, I am successfully placed into an MNC and I would like to thank the TFPCoding Classes team for my success. A must for anyone seeking success at tech!",
      info: "Career changed after 3 courses • Now a Senior Developer",
      images: ["/placeholder.svg?height=80&width=80"],
    },
    {
      id: 3,
      name: "Himanshu Kushwaha",
      role: "MERN Stack Developer",
      text: "TFPCoding Classes changed my life when I learned Java and Android App Development. I would highly recommend WORK Sandesh as a self-paced online course that provides structured learning, hands-on experience, and continuous guidance from trainers, all of which made even the most challenging concepts easy to grasp. Now, I am successfully placed into an MNC and I would like to thank the TFPCoding Classes team for my success. A must for anyone seeking success at tech!",
      info: "Started a tech company • Credits our courses for success",
      images: ["/placeholder.svg?height=80&width=80"],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="it-testimonial-area it-testimonial-ptb it-testimonial-bg fix p-relative">
      {/* <img  src="/img/testimonial/testimonial-bg.jpg" alt="" fill={true} /> */}
      <div className="it-testimonial-shape-1 d-none d-xl-block">
        <img
          src="/img/testimonial/shape-2-1.png"
          width={641}
          height={610}
          alt=""
        />
      </div>
      <div className="container">
        <div className="it-testimonial-title-wrap mb-60">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-8 col-md-9 col-sm-8">
              <div className="it-testimonial-title-box">
                <span className="it-section-subtitle">testimonial</span>
                <h4 className="it-section-title">
                  Creating A Community Of Life Long
                  <span className="p-relative z-index">
                    {" "}
                    Learners.
                    <svg
                      className="title-shape-3"
                      width="250"
                      height="65"
                      viewBox="0 0 230 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{top:"50%", left:"-10%"}}
                    >
                      <path
                        d="M73.9865 8.52241C79.0935 6.03398 83.1809 4.26476 89.5018 3.31494C94.8148 2.51659 100.239 2.08052 105.59 1.95274C121.035 1.5839 135.743 4.94481 147.12 9.7789C159.246 14.931 167.348 22.7171 166.701 31.8511C165.923 42.8363 151.983 52.0035 134.146 57.1364C110.893 63.8284 82.3457 64.1305 59.197 61.1289C38.1374 58.3982 12.2599 51.9446 4.20444 40.1836C-2.8133 29.9382 12.6851 18.2085 28.1538 11.6691C40.9733 6.24978 56.315 2.97602 71.4123 4.09034C82.5481 4.91227 93.8269 6.91079 103.074 10.0494C113.489 13.5844 120.759 18.7016 128.482 23.7722"
                        stroke="#0AB99D"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-md-3 col-sm-4">
              <div className="it-testimonial-arrow text-end"></div>
            </div>
          </div>
        </div>
        {/* <div className="row">
        <div className="col-xl-12">
          <div className="it-testimonial-slide-wrap p-relative" >
          <div className="row align-items-center d-flex">
          <div className="col-xl-2 col-lg-2 col-md-3 d-flex">
          <Slider {...sliderNavSettings} className="it-testimonial-slide-nav-active text-center">
          <div className="it-testimonial-nav-item">
          <div className="it-testimonial-nav-thumb">
          </div>
          </div>
          <div className="it-testimonial-nav-item">
          <div className="it-testimonial-nav-thumb">
          <img  src='/img/avatar/avatar-1.png' width={60} height={60} alt="" />
          </div>
          </div>
          <div className="it-testimonial-nav-item">
          <div className="it-testimonial-nav-thumb">
          <img  src='/img/avatar/avatar-1.png' width={60} height={60} alt="" />
          </div>
          </div>
          </Slider>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-9">
          <Slider {...sliderSettings} className="it-testimonial-slide-active">
          {
                    Testimonials.map((testimonial) => {
                      return (
                        <div className="col-xl-6 col-lg-6 mb-30">
                          <SingleTestimonial
                            authorName={testimonial.title}
                            authorImg={testimonial.img }
                            designation={testimonial.designation}
                            description={testimonial.description}
                          />
                        </div>
                      );
                    }).slice(0, 6)
                  }
                </Slider>
              </div>
            </div>
          </div>
          </div>
          </div> */}
        <div style={{ backgroundColor: "#1a2942", padding: "40px" }}>
          
                  <div className="it-testimonial-slide-quote d-none d-xl-block">
                    <i className="fa-sharp fa-solid fa-quote-right"></i>
                  </div> 
          
          
          <div
            style={{
              width: "100%",
              // display: "flex",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            }}
          >


            <div
              style={{
                display: "flex",
                transition: "transform 0.5s ease",
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {/* <img  src='/img/avatar/avatar-1.png' width={60} height={60} alt="" /> */}
              {/* {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={{ flex: '0 0 100%', Width: '100%' }}>
            <div style={{ backgroundColor: 'none', padding: '40px', display: 'flex', position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginRight: '40px' }}>
            {testimonial.images.map((src, index) => (
                  <img
                  key={index}
                  src={src}
                  alt={`Profile ${index + 1}`}
                  width={80}
                  height={80}
                  style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                ))}
              </div>
                   
             
              <div style={{ color: 'white' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{testimonial.name}</h3>
                <span style={{ color: '#98f1e3', fontSize: '14px', marginBottom: '20px', display: 'block' }}>{testimonial.role}</span>
                <p>{testimonial.text}</p>
                <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#98f1e3' }}>{testimonial.info}</p>
              </div>

              </div>
              </div>
        ))} */}

              {testimonials.map((testimonial) => {
                return (
                  
                  <div
                    key={testimonial.id}
                    style={{ flex: "0 0 100%", Width: "100%", background:"#1a2942" }}
                  >
                    <SingleTestimonial
                      authorName={testimonial.name}
                      authorImg={testimonial.images[0]}
                      designation={testimonial.role}
                      description={testimonial.text}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: "40px",
              right: "40px",
              display: "flex",
              gap: "10px",
            }}
          >
            <button
              style={{
                backgroundColor: "#98f1e3",
                border: "none",
                width: "40px",
                height: "40px",
                borderRadius: "4px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "#1a2942",
              }}
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              style={{
                backgroundColor: "#98f1e3",
                border: "none",
                width: "40px",
                height: "40px",
                borderRadius: "4px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "#1a2942",
              }}
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
