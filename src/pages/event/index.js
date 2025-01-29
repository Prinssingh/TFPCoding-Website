import React, { Suspense, lazy, useEffect } from "react";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";

const EventModules = lazy(() => import("../../modules/Event"));

export default function Event() {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
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
