

import React from "react"
import { Link } from "react-router-dom"

export default function MenuItems(props) {
	
	return (
		<>
			{
				
				<ul>
					<li className=" p-static">
						<Link to='/'>home</Link>
					</li>
					<li>
						<Link to="/about-us">about us</Link>
						</li>
					<li>
					{/* <li className="has-dropdown"> */}
						<Link to="/services">services</Link>
						{/* <ul className="it-submenu submenu">
							<li><Link to="/pages/services/Service">services 01</Link></li>
							<li><Link to="/services-2">services 02</Link></li>
							<li><Link to="/services-3">services 03</Link></li>
							<li><Link to="/services/:slug">services details</Link></li>
						</ul> */}
					</li>
					{/* <li className="has-dropdown">
						<Link to="#">pages</Link>
						<ul className="it-submenu submenu has-megamenu">
							<li><Link to="/course">Course 01</Link></li>
							<li><Link to="/course-2">Course 02</Link></li>
							<li><Link to="/course/course-one">Course Details</Link></li>
							<li><Link to="/teacher">Teacher</Link></li>
							<li><Link to="/teacher/teacher-one">Teacher Details</Link></li>
							<li><Link to="/price">Price</Link></li>
							<li><Link to="/event">Event</Link></li>
							<li><Link to="/event/event-one">Event Details</Link></li>
							<li><Link to="/cart">Cart</Link></li>
							<li><Link to="/checkout">Checkout</Link></li>
							<li><Link to="/testimonial">Testimonial</Link></li>
							<li><Link to="/registration/instructor">Instructor Registration</Link></li>
							<li><Link to="/registration/student">Student Registration 01</Link></li>
							<li><Link to="/registration/student-2">Student Registration 02</Link></li>
							<li><Link to="/faq">Faq</Link></li>
							<li><Link to="/signin">Sign IN</Link></li>
							<li><Link to="/signup">Sign UP</Link></li>
							<li><Link to="/404">Error</Link></li>
						</ul>
					</li> */}
					<li>
					{/* <li className="has-dropdown"> */}
						<Link to="/blog">blog</Link>
						{/* <ul className="it-submenu submenu">
							<li><Link to="/blog">Blog 01</Link></li>
							<li><Link to="/blog-2">Blog 02</Link></li>
							<li><Link to="/blog-sidebar">Blog Sidebar</Link></li>
							<li><Link to="/blog/:slug">Blog details</Link></li>
						</ul> */}
					</li>
					<li><Link to="/contact">contact</Link></li>
				</ul>
			}
		</>
	)
}
