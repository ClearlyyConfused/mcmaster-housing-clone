import { useState, useEffect } from 'react';
import { callToActionInfo } from '../Data';
import './callToAction.css';

function CallToAction() {
	const [currentDisplay, setCurrentDisplay] = useState(0);
	const [displayDirection, setDisplayDirection] = useState('forward');

	function changeDisplayForward() {
		setDisplayDirection('forward');
		if (currentDisplay + 1 === callToActionInfo.length) {
			setCurrentDisplay(0);
		} else {
			setCurrentDisplay(currentDisplay + 1);
		}
	}

	function changeDisplayBackwards() {
		setDisplayDirection('backwards');
		if (currentDisplay - 1 === -1) {
			setCurrentDisplay(callToActionInfo.length - 1);
		} else {
			setCurrentDisplay(currentDisplay - 1);
		}
	}

	useEffect(() => {
		const timer = setInterval(changeDisplayForward, 10000);
		return () => {
			clearInterval(timer);
		};
	});

	return (
		<div className="call-to-action-container">
			{callToActionInfo.map((info, index) => {
				return infoDisplay(
					info,
					currentDisplay,
					index,
					changeDisplayBackwards,
					changeDisplayForward,
					displayDirection
				);
			})}
		</div>
	);
}

function infoDisplay(
	info,
	currentDisplay,
	index,
	changeDisplayBackwards,
	changeDisplayForward,
	displayDirection
) {
	let classVer;
	if (currentDisplay === index) {
		classVer = displayDirection === 'forward' ? 'CallToActionF' : 'CallToActionB';
	} else {
		classVer =
			displayDirection === 'forward' ? 'CallToActionInactiveF' : 'CallToActionInactiveB';
	}

	return (
		<section className={classVer}>
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

export default CallToAction;
