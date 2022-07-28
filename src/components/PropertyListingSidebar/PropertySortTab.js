import { useState } from 'react';
import sortProperties from './sortProperties';

function PropertySort({ sortby, setSortby, propertyList, setPropertyList }) {
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
				<h4 onClick={() => {setSortby('PRICE ^'); sortProperties("PRICE ^", propertyList, setPropertyList)}}>
								PRICE ^
							</h4>
				{/* prettier-ignore */}
				<h4 onClick={() => {setSortby('PRICE v'); sortProperties("PRICE v" , propertyList, setPropertyList)}}>
								PRICE v
							</h4>
				{/* prettier-ignore */}
				<h4 onClick={() => {setSortby('LATEST'); sortProperties("LATEST", propertyList, setPropertyList)}}>
							LATEST
							</h4>
				{/* prettier-ignore */}
				<h4 onClick={() => {setSortby('OLDEST'); sortProperties("OLDEST", propertyList, setPropertyList)}}>
							OLDEST
							</h4>
			</div>
		</div>
	);
}

export default PropertySort;
