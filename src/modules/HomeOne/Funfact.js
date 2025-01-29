import { useState } from "react"
import CountUp from "react-countup";

export default function Funfact() {
    const [state, setState] = useState(true);
    
    const counters = [
        {
            countNum: 500,
            countTitle: 'Successfully Trained',
            countIcon: 'flaticon-teacher',
			postfix: '+'
        },
        {
            countNum: 15,
            countTitle: 'Classes Completed',
            countIcon: 'flaticon-completed-task',
			postfix: '+'
        },
        {
            countNum: 96,
            countTitle: 'Satisfaction Rate',
            countIcon: 'flaticon-customer-review',
			postfix: '%'
        },
        {
            countNum : 5,
            countTitle: 'Students Community',
            countIcon: 'flaticon-class',
			postfix: '+'
        }

    ];

	return (
		<div className="it-funfact-area z-index-5" id="statics">
			<div className="container">
				<div className="it-funfact-bg-wrap theme-bg">
					{/* <img src="/img/funfact/funfact-bg.png" fill={true} alt="" /> */}
					{counters &&
                        <div className="row gx-0">
                            {counters.map( (counter, num) => (
                                <div key={num} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
									<div className="it-funfact-item d-flex align-items-center">
										<div className="it-funfact-icon">
											<span><i className={counter.countIcon}></i></span>
										</div>
										<div className="it-funfact-content theme">
											<h6>
												<CountUp  className="theme"  style={{fontSize: '40px', fontWeight: '700' }} start={state ? 0 : counter.countNum } end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
												{counter.postfix}
											</h6>
											<span>{counter.countTitle}</span>
										</div>
									</div>
                                </div>
                            ))}
                        </div>
                    }
				</div>
			</div>
		</div>
	)
}
