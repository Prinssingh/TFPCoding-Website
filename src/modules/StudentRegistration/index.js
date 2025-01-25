
import RegistrationArea from "./RegistrationArea"

import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"


export default function StudentRegistrationModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Student Registration"
				subTitle="Registration"
			/>
			<RegistrationArea />
			<Newsletter />
		</main>
	)
}
