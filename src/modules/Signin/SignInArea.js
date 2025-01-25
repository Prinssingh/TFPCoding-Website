import { Link } from "react-router-dom"
import React, { useState } from 'react'
import HeaderTwo from "../../components/Header/HeaderTwo";


export default function SignInArea() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) {
		  setError('Please fill in all fields');
		} else if (!isValidEmail(email)) {
		  setError('Please enter a valid email address');
		} else {
		  setError('');
		  console.log('Login attempt with:', { email, password });
		  setIsLoggedIn(true);
		}
	  };

	  const isValidEmail = (email) => {
		return /\S+@\S+\.\S+/.test(email);
	  };
	
	  
	  return (
		  <div className="it-signup-area pt-120 pb-120">
			<div className="container">
				<div className="it-signup-bg p-relative">
					<div className="it-signup-thumb d-none d-lg-block">
						<img src="/img/contact/signup.jpg" alt="" width={663} height={637} />
					</div>
					<div className="row">
						<div className="col-xl-6 col-lg-6">
							<form action="#" onSubmit={handleSubmit}>
								<div className="it-signup-wrap">
									<h4 className="it-signup-title">sign In</h4>
									<div className="it-signup-input-wrap">
									{error && <p className="error-message">{error}</p>}
										<div className="it-signup-input mb-20">
											<input type="email" placeholder="Email *" 
											id="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											required/>
										</div>
										<div className="it-signup-input mb-20">
											<input type="password" placeholder="Password *"
											 id="password"
											 value={password}
											 onChange={(e) => setPassword(e.target.value)}
											 required />
										</div>
									</div>
									<div className="it-signup-forget d-flex justify-content-between flex-wrap">
										<a className="mb-20" href="#">Forgot Password?</a>
										<div className="it-signup-agree mb-20">
											<div className="form-check">
												<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
												<label className="form-check-label" for="flexCheckDefault">
												Remember me
												</label>
											</div>
										</div>
									</div>
									<div className="it-signup-btn mb-40">
										<button className="it-btn large">sign In</button>
									</div>
									<div className="it-signup-text">
										<span>Don't have an account?<Link to="/signup">Sign Up</Link></span>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<HeaderTwo menuFormat="standard" isLoggedIn={isLoggedIn} email={email} />
			

		</div>	
	)
}
