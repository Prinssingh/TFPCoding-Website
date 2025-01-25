import ErrorArea from "./ErrorArea"
import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop"


export default function ErrorModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Error"
				subTitle="Error"
			/>
			<ErrorArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
