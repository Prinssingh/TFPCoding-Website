
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
						{Title ? Title : 'It statistics data science and Business analysis'}
					</a>
				</h4>
				<div className="it-course-info pb-15 mb-25 d-flex justify-content-between">
					<span><i className="fa-light fa-file-invoice"></i>Lesson {lessonCount ? lessonCount : '10'}</span>
					<span><i className="fa-sharp fa-regular fa-clock"></i>{Duration ? Duration : '19h 30m'}</span>
					<span><i className="fa-light fa-user"></i>Students {studentCount ? studentCount : '20'}+</span>
				</div>
				{/* <div className="it-course-author pb-15">
					<img src="/img/course/avata-1.png" width={30} height={30} alt="" />
					<span>By <i>{Author ? Author : 'Angela'}</i> in <i>{Category ? Category : 'Development'}</i></span>
				</div> */}
				{/* <div className="it-course-price-box d-flex justify-content-between">
					<span><i>${Price ? Price : '60'}</i> ${prevPrice ? prevPrice : '120'}</span>
					<button onClick={() => handleCart(ID)}>
						<i className="fa-light fa-cart-shopping"></i>
						{btnText ? btnText : 'Add to cart'}
					</button>
				</div> */}
			</div>
		</div>
	)
}
