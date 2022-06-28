import { useState, useEffect } from 'react';

import { auth } from '../../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { propertyInfo } from '../Data';

import './PropertyListings.css';
import Login from '../Login';
import DisplayProperty from './DisplayProperty';

function PropertyListings() {
	const [user] = useAuthState(auth);

	const [propertyList, setPropertyList] = useState(propertyInfo);
	const [sortby, setSortby] = useState('LATEST');

	const [dropdown_active, setNavDropdownActive] = useState(false);

	function sortProperties(type) {
		let newList;
		if (type === 'PRICE ^') {
			newList = [...propertyList].sort((a, b) => a.cost_per_month - b.cost_per_month);
		}
		if (type === 'PRICE v') {
			newList = [...propertyList].sort((a, b) => b.cost_per_month - a.cost_per_month);
		}
		if (type === 'OLDEST') {
			newList = [...propertyList].sort((a, b) => new Date(a.date) - new Date(b.date));
		}
		if (type === 'LATEST') {
			newList = [...propertyList].sort((a, b) => new Date(b.date) - new Date(a.date));
		}
		setPropertyList(newList);
	}

	useEffect(() => {
		sortProperties(sortby);
	}, [sortby]);

	return user === null ? (
		<Login />
	) : (
		<main className="property-listing-page">
			<section className="property-side-bar">
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
							<h4 onClick={() => {setSortby('PRICE ^');}}>
								PRICE ^
							</h4>
							{/* prettier-ignore */}
							<h4 onClick={() => {setSortby('PRICE v');}}>
								PRICE v
							</h4>
							{/* prettier-ignore */}
							<h4 onClick={() => {setSortby('LATEST');}}>
							LATEST
							</h4>
							{/* prettier-ignore */}
							<h4 onClick={() => {setSortby('OLDEST');}}>
							OLDEST
							</h4>
						</div>
					</div>
				</h3>
			</section>
			<section className="property-listings">
				{propertyList.map((property) => {
					return <DisplayProperty property={property} />;
				})}
			</section>
		</main>
	);
}

export default PropertyListings;
