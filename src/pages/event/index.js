import React, { Suspense, lazy } from "react";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";

const EventModules = lazy(() => import("../../modules/Event"));

export default function Event() {
  return (
    <main>
      <HeaderTwo />

      <Suspense fallback={<Preloader />}>
        <EventModules />
      </Suspense>

      <Footer />
    </main>
  );
}
