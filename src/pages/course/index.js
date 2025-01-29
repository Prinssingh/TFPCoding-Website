import React, { Suspense, lazy, useEffect } from "react";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";

const CourseModules = lazy(() => import("../../modules/Course"));

export default function Course() {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
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
