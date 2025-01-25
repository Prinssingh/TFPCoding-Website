import React, { Suspense, lazy } from "react";
import Footer from "../../../components/Footer";
import Preloader from "../../../components/Preloader/Preloader";
import HeaderTwo from "../../../components/Header/HeaderTwo";
 
const StudentRegistrationModules = lazy(() => import("../../../modules/StudentRegistration/index"));

export default function StudentRegistration() {
	return (
		<main>
			<HeaderTwo />

			<Suspense fallback={<Preloader />}>
        
			<StudentRegistrationModules />
      </Suspense>

			<Footer />
		</main>
	)
}
