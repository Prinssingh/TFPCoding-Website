
import { Link } from "react-router-dom"
import { HashLink} from 'react-router-hash-link';

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
										<img  src="\img\logo\tfp_logo_white.png" alt="" width={180}  style={{marginLeft:"10%"}}/>
									</Link>
								</div>
								<div className="it-footer-text pb-5">
									<p>Transform your future with TFPCoding.  <br />Learn from industry experts, build practical skills, and launch your tech career with confidence.</p>
								</div>
								<div className="it-footer-social">
									<a href="https://www.youtube.com/@TFPCodingclasses"><i class="fa-brands fa-youtube"></i></a>
									<a href="https://www.instagram.com/tfpcoding/"><i className="fa-brands fa-instagram"></i></a>
									<a href="https://x.com/tfpcoding"><i className="fa-brands fa-x"></i></a>
									<a href="https://www.linkedin.com/company/tfpcodingclass/"><i class="fa-brands fa-linkedin-in"></i></a>
									<a href="https://wa.me/9074644022"><i className="fa-brands fa-whatsapp"></i></a>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-50">
							<div className="it-footer-widget footer-col-2">
								<h4 className="it-footer-title">our services:</h4>
								<div className="it-footer-list">
									<ul>
										<li><Link to="#"><i className="fa-regular fa-angle-right"></i>Web development</Link></li>
										<li><Link to="#"><i className="fa-regular fa-angle-right"></i>Programming Languages</Link></li>
										<li><Link to="#"><i className="fa-regular fa-angle-right"></i>Mobile app development</Link></li>
										<li><Link to="#"><i className="fa-regular fa-angle-right"></i>ML and AI</Link></li>
										<li><Link to="#"><i className="fa-regular fa-angle-right"></i>Data Analysis</Link></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-50">
							<div className="it-footer-widget footer-col-2">
								<h4 className="it-footer-title">quick as:</h4>
								<div className="it-footer-list">
									<ul>
										<li><Link to="/course"><i className="fa-regular fa-angle-right"></i>Courses</Link></li>
										<li><Link to="#"><i className="fa-regular fa-angle-right"></i>Teachers</Link></li>
										<li><HashLink to="#statics"><i className="fa-regular fa-angle-right"></i>Statics</HashLink></li>
										<li><Link to="/blog"><i className="fa-regular fa-angle-right"></i>blog and article</Link></li>
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
								<p>Copyright © 2025 <Link to="/">TFP Coding </Link> || All Rights Reserved</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
