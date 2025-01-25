import React, { Suspense, lazy } from "react";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";

const ContactModules =lazy(() => import("../../modules/Contact/index"));


export default function Contact() {
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
