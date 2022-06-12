import { useState, useEffect } from 'react';
import { callToActionInfo } from './Data';

function CallToAction() {
	const [currentDisplay, setCurrentDisplay] = useState(0);

	function changeDisplayForward() {
		if (currentDisplay + 1 === callToActionInfo.length) {
			setCurrentDisplay(0);
		} else {
			setCurrentDisplay(currentDisplay + 1);
		}
	}

	function changeDisplayBackwards() {
		if (currentDisplay - 1 === -1) {
			setCurrentDisplay(callToActionInfo.length - 1);
		} else {
			setCurrentDisplay(currentDisplay - 1);
		}
	}

	useEffect(() => {
		const timer = setInterval(changeDisplayForward, 5000);

		return () => {
			clearInterval(timer);
		};
	});

	return (
		<section className="CallToAction">
			<button onClick={changeDisplayBackwards}>&lt;</button>
			<div className="CallToActionInfo">
				<h3>{callToActionInfo[currentDisplay].title}</h3>
				<p>{callToActionInfo[currentDisplay].description}</p>
				<button className="ContactBtn">{callToActionInfo[currentDisplay].contact}</button>
			</div>
			<button onClick={changeDisplayForward}>&gt;</button>
		</section>
	);
}

export default CallToAction;
