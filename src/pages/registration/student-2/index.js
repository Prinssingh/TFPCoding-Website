import React, { Suspense, lazy } from "react";
import Footer from "../../../components/Footer";
import Preloader from "../../../components/Preloader/Preloader";
import HeaderTwo from "../../../components/Header/HeaderTwo";
 
const StudentRegistrationTwoModules = lazy(() => import("../../../modules/StudentRegistrationTwo/index"));

export default function StudentRegistrationTwo() {
	return (
		<main>
			<HeaderTwo />

			<Suspense fallback={<Preloader />}>
        
			<StudentRegistrationTwoModules />
      </Suspense>

			<Footer />
		</main>
	)
}
