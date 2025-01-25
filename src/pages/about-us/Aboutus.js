import React, { Suspense, lazy } from "react";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";


const AboutUsModules = lazy(() => import("../../modules/AboutUs/index"));

export default function Aboutus() {
  return (
    <main>
      <HeaderTwo />
      <Suspense fallback={<Preloader />}>
        <AboutUsModules />
      </Suspense>
      <Footer />
    </main>
  );
}
