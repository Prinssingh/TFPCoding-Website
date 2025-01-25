import SignInArea from "./SignInArea"
import BreadCrumbs from "../../components/BreadCrumbs/index"
import Newsletter from "../../components/Newsletter/index"

export default function SignInModules() {
	return (
		<main>
			<BreadCrumbs
				Title="SignIn"
				subTitle="SignIn"
			/>
			<SignInArea />
			<Newsletter />
		</main>
	)
}
