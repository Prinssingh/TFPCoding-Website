import PriceArea from "./PriceArea"
import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop"

export default function PriceModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Price"
				subTitle="Price"
			/>
			<PriceArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
