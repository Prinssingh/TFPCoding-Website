
import InstructorRegistrationArea from "./InstructorRegistrationArea"
import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop"

export default function InstructorRegistrationModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Instruction Registration"
				subTitle="Registration"
			/>
			<InstructorRegistrationArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
