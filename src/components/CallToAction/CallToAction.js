import { useState, useEffect } from 'react';
import './callToAction.css';

// creates call to action banner on home page
function CallToAction() {
	const [displayedInfo, setDisplayedInfo] = useState(0); // value = index in callToActionInfo to display
	const [displayDirection, setDisplayDirection] = useState('forward');

	const callToActionInfo = [
		{
			title: 'HELP SUPPORT UKRAINIAN STUDENTS AND SCHOLARS',
			description:
				'The Centre for Advanced Research in Experimental and Applied Linguistics (ARiEAL) is looking for landlords willing to offer discounted housing for Ukrainian students and scholars coming to McMaster this spring.',
			contact: 'CONTACT ARIEAL',
		},
		{
			title: 'CITY LAUNCHES RENTAL HOUSING LICENSING PILOT PROGRAM',
			description:
				'Requirements, including the program’s phased-in approach, supporting documents, applicable fees and process, are located on the City’s Rental Housing Licensing pilot program website.',
			contact: 'LEARN MORE',
		},
		{
			title: 'BE A GOOD NEIGHBOUR CAMPAIGN',
			description:
				'This fall, McMaster’s Good Neighbour campaign is welcoming students to the surrounding community and encourage positive neighbourly interactions.',
			contact: 'LEARN MORE',
		},
	];

	// automatically cycles through call to action banner every 10 seconds
	useEffect(() => {
		const timer = setInterval(changeDisplayForward, 10000);
		return () => {
			clearInterval(timer);
		};
	});

	// sets direction animation will go in
	// sets info index to be displayed
	function changeDisplayForward() {
		setDisplayDirection('forward');
		if (displayedInfo + 1 === callToActionInfo.length) {
			setDisplayedInfo(0);
		} else {
			setDisplayedInfo(displayedInfo + 1);
		}
	}
	function changeDisplayBackwards() {
		setDisplayDirection('backwards');
		if (displayedInfo - 1 === -1) {
			setDisplayedInfo(callToActionInfo.length - 1);
		} else {
			setDisplayedInfo(displayedInfo - 1);
		}
	}

	return (
		<div className="call-to-action-container">
			{/* calls below function on callToActionInfo */}
			{callToActionInfo.map((info, index) => {
				return infoDisplay(
					info,
					displayedInfo,
					index,
					changeDisplayBackwards,
					changeDisplayForward,
					displayDirection
				);
			})}
		</div>
	);
}

// creates the call to action banner with info
// either displays info with correct animation or hide info based on which info is being displayed
function infoDisplay(
	info,
	displayedInfo,
	index,
	changeDisplayBackwards,
	changeDisplayForward,
	displayDirection
) {
	// if function called with the current info to be displayed, give it class with animation based on direction
	// else, give it an inactive class to hide it
	let classVer;
	if (displayedInfo === index) {
		classVer = displayDirection === 'forward' ? 'CallToActionF' : 'CallToActionB';
	} else {
		classVer = displayDirection === 'forward' ? 'CallToActionInactiveF' : 'CallToActionInactiveB';
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
