import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop/index"


import CartArea from "./CartArea"
export default function CartModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Cart"
				subTitle="Cart"
			/>
			<CartArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
