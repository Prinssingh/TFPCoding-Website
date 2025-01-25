import ContactArea from "./ContactArea"

import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter"
import ScrollTop from "../../components/ScrollTop"


export default function ContactModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Contact"
				subTitle="Contact"
			/>
			<ContactArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
