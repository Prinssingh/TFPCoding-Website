import Banner from "../modules/HomeOne/Banner";
import Category from "../modules/HomeOne/Category";
import Course from "../modules/HomeOne/Course";
import About from "../modules/HomeOne/About";

import Video from "../modules/HomeOne/Video";
import Service from "../modules/HomeOne/Service";
import Funfact from "../modules/HomeOne/Funfact";
import Testimonial from "../modules/HomeOne/Testimonial";
import Team from "../modules/HomeOne/Team";
import Career from "../modules/HomeOne/Career";
import Blog from "../modules/HomeOne/Blog";

import Newsletter from "../components/Newsletter/index";
import ScrollTop from "../components/ScrollTop/index";

export default function HomeOneModules() {
  return (
    <main>
      <Banner />
      {/* <Category /> */}
      <Course />
      <About />
      <Video />
      <Service />
      <Funfact />
      <Testimonial />
      {/* <Team /> */}
      <Career />
      <Blog />
      <Newsletter />
      <ScrollTop />
    </main>
  );
}
