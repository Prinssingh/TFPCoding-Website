
import React, { Suspense, lazy } from 'react';
import Footer from '../../components/Footer';
import Preloader from '../../components/Preloader/Preloader';
import HeaderTwo from '../../components/Header/HeaderTwo';
 
const ServiceThreeModules = lazy(() => import('../../modules/ServiceThree'));

export default function ServiceThree() {
	return (
		<main>
			<HeaderTwo />
			<Suspense fallback={<Preloader />}> 
			<ServiceThreeModules />
            </Suspense>


			<Footer />
		</main>
	)
}
