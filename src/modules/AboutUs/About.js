// import img from "next/image"
export default function About() {
	return (
		
		<div className="it-about-4-area inner-about-style pt-120 pb-120">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-6 col-lg-6">
						<div className="it-about-4-thumb-wrap d-flex align-items-center justify-content-center justify-content-lg-end">
							<div className="it-about-4-thumb-double d-flex flex-column">
								<img className="mb-20" src="/img/about/thumb-4-1.jpg" alt="" width={236} height={350} />
								<img src="/img/about/thumb-4-2.jpg" alt="" width={236} height={350} />
							</div>
							<div className="it-about-4-thumb-single">
								<img src="/img/about/thumb-4-3.jpg" alt="" width={304} height={600} />
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6">
						<div className="it-about-3-title-box">
							<span className="it-section-subtitle">
								<img src="/img/category/inner.svg" alt="" width={18} height={18} />
								about us
							</span>
							<h2 className="it-section-title-3 pb-30">Empowering Your Future with Industry-<span>Leading Tech Education</span>
							</h2>
							<p>At TFP Coding Institute, we are committed to providing top-quality courses designed to equip you with the skills needed to excel in the modern tech world. Whether you're a beginner or an experienced developer, our expert-led training programs ensure you stay ahead in the competitive landscape.</p>
						</div>
						<div className="it-about-3-mv-box">
							<div className="row">
								<div className="col-xl-12">
									<div className="it-about-4-list-wrap d-flex align-items-start">
										<div className="it-about-4-list-icon">
											<span><i className="flaticon-video-1"></i></span>
										</div>
										<div className="it-about-3-mv-item">
											<span className="it-about-3-mv-title">Live Coding & Screen Sharing</span>
											<p>Experience live coding sessions where instructors share their screens, guiding you step by step through complex concepts.</p>
										</div>
									</div>
								</div>
								<div className="col-xl-12">
									<div className="it-about-4-list-wrap d-flex align-items-start">
										<div className="it-about-4-list-icon">
											<span><i className="flaticon-puzzle"></i></span>
										</div>
										<div className="it-about-3-mv-item">
											<span className="it-about-3-mv-title">Expert Guidance & Mentorship</span>
											<p>Get direct mentorship from experienced professionals who provide personalized feedback and support throughout your learning journey.
</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="it-about-3-btn-box p-relative">
							<a className="it-btn" href="contact">
								<span>
								admission open
								<svg width="17" height="14" viewBox="0 0 17 14" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M11 1.24023L16 7.24023L11 13.2402" stroke="currentcolor" strokeWidth="1.5"
										strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M1 7.24023H16" stroke="currentcolor" strokeWidth="1.5" strokeMiterlimit="10"
										strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								</span>
							</a>
							<div className="it-about-3-left-shape-3 d-none d-xl-block">
								<img src="/img/about/about-3-shap-3.png" alt="" width={266} height={52} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
