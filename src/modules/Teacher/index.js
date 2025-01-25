import TeacherArea from "./TeacherArea"
import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop"

export default function TeacherModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Teacher"
				subTitle="Teacher"
			/>
			<TeacherArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
