import EventArea from "./EventArea"
import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop"


export default function EventModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Event"
				subTitle="Event"
			/>
			<EventArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
