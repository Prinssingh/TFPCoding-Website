
import { Link } from "react-router-dom"

export default function Footer(props) {
	const { footerLogo, footerClass } = props
	return (
		<footer>
			<div className="it-footer-area it-footer-bg black-bg relative pt-120 pb-90">
				
				<div className="container">
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 mb-50">
							<div className="it-footer-widget footer-col-2">
								<div className="it-footer-logo pb-25">
									<Link to="/">
										<img  src={`/img/logo/${footerLogo ? footerLogo : "logo-white.png"}`} alt="" width={151} height={40} />
									</Link>
								</div>
								<div className="it-footer-text pb-5">
									<p>Transform your future with TFPCoding.  <br />Learn from industry experts, build practical skills, and launch your tech career with confidence.</p>
								</div>
								<div className="it-footer-social">
									<a href="https://www.youtube.com/@TFPCodingclasses"><i class="fa-brands fa-youtube"></i></a>
									<a href="https://www.instagram.com/tfpcoding/"><i className="fa-brands fa-instagram"></i></a>
									<a href="fa-brands fa-linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
									<a href="https://x.com/tfpcoding"><i className="fa-brands fa-x"></i></a>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-50">
							<div className="it-footer-widget footer-col-2">
								<h4 className="it-footer-title">our services:</h4>
								<div className="it-footer-list">
									<ul>
										<li><Link to="#"><i className="fa-regular fa-angle-right"></i>Web development</Link></li>
										<li><Link to="#"><i className="fa-regular fa-angle-right"></i>UI/UX Design</Link></li>
										<li><Link to="#"><i className="fa-regular fa-angle-right"></i>Management</Link></li>
										<li><Link to="#"><i className="fa-regular fa-angle-right"></i>Digital Marketing</Link></li>
										<li><Link to="#"><i className="fa-regular fa-angle-right"></i>Blog News</Link></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-50">
							<div className="it-footer-widget footer-col-2">
								<h4 className="it-footer-title">quick as:</h4>
								<div className="it-footer-list">
									<ul>
										<li><Link to="#"><i className="fa-regular fa-angle-right"></i>templates</Link></li>
										<li><Link to="#"><i className="fa-regular fa-angle-right"></i>blog and article</Link></li>
										<li><Link to="#"><i className="fa-regular fa-angle-right"></i>integrations</Link></li>
										<li><Link to="#"><i className="fa-regular fa-angle-right"></i>webinars</Link></li>
										<li><Link to="#"><i className="fa-regular fa-angle-right"></i>privacy & policy</Link></li>
									</ul>
								</div>
							</div>
						</div>
						{/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
							<div className="it-footer-widget footer-col-4">
								<h4 className="it-footer-title">Gallery</h4>
								<div className="it-footer-gallery-box">
									<div className="row gx-0">
										<div className="col-md-4 col-4">
											<div className="it-footer-thumb mb-10">
												<img  src="/img/footer/thumb-1-1.png" alt="" width={80} height={80} />
											</div>
										</div>
										<div className="col-md-4 col-4">
											<div className="it-footer-thumb mb-10">
												<img  src="/img/footer/thumb-1-2.png" alt="" width={80} height={80} />
											</div>
										</div>
										<div className="col-md-4 col-4 mb-10">
											<div className="it-footer-thumb">
												<img  src="/img/footer/thumb-1-3.png" alt="" width={80} height={80} />
											</div>
										</div>
										<div className="col-md-4 col-4">
											<div className="it-footer-thumb">
												<img  src="/img/footer/thumb-1-4.png" alt="" width={80} height={80} />
											</div>
										</div>
										<div className="col-md-4 col-4">
											<div className="it-footer-thumb">
												<img  src="/img/footer/thumb-1-5.png" alt="" width={80} height={80} />
											</div>
										</div>
										<div className="col-md-4 col-4">
											<div className="it-footer-thumb">
												<img  src="/img/footer/thumb-1-6.png" alt="" width={80} height={80} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
			
			<div className="it-copyright-area it-copyright-height">
				<div className="container">
					<div className="row">
						<div className="col-12 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
							<div className="it-copyright-text text-center">
								<p>Copyright © 2023  <Link to="#">TFP Coding </Link> || All Rights Reserved</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
