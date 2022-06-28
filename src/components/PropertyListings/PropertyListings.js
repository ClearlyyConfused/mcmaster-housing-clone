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

	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(1000);
	const [maxDistance, setMaxDistance] = useState(10);

	const [dropdown_active, setNavDropdownActive] = useState(false);

	function sortProperties(type, list = propertyList) {
		let newList;
		if (type === 'PRICE ^') {
			newList = [...list].sort((a, b) => a.cost_per_month - b.cost_per_month);
		}
		if (type === 'PRICE v') {
			newList = [...list].sort((a, b) => b.cost_per_month - a.cost_per_month);
		}
		if (type === 'OLDEST') {
			newList = [...list].sort((a, b) => new Date(a.date) - new Date(b.date));
		}
		if (type === 'LATEST') {
			newList = [...list].sort((a, b) => new Date(b.date) - new Date(a.date));
		}
		setPropertyList(newList);
	}

	function filterProperties(filter) {
		console.log(filter);

		let newList = [];
		for (const property of propertyInfo) {
			if (
				property.cost_per_month >= filter.minPrice &&
				property.cost_per_month <= filter.maxPrice &&
				property.distance <= filter.maxDistance
			) {
				newList.push(property);
			}
		}
		sortProperties(sortby, newList);
	}

	function changeMinPrice(event) {
		setMinPrice(event.target.value);
	}

	function changeMaxPrice(event) {
		setMaxPrice(event.target.value);
	}

	function changeMaxDistance(event) {
		setMaxDistance(event.target.value);
	}

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

				<div className="filter-tab">
					<h3>FILTER</h3>
					<form
						onSubmit={(event) => {
							event.preventDefault();
							filterProperties({
								minPrice: parseInt(minPrice),
								maxPrice: parseInt(maxPrice),
								maxDistance: parseInt(maxDistance),
							});
						}}
					>
						<label htmlFor="minPrice">Min Price</label>
						<input
							name="minPrice"
							type="number"
							value={minPrice}
							onChange={changeMinPrice}
						/>
						<label htmlFor="maxPrice">Max Price</label>
						<input
							name="maxPrice"
							type="number"
							value={maxPrice}
							onChange={changeMaxPrice}
						/>
						<label htmlFor="maxDistance">Max Distance</label>
						<input
							name="maxDistance"
							type="number"
							value={maxDistance}
							onChange={changeMaxDistance}
						/>
						<input type="submit" value="Submit" />
					</form>
				</div>
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
