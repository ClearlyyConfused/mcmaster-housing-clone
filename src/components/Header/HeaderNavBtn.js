function HeaderNavBtn({ buttonName, setCurrentPage, currentPage }) {
	return (
		<button
			onClick={() => {
				setCurrentPage(buttonName);
			}}
		>
			{currentPage === buttonName && <div className="pageIndicator"></div>}
			<span className="headerText">{buttonName}</span>
			{currentPage === buttonName && <div className="pageIndicator"></div>}
		</button>
	);
}

export default HeaderNavBtn;
