import { useEffect, useState } from 'react';

function ViewWidth() {
	const [viewWidth, setViewWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setViewWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return viewWidth;
}
export default ViewWidth;
