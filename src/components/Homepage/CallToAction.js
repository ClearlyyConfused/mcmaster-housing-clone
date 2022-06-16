import { useState, useEffect } from 'react';
import { callToActionInfo } from '../Data';

function CallToAction() {
	const [currentDisplay, setCurrentDisplay] = useState(0);
	const [x, setX] = useState(0);

	function changeDisplayForward() {
		setX(0);
		if (currentDisplay + 1 === callToActionInfo.length) {
			setCurrentDisplay(0);
		} else {
			setCurrentDisplay(currentDisplay + 1);
		}
	}

	function changeDisplayBackwards() {
		setX(1);
		if (currentDisplay - 1 === -1) {
			setCurrentDisplay(callToActionInfo.length - 1);
		} else {
			setCurrentDisplay(currentDisplay - 1);
		}
	}

	useEffect(() => {
		// const timer = setInterval(changeDisplayForward, 10000);
		// return () => {
		//clearInterval(timer);
		//};
	});

	return (
		<div>
			{callToActionInfo.map((info, index) => {
				return infoDisplayFirst(
					info,
					currentDisplay,
					index,
					changeDisplayBackwards,
					changeDisplayForward,
					x
				);
			})}
			{callToActionInfo.map((info, index) => {
				return infoDisplay(
					info,
					currentDisplay,
					index,
					changeDisplayBackwards,
					changeDisplayForward,
					x
				);
			})}
		</div>
	);
}

function infoDisplayFirst(
	info,
	currentDisplay,
	index,
	changeDisplayBackwards,
	changeDisplayForward,
	x
) {
	if (currentDisplay === index) {
		if (x === 0) {
			return (
				<section className="CallToActionF">
					<button onClick={changeDisplayBackwards}>&lt;</button>
					<div className="CallToActionInfo">
						<h3>{info.title}</h3>
						<p>{info.description}</p>
						<button className="ContactBtn">{info.contact}</button>
					</div>
					<button onClick={changeDisplayForward}>&gt;</button>
				</section>
			);
		} else {
			return (
				<section className="CallToActionB">
					<button onClick={changeDisplayBackwards}>&lt;</button>
					<div className="CallToActionInfo">
						<h3>{info.title}</h3>
						<p>{info.description}</p>
						<button className="ContactBtn">{info.contact}</button>
					</div>
					<button onClick={changeDisplayForward}>&gt;</button>
				</section>
			);
		}
	}
}

function infoDisplay(
	info,
	currentDisplay,
	index,
	changeDisplayBackwards,
	changeDisplayForward,
	x
) {
	if (currentDisplay === index) {
		return null;
	}

	if (x === 0) {
		return (
			<section className="CallToActionInactiveF">
				<button onClick={changeDisplayBackwards}>&lt;</button>
				<div className="CallToActionInfo">
					<h3>{info.title}</h3>
					<p>{info.description}</p>
					<button className="ContactBtn">{info.contact}</button>
				</div>
				<button onClick={changeDisplayForward}>&gt;</button>
			</section>
		);
	} else {
		return (
			<section className="CallToActionInactiveB">
				<button onClick={changeDisplayBackwards}>&lt;</button>
				<div className="CallToActionInfo">
					<h3>{info.title}</h3>
					<p>{info.description}</p>
					<button className="ContactBtn">{info.contact}</button>
				</div>
				<button onClick={changeDisplayForward}>&gt;</button>
			</section>
		);
	}
}

export default CallToAction;
