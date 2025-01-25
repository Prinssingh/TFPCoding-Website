import BlogArea from "./BlogArea"
import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop"

export default function BlogModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Blog"
				subTitle="Blog"
			/>
			<BlogArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
