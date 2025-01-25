import TeacherDetailsArea from "./TeacherDetailsArea"

import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop"

export default function TeacherDetailsModules(singleTeacher) {
	return (
		<main>
			<BreadCrumbs
				Title="Teacher Details"
				subTitle="Teacher"
			/>
			<TeacherDetailsArea item={singleTeacher.item} />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
