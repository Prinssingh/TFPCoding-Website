import React, { Suspense, lazy, useEffect } from "react";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";

const TestimonialModules = lazy(() => import("../../modules/Testimonial"));

export default function Testimonial() {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <HeaderTwo />

      <Suspense fallback={<Preloader />}>
        <TestimonialModules />
      </Suspense>

      <Footer />
    </main>
  );
}
