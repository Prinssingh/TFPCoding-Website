import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop"
import CourseArea from "./CourseArea"

export default function CourseModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Course"
				subTitle="Course"
			/>
			<CourseArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
