

import React, { Suspense,lazy } from "react";
import Header from "../components/Header/Header";
import Preloader from "../components/Preloader/Preloader";
import Footer from "../components/Footer";

const HomeOneModules =lazy(() =>
  import("../OnepageHomeOne/HomeOneModules")
);

export default function Home() {
  return (
    <main>
      <Header />
      <Suspense fallback={<Preloader />}>
        <HomeOneModules />
      </Suspense>
      <Footer />
    </main>
  );
}
