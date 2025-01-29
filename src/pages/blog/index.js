import React, { Suspense, lazy, useEffect } from "react";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";

const BlogModules = lazy(() => import("../../modules/Blog/index"));

export default function Blog() {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
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
