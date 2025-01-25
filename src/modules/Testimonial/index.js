import TestimonialArea from "./TestimonialArea"
import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop"


export default function TestimonialModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Testimonial"
				subTitle="Testimonial"
			/>
			<TestimonialArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
