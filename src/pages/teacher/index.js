import React, { Suspense, lazy } from "react";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";
 
const TeacherModules = lazy(() => import("../../modules/Teacher/index"));

export default function Teacher() {
	return (
		<main>
			<HeaderTwo />

			<Suspense fallback={<Preloader />}>
        
			<TeacherModules />
      </Suspense>

			<Footer />
		</main>
	)
}
