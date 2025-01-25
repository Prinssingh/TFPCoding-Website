import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop"
import BlogDetailsArea from "./BlogDetailsArea"
export default function BlogDetailsModules(singleBlog) {
	return (
		<main>
			<BreadCrumbs
				Title="Blog Details"
				subTitle="Blog"
			/>
			<BlogDetailsArea item={singleBlog.item} />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
