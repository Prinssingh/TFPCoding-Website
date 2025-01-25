import React, { Suspense, lazy } from "react";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";

const BlogModules = lazy(() => import("../../modules/Blog/index"));

export default function Blog() {
  return (
    <main>
      <HeaderTwo />
      <Suspense fallback={<Preloader />}>
        <BlogModules />
      </Suspense>
      <Footer />
    </main>
  );
}
