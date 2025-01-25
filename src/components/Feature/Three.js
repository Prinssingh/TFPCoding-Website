import { Link } from "react-router-dom";

export default function SingleFeatureThree( props ) {
	const { featureClass, Icon, Title, Description, btnText, Slug  } = props;
	return (
		<div className={featureClass ? featureClass : 'it-feature-item text-center'}>  
			
			<div className="it-feature-item-content z-index">
				<div className="it-feature-icon">
					<span><i className={Icon ? Icon : 'flaticon-class'}></i></span>
				</div>
				<div className="it-feature-text pt-30">
					<h4 className="it-feature-title">{Title ? Title : 'ACTIVE LEARNING'}</h4>
					<p>{Description ? Description : 'Lorem ipsum dolor amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore'}</p>
				</div>
				<div className="it-feature-button">
					<Link to={`/services/${Slug ? Slug : 'details'}`} className="it-btn-border">
						<span>
							{btnText ? btnText : 'Learn More'}
							<svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11 1.24023L16 7.24023L11 13.2402" stroke="currentcolor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M1 7.24023H16" stroke="currentcolor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
							</svg> 
						</span>
					</Link>
				</div>
			</div>
		</div>
	)
}
