import CourseTwoArea from "./CourseTwoArea"
import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop"

export default function CourseTwoModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Course Two"
				subTitle="Course"
			/>
			<CourseTwoArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
