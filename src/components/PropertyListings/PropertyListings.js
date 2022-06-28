import { auth } from '../../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from '../Login';
import { propertyInfo } from '../Data';
import DisplayProperty from './DisplayProperty';
import './PropertyListings.css';
import { useState } from 'react';
import { useEffect } from 'react';

function PropertyListings() {
	const [user] = useAuthState(auth);
	const [propertyList, setPropertyList] = useState(propertyInfo);
	const [sortby, setSortby] = useState('PRICE ^');
	const [dropdown_active, setDropdownActive] = useState(false);

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

	if (user === null) {
		return <Login />;
	}

	return (
		<main className="property-listing-page">
			<section className="property-side-bar">
				<h3 className="sortby-tab">
					SORT BY
					<div
						className="sortby-dropdown"
						onClick={() => {
							setDropdownActive(!dropdown_active);
						}}
					>
						<div className="sortby-title">{sortby}</div>
						<div className={`sortby-dropdown-items dropdown-active-${dropdown_active}`}>
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
