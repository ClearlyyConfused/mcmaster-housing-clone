function HeaderNavBtn({ buttonName, setCurrentPage }) {
	let page = ' ';
	if (buttonName === 'AVAILABLE PROPERTIES') {
		page = 'available-properties';
	} else if (buttonName === 'POST AD') {
		page = 'post-a-property';
	}

	return (
		<button
			onClick={() => {
				setCurrentPage(buttonName);
			}}
		>
			{/* if button is the HOME button and the current url is the homepage, display the highlight */}
			{/* else, check if url includes the corresponding text for that button */}
			{((window.location.href === 'https://mcmaster-housing-clone.vercel.app/' && buttonName === 'HOME') ||
				window.location.href.includes(page)) && <div className="pageIndicator"></div>}
			<span className="headerText">{buttonName}</span>
			{((window.location.href === 'https://mcmaster-housing-clone.vercel.app/' && buttonName === 'HOME') ||
				window.location.href.includes(page)) && <div className="pageIndicator"></div>}
		</button>
	);
}

export default HeaderNavBtn;
