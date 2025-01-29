// import Courses from "@/data/courses"
import Courses from "../../../components/data/courses.json"

import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer";
import Preloader from "../../../components/Preloader/Preloader";
import HeaderTwo from "../../../components/Header/HeaderTwo";

 
const CourseDetailsModules =lazy(() => import("../../../modules/CourseDetails/index"));

export default function CourseDetails() {
	// const router = useRouter();
	// const { asPath } = router;
	// const courseSlug = asPath.split('/')[2];

	// const singleCourse = Courses.filter((course) => {
    //     return course.slug === courseSlug;
    // });

	
	const { slug } = useParams();

	const singleCourse = Courses.filter((Course) => Course.slug === slug);
	const CourseItem = singleCourse.length > 0 ? singleCourse[0] : { title: "Course not found", content: "No content available." };

	return (
		<main>
			<HeaderTwo />

			<Suspense fallback={<Preloader />}>
			<CourseDetailsModules item={CourseItem} />
			</Suspense>

			<Footer />
		</main>
	)
}
