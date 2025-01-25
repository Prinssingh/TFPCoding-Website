

import SingleBlog from "../../components/Blog/SingleBlog";
import Blogs from "../../components/data/blogs.json"
export default function BlogArea() {
	return (
		<div className="it-blog-area pt-120 pb-90">
			<div className="container">
				<div className="row">
					{	
						Blogs.map((blog) => {
							return (
								<div className="col-xl-4 col-lg-4 col-md-6 mb-30">
									<SingleBlog 
										Slug={blog.slug}
										Title={blog.title}
										Img={blog.image}
										commentCount={blog.commentCount} 
										publishedDate={blog.publishedDate}
										btnText={blog.btnText}
									/>
								</div>
							);
						}).slice(0, 6)
					}
				</div>
			</div>
      	</div>
	)
}
