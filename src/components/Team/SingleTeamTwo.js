

import { Link } from "react-router-dom";

export default function SingleTeamTwo( props ) {
	const { teamClass, Slug, Img, Teacher, Designation, imgWidth, imgHeight } = props;
	
	return (
		<div className={teamClass ? teamClass : 'it-team-3-item text-center'}> 
			<div className="it-team-3-thumb fix">
				<img src={Img ? Img : '/img/team/team-3-1.jpg'} alt="" width={imgWidth ? imgWidth : 309} height={imgHeight ? imgHeight : 357} />
			</div>
			<div className="it-team-3-content">
				<div className="it-team-3-social-box p-relative">
					<button>
						<i className="fa-light fa-share-nodes"></i>
					</button>
					<div className="it-team-3-social-wrap">
						<Link to="#"><i className="fa-brands fa-instagram"></i></Link>
						<Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
						<Link to="#"><i className="fa-brands fa-pinterest-p"></i></Link>
						<Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
					</div>
				</div>
				<div className="it-team-3-author-box">
					<h4 className="it-team-3-title">
						<Link to={`/teacher/${Slug ? Slug : 'details'}`}>{Teacher ? Teacher : 'Nathan Allen'}</Link>
					</h4>
					<span>{Designation ? Designation : 'Teacher'}</span>
				</div>
			</div>
		</div>
	)
}
