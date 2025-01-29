import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./assets/css/nice-select.css";
import "./assets/css/font-awesome-pro.css";
import "./assets/css/flaticon_xoft.css";
import "./assets/css/flaticon_mycollection.css";
import "./assets/scss/main.scss";
import "./assets/css/main.css";
import "./assets/css/spacing.css";
import "./assets/css/meanmenu.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Providers } from "../src/redux/providers.js";
import Home from "./Home/index.js";
import Aboutus from "./pages/about-us/Aboutus.js";
import Service from "./pages/services/Service.js";
import Blog from "./pages/blog/index.js";
import Contact from "./pages/contact/index.js";

import BlogTwo from "./pages/blog-2/index.js";
import BlogSidebar from "./pages/blog-sidebar/index.js";
import BlogDetails from "./pages/blog/[slug]/index.js";
import ServiceTwo from "./pages/services-2/index.js";
import ServiceThree from "./pages/services-3/index.js";
import ServiceDetails from "./pages/services/[slug]/index.js";


import CourseDetails from "./pages/course/[slug]/index.js";
import Course from "./pages/course/index.js";
import CourseTwo from "./pages/course-2/index.js";

import Event from "./pages/event/index.js";
import EventDetails from "./pages/event/[slug]/index.js";
import Cart from "./pages/cart/index.js";

import TeacherDetails from "./pages/teacher/[slug]/index.js";
import Teacher from "./pages/teacher/index.js";
import Price from "./pages/price/index.js";

import Checkout from "./pages/checkout/index.js";
import Testimonial from "./pages/testimonial/index.js";
import InstructorRegistration from "./pages/registration/instructor/index.js";

import StudentRegistration from "./pages/registration/student/index.js";
import StudentRegistrationTwo from "./pages/registration/student-2/index.js";
import Faq from "./pages/faq/index.js";

import SignIn from "./pages/signin/index.js";
import SignUp from "./pages/signup/index.js";
import NotFound from "./404.js";
// import Home from "./404.js";
function App() {
  return (
    <Router>
      <Providers>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<Aboutus/>} />
   
          <Route path="/services" element={<Service/>} />
          <Route path="/services-2" element={<ServiceTwo/>} />
          <Route path="/services-3" element={<ServiceThree/>} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
      
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog-2" element={<BlogTwo/>} />
          <Route path="/blog-sidebar" element={<BlogSidebar/>} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
   
          <Route path="/contact" element={<Contact/>} />

         <Route path="/course" element={<Course/>} /> 
         <Route path="/course-2" element={<CourseTwo/>} /> 
         <Route path="/course/:slug" element={<CourseDetails/>} /> 
         
         <Route path="/event" element={<Event/>} />
         <Route path="event/:slug" element={<EventDetails/>} />
          <Route path="/cart" element={<Cart/>} />

          <Route path="/teacher" element={<Teacher/>} />
          <Route path="/teacher/:slug" element={<TeacherDetails/>} />
          <Route path="/price" element={<Price/>} />

          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/testimonial" element={<Testimonial/>} />
          <Route path="/registration/instructor" element={<InstructorRegistration/>}/>

          <Route path="/registration/student" element={<StudentRegistration/>} />
          <Route path="/registration/student-2" element={<StudentRegistrationTwo/>} />
          <Route path="/faq" element={<Faq/>} />
          
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="*" element={<NotFound/>} />
          

         

        </Routes>
      </Providers>
    </Router>
  );
}

export default App;
