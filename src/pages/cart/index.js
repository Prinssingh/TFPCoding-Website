import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";
import React, { Suspense, lazy } from "react";

const CartModules = lazy(() => import("../../modules/Cart/index"));

export default function Cart() {
  return (
    <main>
      <HeaderTwo />
      <Suspense fallback={<Preloader />}>
        <CartModules />
      </Suspense>

      <Footer />
    </main>
  );
}
