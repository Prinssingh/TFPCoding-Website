import BreadCrumbs from "../../components/BreadCrumbs/index"
import BlogArea from "./BlogArea"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop/index"
export default function BlogSidebarModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Blog Sidebar"
				subTitle="Blog"
			/>
			<BlogArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
