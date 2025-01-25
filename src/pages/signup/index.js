import React, { Suspense, lazy } from "react";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";

const SignUpModules = lazy(() => import("../../modules/Signup"));

export default function SignUp() {
  return (
    <main>
      <HeaderTwo />

      <Suspense fallback={<Preloader />}>
        <SignUpModules />
      </Suspense>

      <Footer />
    </main>
  );
}
