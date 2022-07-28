import { useLocation } from 'react-router-dom';

function CurrentPage() {
	let startingPage = useLocation().pathname;
	if (startingPage === '/') {
		startingPage = 'HOME';
	} else if (startingPage === '/post-a-property') {
		startingPage = 'POST AD';
	} else if (startingPage === '/available-properties') {
		startingPage = 'AVAILABLE PROPERTIES';
	}

	return startingPage;
}

export default CurrentPage;
