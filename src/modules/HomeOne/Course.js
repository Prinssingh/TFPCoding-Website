
import SingleCourse from "../../components/Course/SingleCourse";
import Courses from "../../components/data/courses.json"


export default function Course() {
	return (
		<div id="it-course" className="it-course-area p-relative grey-bg pt-120 pb-120">
			<div className="it-course-shape-1 d-none d-xl-block">
				<img src="/img/course/shape-1-1.png" width={365} height={264} alt="" />
			</div>
			<div className="it-course-shape-2 d-none d-xxl-block">
				<img src="/img/course/shape-1-2.png" width={62} height={93} alt="" />
			</div>
			<div className="it-course-shape-3 d-none d-xl-block">
				<img src="/img/course/shape-1-3.png" width={176} height={168} alt="" />
			</div>
			<div className="it-course-shape-4 d-none d-xl-block">
				<img src="/img/course/shape-1-4.png" width={66} height={65} alt="" />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-xl-12">
					
						<div className="it-course-title-box text-center mb-70">
							<span className="it-section-subtitle">Explore Our Courses</span>
							<h4 className="it-section-title">Your Path 
								<span className="p-relative z-index"> to Tech Mastery
								<svg className="title-shape-2 it-is-title-shape" width="168" height="65" viewBox="0 0 168 65" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M73.3761 8.49147C78.4841 6.01353 82.5722 4.25154 88.8933 3.3035C94.2064 2.50664 99.6305 2.0701 104.981 1.94026C120.426 1.56549 135.132 4.90121 146.506 9.70405C158.628 14.8228 166.725 22.5638 166.074 31.6501C165.291 42.5779 151.346 51.7039 133.508 56.8189C110.253 63.4874 81.7065 63.8025 58.5605 60.8285C37.5033 58.123 11.6304 51.7165 3.58132 40.0216C-3.43085 29.8337 12.0728 18.1578 27.544 11.645C40.3656 6.24763 55.7082 2.98328 70.8043 4.08403C81.9391 4.89596 93.2164 6.87822 102.462 9.99561C112.874 13.5066 120.141 18.5932 127.862 23.6332" stroke="#0AB99D" strokeWidth="3" strokeLinecap="round"/>
								</svg>
								</span>
								 <br /> join with us.
							</h4>
						</div>
					</div>
					{
						Courses.map((course) => {
							return (
								<div className="col-xl-4 col-lg-4 col-md-6 mb-30">
									{console.log(course)}
									<SingleCourse 
										ID={course.id}
										Slug={course.slug}
										Title={course.title}
										Img={course.image}
										Category={course.category}
										ratingCount={course.ratingCount} 
										lessonCount={course.lessonCount}
										studentCount={course.studentCount}
										Duration={course.duration}
										Author={course.author}
										Price={course.price}
										prevPrice={course.prevPrice}
										btnText={course.btnText}
									/>
								</div>
							);
						}).slice(0, 3)
					}
					<div className="col-xl-12">
						<div className="it-course-button text-center pt-45">
							<a className="it-btn" href="/course">
								<span>
								Load More Course
									<svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11 1.24023L16 7.24023L11 13.2402" stroke="currentcolor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M1 7.24023H16" stroke="currentcolor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
