

import React, { Suspense, lazy } from 'react';
import Footer from '../../components/Footer';
import Preloader from '../../components/Preloader/Preloader';
import HeaderTwo from '../../components/Header/HeaderTwo';

const ServiceModules = lazy(() => import('../../modules/Service/index'));


export default function Service() {
	return (
		<main>
			<HeaderTwo />
            <Suspense fallback={<Preloader />}> 
			<ServiceModules />
            </Suspense>
			<Footer />
		</main>
	)
}
