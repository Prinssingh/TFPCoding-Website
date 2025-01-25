import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop/index"

import BlogArea from "./BlogArea"
export default function BlogTwoModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Blog Two"
				subTitle="Blog"
			/>
			<BlogArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
