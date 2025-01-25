import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

export default function ContactArea() {
	const form = useRef();

  	const sendEmail = (e) => {
    	e.preventDefault();

		emailjs
		.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
			publicKey: 'YOUR_PUBLIC_KEY',
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
									<p>Suspendisse ultrice gravida dictum fusce placerat <br />
										ultricies integer </p>
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
												<Link to="#">1564 Goosetown Drive <br />
													Matthews, NC 28105</Link> 
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
													<Link to="#">Mon - Fri: 9.00am to 5.00pm</Link>
													<span>[2nd sat Holiday]</span>
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
													<Link to="tel:+99358954565">+99- 35895-4565</Link>
													<Link to="mailto:supportyou@info.com">supportyou@info.com</Link>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div className="it-contact__bottom-box d-flex align-items-center justify-content-between">
									<div className="it-contact__scrool smooth">
										<Link to="#it-newsletter"><i className="fa-solid fa-arrow-down"></i>Customer Care</Link>
									</div>
									<div className="it-footer-social">
										<Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
										<Link to="#"><i className="fa-brands fa-instagram"></i></Link>
										<Link to="#"><i className="fa-brands fa-pinterest-p"></i></Link>
										<Link to="#"><i className="fa-brands fa-twitter"></i></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-5">
							<div className="it-contact__form-box">
								<form ref={form} onSubmit={sendEmail}>
									<div className="row">
										<div className="col-12 mb-25">
											<div className="it-contact-input-box">
												<label>Name*</label>
												<input type="text" placeholder="Name" name="user_name" />
											</div>
										</div>
										<div className="col-12 mb-25">
											<div className="it-contact-input-box">
												<label>Email Address*</label>
												<input type="email" placeholder="Email" name="user_email" />
											</div>
										</div>
										<div className="col-12 mb-25">
											<div className="it-contact-input-box">
												<label>Phone*</label>
												<input type="text" placeholder="Phone" name="user_phone" />
											</div>
										</div>
										<div className="col-12 mb-25">
											<div className="it-contact-input-box">
												<label>Subject*</label>
												<input type="text" placeholder="Subject" name="user_subject" />
											</div>
										</div>
										<div className="col-12 mb-25">
											<div className="it-contact-textarea-box">
												<label>Message</label>
												<textarea placeholder="Message" name="user_message"></textarea>
											</div>
										</div>
									</div>
								</form>
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
