import React, { Suspense, lazy } from "react";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";

const CourseModules = lazy(() => import("../../modules/Course"));

export default function Course() {
  return (
    <main>
      <HeaderTwo />

      <Suspense fallback={<Preloader />}>
        <CourseModules />
      </Suspense>

      <Footer />
    </main>
  );
}
