import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

export default function ContactArea() {
	const form = useRef();

	const [formData, setFormData] = useState({
		user_name: "",
		user_email: "",
		user_phone: "",
		user_subject: "",
		user_message: "",
	  });
	
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	  };

  	const sendEmail = (e) => {
    	e.preventDefault();

		emailjs
		.sendForm('service_mtkfjmt', 'template_k9vb0sw', form.current, {
			publicKey: 'eCF3Z5BvNPrXxXj7d',
		})
		.then(
			() => {
				console.log('SUCCESS!');
			},
			(error) => {
				console.log('FAILED...', error.text);
			},
		);
  	};
 // Validate form fields
 const validateForm = () => {
    let errors = {};
    if (!formData.user_name.trim()) errors.user_name = "Name is required";
    if (!formData.user_email.trim()) {
      errors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      errors.user_email = "Invalid email format";
    }
    if (!formData.user_phone.trim()) {
      errors.user_phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.user_phone)) {
      errors.user_phone = "Invalid phone number (10 digits required)";
    }
    if (!formData.user_subject.trim()) errors.user_subject = "Subject is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .send(
        "service_mtkfjmt", // Replace with your EmailJS service ID
        "template_6mvhxnq", // Replace with your EmailJS template ID
        formData,
        "eCF3Z5BvNPrXxXj7d" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({
            user_name: "",
            user_email: "",
            user_phone: "",
            user_subject: "",
            user_message: "",
          });
          setErrors({});
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

	return (
		<div className="it-contact__area pt-120 pb-120">
			<div className="container">
				<div className="it-contact__wrap fix z-index-3 p-relative">
					<div className="it-contact__shape-1 d-none d-xl-block">
						<img  src="/img/contact/shape-2-1.png" alt="" width={340} height={340} />
					</div>
					<div className="row align-items-end">
						<div className="col-xl-7">
							<div className="it-contact__right-box">
								<div className="it-contact__section-box pb-20">
									<h4 className="it-contact__title pb-15">Get in Touch</h4>
									<p>Have questions or want to enroll in our coding classes? <br/>Contact us today and take the first step toward your dream IT career! 🚀</p>
								</div>
								<div className="it-contact__content mb-55">
									<ul>
										<li>
											<div className="it-contact__list d-flex align-items-start">
												<div className="it-contact__icon">
												<span><i className="fa-solid fa-location-dot"></i></span>
												</div>
												<div className="it-contact__text">
												<span>Our Address</span>
												<Link to="#">3rd Floor, RS tower, Circuit House Sq., Satna, Madhya Pradesh, India</Link> 
												</div>
											</div>
										</li>
										<li>
											<div className="it-contact__list d-flex align-items-start">
												<div className="it-contact__icon">
													<span><i className="fa-solid fa-clock"></i></span>
												</div>
												<div className="it-contact__text">
													<span>Hours of Operation</span>
													<Link to="#">Mon - Fri: 07.00am to 09.00pm</Link>
													<span>[sat-sun Holiday]</span>
												</div>
											</div>
										</li>
										<li>
											<div className="it-contact__list d-flex align-items-start">
												<div className="it-contact__icon">
													<span><i className="fa-solid fa-phone phone"></i></span>
												</div>
												<div className="it-contact__text">
													<span>contact</span>
													<Link to="tel:+919074644022">+91-9074644022</Link>
													<Link to="mailto:codingclassestfp@gmail.com">codingclassestfp@gmail.com</Link>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div className="it-contact__bottom-box d-flex align-items-center justify-content-between">
									<div className="it-contact__scrool smooth">
										<Link to="/contact"><i className="fa-solid fa-arrow-down"></i>Customer Care</Link>
									</div>
									<div className="it-footer-social">
										<Link to="https://www.youtube.com/@TFPCodingclasses"><i className="fa-brands fa-youtube"></i></Link>
										<Link to="https://www.instagram.com/tfpcoding/"><i className="fa-brands fa-instagram"></i></Link>
										<Link to="https://x.com/tfpcoding"><i className="fa-brands fa-x"></i></Link>
										<Link to="https://www.linkedin.com/company/tfpcodingclass/"><i className="fa-brands fa-linkedin-in"></i></Link>
										<Link to="https://wa.me/9074644022"><i className="fa-brands fa-whatsapp"></i></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-5">
							<div className="it-contact__form-box">
								<form onSubmit={handleSubmit}>
									<div className="row">
										<div className="col-12 mb-25">
											<div className="it-contact-input-box">
												<label>Name*</label>
												<input type="text" placeholder="Name"  name="user_name" value={formData.user_name} onChange={handleChange} />
												{errors.user_name && <small className="error">{errors.user_name}</small>}
											</div>
										</div>
										<div className="col-12 mb-25">
											<div className="it-contact-input-box">
												<label>Email Address*</label>
												<input type="email" placeholder="Email"  name="user_email" value={formData.user_email} onChange={handleChange}/>
												{errors.user_email && <small className="error">{errors.user_email}</small>}
											</div>
										</div>
										<div className="col-12 mb-25">
											<div className="it-contact-input-box">
												<label>Phone*</label>
												<input type="tel" placeholder="Phone" name="user_phone" value={formData.user_phone} onChange={handleChange}  />
												{errors.user_phone && <small className="error">{errors.user_phone}</small>}
											</div>
										</div>
										<div className="col-12 mb-25">
											<div className="it-contact-input-box">
												<label>Subject*</label>
												<input type="text" placeholder="Subject" name="user_subject" value={formData.user_subject} onChange={handleChange}/>
												{errors.user_subject && <small className="error">{errors.user_subject}</small>}
											</div>
										</div>
										<div className="col-12 mb-25">
											<div className="it-contact-textarea-box">
												<label>Message</label>
												<textarea placeholder="Message" name="user_message" value={formData.user_message} onChange={handleChange}></textarea>
											</div>
										</div>
									</div>
								
								<button type="submit" className="it-btn">
									<span>
									Send Message
										<svg width="17" height="14" viewBox="0 0 17 14" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M11 1.24023L16 7.24023L11 13.2402" stroke="currentcolor" strokeWidth="1.5"
											strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M1 7.24023H16" stroke="currentcolor" strokeWidth="1.5" strokeMiterlimit="10"
											strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</span>
								</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
