import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop/index"

import CheckoutArea from "./CheckoutArea"
import Cupon from "./Cupon"
export default function CheckoutModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Checkout"
				subTitle="Checkout"
			/>
			<Cupon />
			<CheckoutArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
