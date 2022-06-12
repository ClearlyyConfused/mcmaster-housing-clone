import { useState } from 'react';

function CallToAction() {
	const [information, setInformation] = useState([
		{
			title: 'HELP SUPPORT UKRAINIAN Students AND SCHOLARS',
			description:
				'The Centre for Advanced Research in Experimental and Applied Linguistics (ARiEAL) is looking for landlords willing to offer discounted housing for Ukrainian students and scholars coming to McMaster this spring.',
			contact: 'IF INTERESTED, PLEASE CONTACT ARIEAL',
		},
		{
			title: 'City launches Rental Housing Licensing pilot program',
			description:
				'Requirements, including the program’s phased-in approach, supporting documents, applicable fees and process, are located on the City’s Rental Housing Licensing pilot program website.',
			contact: 'LEARN MORE',
		},
		{
			title:
				'Excepteur aliqua exercitation exercitation culpa labore laborum nostrud id aliqua.',
			description:
				'Qui ex laborum minim sit occaecat ad consectetur incididunt voluptate adipisicing. Dolore sunt elit enim ad ea ea sint duis veniam quis. Id minim dolore id ullamco anim eiusmod reprehenderit. Id esse do id est non. ',
			contact: 'Lorem ipsum quis officia id amet mollit.',
		},
	]);

	const [currentDisplay, setCurrentDisplay] = useState(0);

	function changeInfoForward() {
		if (currentDisplay + 1 === information.length) {
			setCurrentDisplay(0);
		} else {
			setCurrentDisplay(currentDisplay + 1);
		}
	}

	function changeInfoBackwards() {
		if (currentDisplay - 1 === -1) {
			setCurrentDisplay(information.length - 1);
		} else {
			setCurrentDisplay(currentDisplay - 1);
		}
	}

	return (
		<section className="CallToAction">
			<button onClick={changeInfoBackwards}>&lt;</button>
			<h3>{information[currentDisplay].title}</h3>
			<p>{information[currentDisplay].description}</p>
			<button className="ContactBtn">{information[currentDisplay].contact}</button>
			<button onClick={changeInfoForward}>&gt;</button>
		</section>
	);
}

export default CallToAction;
