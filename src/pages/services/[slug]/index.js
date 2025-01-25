
import { useParams } from 'react-router-dom';
import Services from '../../../components/data/services.json';
import Footer from "../../../components/Footer";
import Preloader from "../../../components/Preloader/Preloader";
import HeaderTwo from "../../../components/Header/HeaderTwo";
import React, { Suspense, lazy } from 'react';

const ServiceDetailsModules = lazy(() => import('../../../modules/ServiceDetails'));

export default function ServiceDetails() {
	const { slug } = useParams();
	const singleService = Services.filter((Service) => Service.slug === slug);
	const ServiceItem = singleService.length > 0 ? singleService[0] : { title: "Blog not found", content: "No content available." };

	return (
		<main>
			<HeaderTwo />
			<Suspense fallback={<Preloader />}>
				<ServiceDetailsModules item={ServiceItem} />
			</Suspense>
			<Footer />
		</main>
	)
}