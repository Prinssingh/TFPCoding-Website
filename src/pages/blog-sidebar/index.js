import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader/Preloader";
import HeaderTwo from "../../components/Header/HeaderTwo";
import React, { Suspense, lazy } from "react";

const BlogSidebarModules = lazy(() => import("../../modules/BlogSidebar"));

export default function BlogSidebar() {
  return (
    <main>
      <HeaderTwo />
      <Suspense fallback={<Preloader />}>
        <BlogSidebarModules />
      </Suspense>
      <Footer />
    </main>
  );
}
