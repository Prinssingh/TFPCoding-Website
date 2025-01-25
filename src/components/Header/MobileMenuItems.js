
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MobileMenuItems(props) {
	const { onePage } = props;

	const [home, setHome] = useState(false)
	const [page, setPage] = useState(false)
	const [service, setService] = useState(false)
	const [blog, setBlog] = useState(false)

	const openMobileMenu = menu => {

		if (menu === 'home') {
			setHome(!home)
			setPage(false)
			setService(false)
			setBlog(false)
		}
		else if (menu === 'page') {
			setHome(false)
			setPage(!page)
			setService(false)
			setBlog(false)
		}
		else if (menu === 'service') {
			setHome(false)
			setPage(false)
			setService(!service)
			setBlog(false)
		}
		else if (menu === 'blog') {
			setHome(false)
			setPage(false)
			setService(false)
			setBlog(!blog)
		}
	};

	const onepageMobileMenuHome = <li className="has-dropdown p-static">
									<Link to="#" className={home ? "active" : ""} onClick={() => { openMobileMenu('home'); }}>
										Home 
										<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z" fill="#0E2A46"></path></svg>
									</Link>
									<ul className={home ? "it-submenu submenu-open" : "it-submenu"}>
										<li><Link to="/">Home 1</Link></li>
										<li><Link to="/home-2">Home 2</Link></li>
										<li><Link to="/home-3">Home 3</Link></li>
										<li><Link to="/home-4">Home 4</Link></li>
										<li><Link to="/home-5">Home 5</Link></li>
									</ul>
								</li>;	
	
	return (
		<>
			{
				onePage == 'onepage1' ?
				<ul>
					
					{onepageMobileMenuHome}
					<li><Link to="#it-course">Course</Link></li>
					<li><Link to="#it-about">About Us</Link></li>
					<li><Link to="#it-team">Team</Link></li>
					<li><Link to="#it-blog">Blog</Link></li>
					<li><Link to="#it-newsletter">Contact</Link></li>
				</ul> :
				onePage == 'onepage2' ?
				<ul>
					{onepageMobileMenuHome}
					<li><Link to="#it-about">About Us</Link></li>
					<li><Link to="#it-course">Course</Link></li>
					<li><Link to="#it-contact">Contact</Link></li>
					<li><Link to="#it-event">Event</Link></li>
					<li><Link to="#it-blog">Blog</Link></li>
				</ul> : 
				onePage == 'onepage3' ?
				<ul>
					{onepageMobileMenuHome}
					<li><Link to="#it-about">About Us</Link></li>
					<li><Link to="#it-course">Course</Link></li>
					<li><Link to="#it-service">Services</Link></li>
					<li><Link to="#it-team">Team</Link></li>
					<li><Link to="#it-blog">Blog</Link></li>
				</ul> :
				onePage == 'onepage4' ?
				<ul>
					{onepageMobileMenuHome}
					<li><Link to="#it-about">About Us</Link></li>
					<li><Link to="#it-course">Course</Link></li>
					<li><Link to="#it-testimonial">Testimonial</Link></li>
					<li><Link to="#it-event">Event</Link></li>
					<li><Link to="#it-blog">Blog</Link></li>
				</ul> :
				onePage == 'onepage5' ?
				<ul>
					{onepageMobileMenuHome}
					<li><Link to="#it-about">About Us</Link></li>
					<li><Link to="#it-testimonial">Testimonial</Link></li>
					<li><Link to="#it-contact">Contact</Link></li>
					<li><Link to="#it-gallery">Gallery</Link></li>
					<li><Link to="#it-blog">Blog</Link></li>
				</ul> :
				<ul>
					<li className="has-dropdown p-static">
						<Link to="#" className={home ? "active" : ""} onClick={() => { openMobileMenu('home'); }}>
							Home 
							
						</Link>
						
					</li>
					<li><Link to="/about-us">about us</Link></li>
					<li className="has-dropdown">
						<Link to="#" className={service ? "active" : ""} onClick={() => { openMobileMenu('service'); }}>
							Services
							{/* <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z" fill="#0E2A46"></path></svg> */}
						</Link>
						{/* <ul className={service ? "it-submenu submenu-open" : "it-submenu"}>
							<li><Link to="/services">services 01</Link></li>
							<li><Link to="/services/two">services 02</Link></li>
							<li><Link to="/services/three">services 03</Link></li>
							<li><Link to="/services/details">services details</Link></li>
						</ul> */}
					</li>
					<li className=" ">
						<Link to="#" className={blog ? "active" : ""} onClick={() => { openMobileMenu('blog'); }}>
							Blog
							{/* <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z" fill="#0E2A46"></path></svg> */}
						</Link>
						{/* <ul className={blog ? "it-submenu submenu-open" : "it-submenu"}>
							<li><Link to="/blog">Blog 01</Link></li>
							<li><Link to="/blog/two">Blog 02</Link></li>
							<li><Link to="/blog/sidebar">Blog Sidebar</Link></li>
							<li><Link to="/blog/details">Blog details</Link></li>
						</ul> */}
					</li>
					<li><Link to="/contact">contact</Link></li>
				</ul> 
			}
		</>
	)
}
