
import { useDispatch } from 'react-redux';
import { productAddData } from '../../redux/product/actionCreator';

export default function SingleCourse( props ) {
	const { courseClass, ID, Slug, Img, Title, Category, ratingCount, lessonCount, studentCount, Duration, Author, Price, prevPrice, btnText, imgWidth, imgHeight  } = props;

	const dispatch = useDispatch();

	const handleCart = (productID) => {
		dispatch(productAddData(productID));
	};

	return (
		<div className={courseClass ? courseClass : 'it-course-item'}>
			<div className="it-course-thumb mb-20 p-relative">
				<a href={`/course/${Slug ? Slug : 'details'}`}>
					<img src={Img ? Img : '/img/course/course-1-1.jpg'} width={imgWidth ? imgWidth : 382} height={imgHeight ? imgHeight : 260} alt="" />
				</a>
				<div className="it-course-thumb-text">
					<span>{Category ? Category : 'Development'}</span>
				</div>
			</div>
			<div className="it-course-content">
				<div className="it-course-rating mb-10">
					<i className="fa-sharp fa-solid fa-star"></i>
					<i className="fa-sharp fa-solid fa-star"></i>
					<i className="fa-sharp fa-solid fa-star"></i>
					<i className="fa-sharp fa-solid fa-star"></i>
					<i className="fa-sharp fa-regular fa-star"></i>
					<span>({ratingCount ? ratingCount : '4.7'})</span>
				</div>
				<h4 className="it-course-title pb-5">
					<a href={`/course/${Slug ? Slug : 'details'}`}>
						{Title ? Title : 'Course Title'}
					</a>
				</h4>
				<div className="it-course-info pb-15 mb-25 d-flex justify-content-between">
					<span><i className="fa-light fa-file-invoice"></i>Lesson {lessonCount ? lessonCount : '100+'}</span>
					<span><i className="fa-sharp fa-regular fa-clock"></i>{Duration ? Duration : '50h 30m'}</span>
					<span><i className="fa-light fa-user"></i>Students {studentCount ? studentCount : '100+'}+</span>
				</div>
				<div className="it-course-author pb-15">
					<img src ={Author=="Prins Singh" ?"/img/avatar/prins.png" :"/img/avatar/shubham.png" } width={30} height={30} alt="" />
					<span>By <i>{Author ? Author : 'Prins Singh'}</i> in <i>{Category ? Category : 'Development'}</i></span>
				</div> 
				{/* <div className="it-course-price-box d-flex justify-content-between">
					<span><i>${Price ? Price : '60'}</i> ${prevPrice ? prevPrice : '120'}</span>
					<button onClick={() => handleCart(ID)}>
						<i className="fa-light fa-cart-shopping"></i>
						{btnText ? btnText : 'Add to cart'}
					</button>
				</div>  */}
			</div>
		</div>
	)
}
