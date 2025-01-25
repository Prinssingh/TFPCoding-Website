import React, { Suspense, lazy } from "react";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";

const FaqModules = lazy(() => import("../../modules/Faq/index"));

export default function Faq() {
  return (
    <main>
      <HeaderTwo />
      <Suspense fallback={<Preloader />}>
        <FaqModules />
      </Suspense>
      <Footer />
    </main>
  );
}
