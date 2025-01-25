import React, { Suspense, lazy } from "react";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";

const SignInModules = lazy(() => import("../../modules/Signin/index"));

export default function SignIn() {
  return (
    <main>
      <HeaderTwo />
      <Suspense fallback={<Preloader />}>
        <SignInModules />
      </Suspense>
      <Footer />
    </main>
  );
}
