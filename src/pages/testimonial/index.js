import React, { Suspense, lazy } from "react";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";

const TestimonialModules = lazy(() => import("../../modules/Testimonial"));

export default function Testimonial() {
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
