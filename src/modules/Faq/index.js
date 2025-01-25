import FaqArea from "./FaqArea"
import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop"

export default function FaqModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Faq"
				subTitle="Faq"
			/>
			<FaqArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
