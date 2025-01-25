import React, { Suspense, lazy } from 'react';
import Footer from '../../components/Footer';
import Preloader from '../../components/Preloader/Preloader';
import HeaderTwo from '../../components/Header/HeaderTwo';


const ServiceTwoModules = lazy(() => import('../../modules/ServiceTwo'));

export default function ServiceTwo() {
	return (
		<main>
			<HeaderTwo />

			<Suspense fallback={<Preloader />}>
				<ServiceTwoModules />
			</Suspense>

			<Footer />
		</main>
	)
}
