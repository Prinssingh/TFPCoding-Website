import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

export default function TeacherDetailsArea({item}) {

	if (!item) {
		return <div>Loading...</div>;
	}
	const { img, name, designation, bio, email, phone, address } = item;

	return (
		<div className="it-teacher-details-area pt-120 pb-120">
			<div className="container">
				<div className="it-teacher-details-wrap">
					<div className="row">
						<div className="col-xl-3 col-lg-3">
							<div className="it-teacher-details-left">
								<div className="it-teacher-details-left-thumb">
									<img src={img ? img : "/img/team/team-inner.jpg"} alt="" width={284} height={284} />
								</div>
								<div className="it-teacher-details-left-social text-center">
									<Link to="#"><i className="fab fa-facebook-f"></i></Link>
									<Link to="#"><i className="fab fa-twitter"></i></Link>
									<Link to="#"><i className="fab fa-skype"></i></Link>
									<Link to="#"><i className="fab fa-linkedin-in"></i></Link>
								</div>
								<div className="it-teacher-details-left-info">
									<ul>
										<li>
											<i className="fa-light fa-phone-volume"></i>
											<a to={`tel:${phone ? phone : "(568) 367-987-237"}`}>{phone ? phone : "(568) 367-987-237"}</a>
										</li>
										<li>
											<i className="fa-light fa-location-dot"></i>
											<a to="https://www.google.com/maps" target="_blank">{address ? address : "Hudson, Wisconsin(WI), 54016"}</a>
										</li>
										<li>
											<i className="fa-light fa-envelope"></i>
											<a to={`mailto:${email ? email : "govillage@gmail.com"}`}>{email ? email : "govillage@gmail.com"}</a>
										</li>
									</ul>
								</div>
								<div className="it-teacher-details-left-btn">
									<Link className="it-btn" to="/contact">
										<span>
											Contact us teacher
											<svg width="17" height="14" viewBox="0 0 17 14" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path d="M11 1.24023L16 7.24023L11 13.2402" stroke="currentcolor" strokeWidth="1.5"
												strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M1 7.24023H16" stroke="currentcolor" strokeWidth="1.5"
												strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</span>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-xl-9 col-lg-9">
							<div className="it-teacher-details-right">
								<div className="it-teacher-details-right-title-box">
									<h4>{name ? name : "Melvin Warner"}</h4>
									<span>{designation ? designation : "teacher"}</span>
									<p>{bio ? bio : "Tempor orci dapibus ultrices in iaculis nunc sed augue. Feugiat in ante metus dictum at tempor commodo. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Arcu dictum varius duis at consectetur lorem donec massa"}</p>
									<p>Tempor orci dapibus ultrices in iaculis nunc sed augue. Feugiat in ante metus dictum at tempor commodo lectus magna fringilla.</p>
								</div>
								<div className="it-teacher-details-right-content mb-40">
									<h4>Education:</h4>
									<p>I’ve spent years figuring out the “formula” to teaching technical skills in a classroom environment, and I’m really excited to finally share my expertise with you. I can confidently say that my online courses are without a doubt the most comprehensive ones on the market.</p>
								</div>
								<div className="it-progress-bar-wrap">
									<h4>Expertise & Skills:</h4>
									<div className="it-progress-bar-item">
										<label>Lectures</label>
										<div className="it-progress-bar">
											<ProgressBar 
												completed={90} 
												className="progress-bar"
												baseBgColor="rgba(137, 186, 180, 0.3)"
												bgColor="#116E63"
												labelColor="#fff"
												height="10px"
												animateOnRender
												transitionTimingFunction="ease"
											/>
										</div>
									</div>
									<div className="it-progress-bar-item">
										<label>My Skill</label>
										<div className="it-progress-bar">
											<ProgressBar 
												completed={82} 
												className="progress-bar"
												baseBgColor="rgba(137, 186, 180, 0.3)"
												bgColor="#116E63"
												labelColor="#fff"
												height="10px"
												animateOnRender
												transitionTimingFunction="ease"
											/>
										</div>
									</div>
									<div className="it-progress-bar-item">
										<label>Consulting</label>
										<div className="it-progress-bar">
											<ProgressBar 
												completed={65} 
												className="progress-bar"
												baseBgColor="rgba(137, 186, 180, 0.3)"
												bgColor="#116E63"
												labelColor="#fff"
												height="10px"
												animateOnRender
												transitionTimingFunction="ease"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
