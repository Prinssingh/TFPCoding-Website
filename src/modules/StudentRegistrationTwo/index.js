import RegistrationArea from "./RegistrationArea"

import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"


export default function StudentRegistrationTwoModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Student Registration Two"
				subTitle="Registration"
			/>
			<RegistrationArea />
			<Newsletter />
		</main>
	)
}
