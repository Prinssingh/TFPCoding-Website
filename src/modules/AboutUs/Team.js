import SingleTeamTwo from "../../components/Team/SingleTeamTwo";
import Teachers from "../../components/data/teachers.json";

export default function Team() {
    return (
		<div className="it-team-3-area p-relative z-index pt-110 pb-90" style={{backgroundImage: `url(/img/team/bg-3.png)`}} >
		{/* <img src="/img/team/bg-3.png" layout="fill" objectFit="cover" alt="" /> */}
		<div className="container" >
			<div className="row">
				<div className="col-xl-12">
					<div className="it-event-title-box text-center pb-40">
						<span className="it-section-subtitle-3 text-white">
							<img src="/img/about/bg-2.svg" width={23} height={17} alt="" />
							Teacher
							<img src="/img/about/bg-2.svg" width={23} height={17} alt="" />
						</span>
						<h2 className="it-section-title-3 text-white">meet our expert Instructor</h2>
					</div>
				</div>
			</div>
			<div className="row">
				{
					Teachers.map((teacher) => {
						return (
							<div className="col-xl-3 col-lg-4 col-md-6 mb-30">
								<SingleTeamTwo 
									Slug={teacher.slug}
									Title={teacher.title}
									Img={teacher.image}
									Teacher={teacher.name}
									Designation={teacher.designation}
								/>
							</div>
						);
					}).slice(4, 8)
				}
			</div>
		</div>
	</div>
    );
}