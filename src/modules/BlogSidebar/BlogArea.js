import React from "react"
import { Link } from "react-router-dom";
import Sidebar from "../../components/Blog/Sidebar";
import SingleBlogThree from "../../components/Blog/Three"
import Blogs from "../../components/data/blogs.json"


export default function BlogArea() {
	return (
		<div className="postbox__area pt-120 pb-120">
			<div className="container">
				<div className="row">
					
					<div className="col-xl-8 col-lg-8">
						<div className="postbox__details-wrapper">
							{
								Blogs.map((blog) => {
									return (
										<SingleBlogThree 
											blogClass="postbox__thumb-box mb-80"
											Slug={blog.slug}
											Title={blog.title}
											Img={blog.image}
											Author={blog.Author} 
											publishedDate={blog.publishedDate}
											btnText={blog.btnText}
										/>
									);
								}).slice(13, 16)
							}
						</div>
					</div>
					<div className="col-xxl-4 col-xl-4 col-lg-4">
						<Sidebar />
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12">
						<div className="it-pagination">
							<nav>
								<ul>
									<li>
										<Link to="/blog?page=1">1</Link>
									</li>
									<li>
										<Link to="/blog-two?page=2">2</Link>
									</li>
									<li>
										<Link to="/blog?page=3">3</Link>
									</li>
									<li>
										<Link className="color" to="/blog?page=2">
											<i className="fa-solid fa-arrow-right-long"></i>
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
