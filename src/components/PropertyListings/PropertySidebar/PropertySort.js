import { useState } from 'react';

function PropertySort({ sortProperties, sortby, setSortby }) {
	const [dropdown_active, setNavDropdownActive] = useState(false);
	return (
		<div
			className="sortby-tab"
			onClick={() => {
				setNavDropdownActive(!dropdown_active);
			}}
		>
			<div className="sortby-title">SORT BY {sortby}</div>
			<div className={`sortby-dropdown-items sortby-dropdown-active-${dropdown_active}`}>
				{/* prettier-ignore */}
				<h4 onClick={() => {setSortby('PRICE ^'); sortProperties("PRICE ^")}}>
								PRICE ^
							</h4>
				{/* prettier-ignore */}
				<h4 onClick={() => {setSortby('PRICE v'); sortProperties("PRICE v")}}>
								PRICE v
							</h4>
				{/* prettier-ignore */}
				<h4 onClick={() => {setSortby('LATEST'); sortProperties("LATEST")}}>
							LATEST
							</h4>
				{/* prettier-ignore */}
				<h4 onClick={() => {setSortby('OLDEST'); sortProperties("OLDEST")}}>
							OLDEST
							</h4>
			</div>
		</div>
	);
}

export default PropertySort;
