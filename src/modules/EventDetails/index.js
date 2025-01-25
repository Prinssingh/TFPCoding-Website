import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop"
import EventDetailsArea from "./EventDetailsArea"
export default function EventModules(singleEvent) {
	return (
		<main>
			<BreadCrumbs
				Title="Event Details"
				subTitle="Event"
			/>
			<EventDetailsArea item={singleEvent.item} />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
