
import { Link } from "react-router-dom";

export default function SingleCourseThree( props ) {
	const { courseClass, Slug, Img, Title, Description, Price, lessonCount, classDuration, imgWidth, imgHeight } = props;
	
	return (
		<div className={courseClass ? courseClass : 'it-class-item text-center'}>
			<div className="it-class-thumb p-relative">
				<div className="fix">
					<img  src={Img ? Img : '/img/class/class-1-1.jpg'} alt={Title ? Title : ""} width={imgWidth ? imgWidth : 422} height={imgHeight ? imgHeight : 221} />
				</div>
				
				<div className="it-class-rate">
					<span>${Price ? Price : '60'}</span>
				</div>
			</div>
			<div className="it-class-text">
				<h4 className="it-class-title">
					<Link to={`/course/${Slug ? Slug : 'details'}`}>{Title ? Title : 'Painting class For Young Children'}</Link>
				</h4>
				<p>{Description ? Description : 'Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis auctor elit sed vulputate mi sit.'}</p>
			</div>
			<div className="it-class-meta-box d-flex justify-content-between align-items-center">
				<div className="it-class-meta text-center">
					<i className="fa-sharp fa-light fa-file-invoice"></i>
					<span>{lessonCount ? lessonCount : '02'} Lessons</span>
				</div>
				<div className="it-class-meta text-center">
					<i className="fa-regular fa-clock"></i>
					<span>{classDuration ? classDuration : '4h 50m'}</span>
				</div>
				<div className="it-class-meta text-center">
					<i className="fa-light fa-users"></i>
					<span>Students</span>
				</div>
			</div>
		</div>
	)
}
