import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter"
import ScrollTop from "../../components/ScrollTop"


import ServiceThreeArea from "./ServiceArea"
export default function ServiceThreeModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Service Three"
				subTitle="Service"
			/>
			<ServiceThreeArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
