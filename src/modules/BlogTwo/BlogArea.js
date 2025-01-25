import React from "react"

import SingleBlogTwo from "../../components/Blog/Two"
import Blogs from "../../components/data/blogs.json"

export default function BlogArea() {
	return (
		<div className="it-blog-area it-blog-style-3 it-blog-style-6 grey-bg pt-120 pb-90">
			<div className="container">
				<div className="row">
					{
						Blogs.map((blog) => {
							return (
								<div className="col-xl-6 col-lg-6 col-md-6 mb-30">
									<SingleBlogTwo 
										Slug={blog.slug}
										Title={blog.title}
										Img={blog.image}
										Author={blog.author} 
										publishedDate={blog.publishedDate}
										btnText={blog.btnText}
									/>
								</div>
							);
						}).slice(6, 12)
					}
				</div>
			</div>
		</div>
	)
}
