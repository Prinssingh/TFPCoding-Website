import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter"
import ScrollTop from "../../components/ScrollTop"


import ServiceDetailsArea from "./ServiceDetailsArea"
export default function ServiceDetailsModules(singleService) {
	return (
		<main>
			<BreadCrumbs
				Title="Service Details"
				subTitle="Service"
			/>
			<ServiceDetailsArea item={singleService.item} />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
