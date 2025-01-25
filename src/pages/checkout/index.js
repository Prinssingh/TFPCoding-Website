import React, { Suspense, lazy } from "react";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";

 
const CheckoutModules = lazy(() => import("../../modules/Checkout"));

export default function Checkout() {
	return (
		<main>
			<HeaderTwo />
            <Suspense fallback={<Preloader />}>
			<CheckoutModules />
      </Suspense>

			<Footer />
		</main>
	)
}
