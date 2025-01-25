import SignUpArea from "./SignUpArea"
import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"

export default function SignUpModules() {
	return (
		<main>
			<BreadCrumbs
				Title="SignUp"
				subTitle="SignUp"
			/>
			<SignUpArea />
			<Newsletter />
		</main>
	)
}
