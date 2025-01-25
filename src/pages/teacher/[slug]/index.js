import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer";
import Preloader from "../../../components/Preloader/Preloader";
import HeaderTwo from "../../../components/Header/HeaderTwo";

import Teachers from "../../../components/data/teachers"
const TeacherDetailsModules = lazy(() => import("../../../modules/TeacherDetails"));

export default function TeacherDetails() {
	// const router = useRouter();
	// const { asPath } = router;
	// const teacherSlug = asPath.split('/')[2];

	// const singleTeacher = Teachers.filter((teacher) => {
    //     return teacher.slug === teacherSlug;
    // });

	const { slug } = useParams();

	const singleTeacher = Teachers.filter((teacher) => teacher.slug === slug);
	const teacherItem = singleTeacher.length > 0 ? singleTeacher[0] : { title: "Teacher not found", content: "No content available." };

	return (
		<main>
			<HeaderTwo />
			<Suspense fallback={<Preloader />}>
			<TeacherDetailsModules item={teacherItem} />
			</Suspense>

			<Footer />
		</main>
	)
}
