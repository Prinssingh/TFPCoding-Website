
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Courses from '../../components/data/courses.json';
import { Link } from 'react-router-dom';
import { productRemoveData, updateProductQuantity } from '../../redux/product/actionCreator';
const ProductRow = ({ id, slug, title, price, img , updateSubtotal }) => {

	const [quantity, setQuantity] = useState(1);
  
	useEffect(() => {
		// Update subtotal whenever quantity changes
		const subtotal = quantity * price;
		updateSubtotal(id, subtotal);
		dispatch(updateProductQuantity(id, quantity));
	}, [quantity]);
 
	const dispatch = useDispatch();

	const handleRemoveProduct = () => {
		dispatch(productRemoveData(id));
	};

	const handleIncrement = () => {
		setQuantity((prevQuantity) => prevQuantity + 1);
	};

	const handleDecrement = () => {
		if (quantity > 1) {
			setQuantity((prevQuantity) => prevQuantity - 1);
		}
	};

	const handleQuantityChange = (event) => {
		const newQuantity = parseInt(event.target.value);
		if (!isNaN(newQuantity) && newQuantity >= 1) {
			setQuantity(newQuantity);
		}
  	};

	const subtotal = quantity * price;

	return (
		<tr key={id}>
			<td className="product-thumbnail">
				<Link to={`/course/${slug ? slug : "details"}`}>
					<img  src={img} alt="" width={100} height={100} />
				</Link>
			</td>
			<td className="product-name">
				<Link to={`/course/${slug ? slug : "details"}`}>{title}</Link>
			</td>
			<td className="product-price">
				<span className="amount">${price}</span>
			</td>
			<td className="product-quantity">
				<span className="cart-minus" onClick={handleDecrement}>
				-
				</span>
				<input
					className="cart-input"
					type="number"
					min="1"
					value={quantity}
					onChange={handleQuantityChange}
				/>
				<span className="cart-plus" onClick={handleIncrement}>
				+
				</span>
			</td>
			<td className="product-subtotal">
				<span className="amount">${subtotal.toFixed(2)}</span>
			</td>
			<td className="product-remove">
				<button to="#" onClick={() => handleRemoveProduct(id)}>
					<i className="fa fa-times"></i>
				</button>
			</td>
		</tr>
	);
};

const CartArea = () => {
	const [productSubtotals, setProductSubtotals] = useState({});

	const addedToCart = useSelector((state) => state.product);
  	const selectedCourses = Courses.filter(course => addedToCart.addedProducts.some(product => product.id === course.id));

	const updateSubtotal = (productId, subtotal) => {
		setProductSubtotals((prevSubtotals) => ({
			...prevSubtotals,
			[productId]: subtotal,
		}));
	};
  
	// Calculate total price whenever product subtotals change
	const getTotalPrice = () => {
	  	return Object.values(productSubtotals).reduce((total, subtotal) => total + subtotal, 0);
	};
  

	return (
		<section className="cart-area pt-120 pb-120">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<form action="#">
							<div
								className="table-content table-responsive wow tpfadeUp"
								data-wow-duration=".9s"
								data-wow-delay=".3s"
							>
								<table className="table">
									<thead>
										<tr>
										<th className="product-thumbnail">img s</th>
										<th className="cart-product-name">Product</th>
										<th className="product-price">Unit Price</th>
										<th className="product-quantity">Quantity</th>
										<th className="product-subtotal">Total</th>
										<th className="product-remove">Remove</th>
										</tr>
									</thead>
									<tbody>
										{selectedCourses.length > 0 ? (
											selectedCourses.map((course) => (
												<ProductRow key={course.id} {...course} updateSubtotal={updateSubtotal} />
											))
										) : (
											<tr>
												<td colSpan="6" className="empty-cart">
													Cart is Empty
												</td>
											</tr>
										)}
									</tbody>
								</table>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="coupon-all">
										<div className="coupon">
											<input
												id="coupon_code"
												className="input-text"
												name="coupon_code"
												value=""
												placeholder="Coupon code"
												type="text"
											/>
											<button
												className="it-btn"
												name="apply_coupon"
												type="submit"
											>
												<span>Apply coupon</span>
											</button>
										</div>
										<div className="coupon2">
											<Link
												className="it-btn"
												to="/checkout"
											>
												<span>Update cart</span>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="row justify-content-end">
								<div className="col-md-5 ">
									<div className="cart-page-total">
										<h2>Cart totals</h2>
										<ul className="mb-20">
											<li>
												Subtotal <span>${getTotalPrice().toFixed(2)}</span>
											</li>
											<li>
												Total <span>${getTotalPrice().toFixed(2)}</span>
											</li>
										</ul>
										<Link className="it-btn" to="/checkout">
											<span>Proceed to checkout</span>
										</Link>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CartArea;
