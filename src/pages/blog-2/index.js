import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";
import React, { Suspense, lazy } from "react";

const BlogTwoModules = lazy(() => import("../../modules/BlogTwo/index"));

export default function BlogTwo() {
  return (
    <main>
      <HeaderTwo />
      <Suspense fallback={<Preloader />}>
        <BlogTwoModules />
      </Suspense>
      <Footer />
    </main>
  );
}
