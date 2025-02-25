
import { Link } from "react-router-dom";
import Blogs from "../data/blogs.json"


export default function Sidebar() {
	return (
		<div className="it-sv-details-sidebar">
			<div className="it-sv-details-sidebar-search mb-55">
				<input type="text" placeholder="search" />
				<button type="submit">
					<i className="fal fa-search"></i>
				</button>
			</div>
			<div className="it-sv-details-sidebar-widget mb-55">
				<h4 className="it-sv-details-sidebar-title mb-30">blog category</h4>
				<div className="it-sv-details-sidebar-category mb-10">
					graphic design
					<span><i className="fa-light fa-angle-right"></i></span>
				</div>
				<div className="it-sv-details-sidebar-category active mb-10">
					web design
					<span><i className="fa-light fa-angle-right"></i></span>
				</div>
				<div className="it-sv-details-sidebar-category mb-10">
				it and software
					<span><i className="fa-light fa-angle-right"></i></span>
				</div>
				<div className="it-sv-details-sidebar-category mb-10">
				seles marketing
					<span><i className="fa-light fa-angle-right"></i></span>
				</div>
				<div className="it-sv-details-sidebar-category mb-10">
				art & humanities
					<span><i className="fa-light fa-angle-right"></i></span>
				</div>
				<div className="it-sv-details-sidebar-category mb-10">
				mobile application
					<span><i className="fa-light fa-angle-right"></i></span>
				</div>
			</div>
			<div className="sidebar__widget mb-55">
				<div className="sidebar__widge-title-box">
					<h3 className="sidebar__widget-title pb-10">Recent Post</h3>
				</div>
				
				<div className="sidebar__widget-content">
					<div className="sidebar__post">
						{
							Blogs.map((blog) => {
								return (
									<div className="rc__post mb-30 d-flex align-items-start">
										<div className="rc__post-thumb mr-20">
											<Link to={blog.slug}>
												<img  src={blog.image} alt="" width={98} height={98} />
											</Link>
										</div>
										<div className="rc__post-content">
											<div className="rc__meta">
												<span>
													<i className="fa-solid fa-calendar-days"></i>
													{blog.publishedDate}
												</span>
											</div>
											<h3 className="rc__post-title">
												<Link to={blog.slug}>{blog.title}</Link>
											</h3>
										</div>
									</div>
								);
							}).slice(0, 6)
						}
						
					</div>
				</div>
			</div>
			<div className="it-sv-details-sidebar-widget">
				<h4 className="it-sv-details-sidebar-title mb-30">popular tag:</h4>
				<div className="sidebar__widget-content">
					<div className="tagcloud">
						<Link to="#">Balance</Link>
						<Link to="#">coaching</Link>
						<Link to="#">Motivation</Link>
						<Link to="#">courses</Link>
						<Link to="#">Life guide</Link>
						<Link to="#">strategy</Link>
						<Link to="#">Education</Link>
						<Link to="#">coach</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
