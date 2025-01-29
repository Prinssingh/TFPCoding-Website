import React, { Suspense, lazy, useEffect } from "react";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";

const ContactModules =lazy(() => import("../../modules/Contact/index"));


export default function Contact() {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <HeaderTwo />

      <Suspense fallback={<Preloader />}>
        <ContactModules />
      </Suspense>

      <Footer />
    </main>
  );
}
