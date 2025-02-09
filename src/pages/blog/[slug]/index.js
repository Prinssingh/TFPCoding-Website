import React, { Suspense, lazy, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer";
import Preloader from "../../../components/Preloader/Preloader";
import HeaderTwo from "../../../components/Header/HeaderTwo";

import Blogs from "../../../components/data/blogs.json";

const BlogDetailsModules = lazy(() => import("../../../modules/BlogDetails/index"));

export default function BlogDetails() {
	const { slug } = useParams();
	useEffect(() => {
		// Scroll to top when the component is mounted
		window.scrollTo(0, 0);
	  }, []);

	const singleBlog = Blogs.filter((blog) => blog.slug === slug);
	const blogItem = singleBlog.length > 0 ? singleBlog[0] : { title: "Blog not found", content: "No content available." };

	return (
		<main>
			<HeaderTwo />
			<Suspense fallback={<Preloader />}>
				<BlogDetailsModules item={blogItem} />
			</Suspense>
			<Footer />
		</main>
	)
}