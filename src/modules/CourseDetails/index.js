import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop"

import CourseDetailsArea from "./CourseDetailsArea"
export default function CourseDetailsModules(singleCourse) {
	return (
		<main>
			<BreadCrumbs
				Title="Course Details"
				subTitle="Course"
			/>
			<CourseDetailsArea item={singleCourse.item} />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
