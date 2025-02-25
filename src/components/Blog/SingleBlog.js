

import { Link } from "react-router-dom";

export default function SingleBlog( props ) {
	const { blogClass, Slug, Img, Title, publishedDate, commentCount, btnClass, btnText, imgWidth, imgHeight  } = props;
	return (
		<div className={blogClass ? blogClass : 'it-blog-item-box'}>  
		              
			<div className="it-blog-item">
				
				<div className="it-blog-thumb fix">
					<Link to={`/blog/${Slug ? Slug : 'details'}`}><img  src={Img ? Img : '/img/blog/blog-1-1.jpg'} width={imgWidth ? imgWidth : 362} height={imgHeight ? imgHeight : 205} alt="" /></Link>
				</div>
				<div className="it-blog-meta pb-15">
					<span>
						<i className="fa-solid fa-calendar-days"></i>
						{publishedDate ? publishedDate : '20 Jan 2022'}
					</span>
					
				</div>
				<h4 className="it-blog-title">
					<Link to={`/blog/${Slug ? Slug : 'details'}`}>{Title ? Title : 'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat'}</Link>
				</h4>
				<Link to={`/blog/${Slug ? Slug : 'details'}`} className={btnClass ? btnClass : 'it-btn sm'}>
					<span>{btnText ? btnText : 'Read More'}
						<svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11 1.24023L16 7.24023L11 13.2402" stroke="currentcolor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M1 7.24023H16" stroke="currentcolor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</span>
				</Link>   
			</div>
		</div>
	)
}
