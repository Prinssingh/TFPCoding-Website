import React, { Suspense, lazy } from "react";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";

const CourseTwoModules = lazy(() => import("../../modules/CourseTwo/index"));

export default function CourseTwo() {
  return (
    <main>
      <HeaderTwo />
      <Suspense fallback={<Preloader />}>
        <CourseTwoModules />
      </Suspense>
      <Footer />
    </main>
  );
}
