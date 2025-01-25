import React, { Suspense, lazy } from "react";
import Footer from "../../../components/Footer";
import Preloader from "../../../components/Preloader/Preloader";
import HeaderTwo from "../../../components/Header/HeaderTwo";
 
const InstructorRegistrationModules = lazy(() => import("../../../modules/InstructorRegistration/index"));

export default function InstructorRegistration() {
	return (
		<main>
			<HeaderTwo />

			<Suspense fallback={<Preloader />}>
			<InstructorRegistrationModules />
      </Suspense>

			<Footer />
		</main>
	)
}
