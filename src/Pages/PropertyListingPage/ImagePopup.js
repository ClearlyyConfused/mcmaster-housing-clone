import { useEffect } from 'react';

function ImagePopup({ image, setImagePopup }) {
	useEffect(() => {
		function handleClick(e) {
			if (e.target === document.getElementsByClassName('image-popup-background')[0]) {
				setImagePopup(undefined);
			}
		}
		document.addEventListener('click', handleClick);

		if (image) {
			// if displaying full project info:
			// hide the full page scrollbar, set padding to offset scrollbar being hidden, display project description
			const body = document.getElementsByTagName('body')[0];
			body.style.paddingRight = getScrollBarWidth() + 'px';
			body.style.overflowY = 'hidden';
		} else {
			// if not displaying full project info
			// undo above, if mouse is not in the project panel then hide project description
			const body = document.getElementsByTagName('body')[0];
			body.style.paddingRight = '0px';
			body.style.overflowY = 'scroll';
		}

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, [image]);

	if (image === undefined) {
		return '';
	}

	return (
		<div className="image-popup-background">
			<div className="image-popup">
				<button
					onClick={() => {
						setImagePopup(undefined);
					}}
				>
					X
				</button>
				<img src={image} alt="" />
			</div>
		</div>
	);
}

function getScrollBarWidth() {
	var inner = document.createElement('p');
	inner.style.width = '100%';
	inner.style.height = '200px';

	var outer = document.createElement('div');
	outer.style.position = 'absolute';
	outer.style.top = '0px';
	outer.style.left = '0px';
	outer.style.visibility = 'hidden';
	outer.style.width = '200px';
	outer.style.height = '150px';
	outer.style.overflow = 'hidden';
	outer.appendChild(inner);

	document.body.appendChild(outer);
	var w1 = inner.offsetWidth;
	outer.style.overflow = 'scroll';
	var w2 = inner.offsetWidth;
	if (w1 === w2) w2 = outer.clientWidth;

	document.body.removeChild(outer);

	return w1 - w2;
}

export default ImagePopup;
