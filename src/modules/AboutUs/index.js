import About from "./About"
import BreadCrumbs from "../../components/BreadCrumbs/index"
import Funfact from "./Funfact"
import Testimonial from "./Testimonial"
import Course from "./Course"
import Team from "./Team"
import Newsletter from "../../components/Newsletter/index"
import ScrollTop from "../../components/ScrollTop/index"

export default function AboutUsModules() {
	return (
		<main>
			 <BreadCrumbs
				Title="About Us"
				subTitle="About Us"
			/>
			 
			<About />
			
			<Funfact />
			
			{/* <Testimonial /> */}

			<Course />
			
			{/* <Team /> */}

			<Newsletter />

			<ScrollTop />
			
		</main>
	)
}
