import { useState } from 'react';

function PropertySort({ sortProperties, sortby, setSortby }) {
	const [dropdown_active, setNavDropdownActive] = useState(false);
	return (
		<h3 className="sortby-tab">
			SORT BY
			<div
				onClick={() => {
					setNavDropdownActive(!dropdown_active);
				}}
			>
				<div className="sortby-title">{sortby}</div>
				<div
					className={`sortby-dropdown-items sortby-dropdown-active-${dropdown_active}`}
				>
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
		</h3>
	);
}

export default PropertySort;
