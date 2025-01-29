
export default function SingleTestimonial( props ) {
	const { testiClass, authorName, designation, description } = props;
	return (
		<div className={testiClass ? testiClass : 'it-testimonial-slide-item '}>
			<div className="it-testimonial-slide-info ">
				<h4 className="it-testimonial-user-name">{authorName ? authorName : 'TFP Student'}</h4>
				<span>{designation ? designation : 'Happy Developers'}</span>
				<p>{description ? description : 'Excillent Coding Classes in Satna.'}</p>
			</div>
		</div>
	);
}
