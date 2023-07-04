import './PropertyListings.css';
import { useState, useEffect } from 'react';

import CheckLogin from '../../Auth/CheckLogin';
import Login from '../../Auth/Login/LoginPage';

import PropertySidebar from '../../components//PropertyListingSidebar/PropertySidebar';
import DisplayProperty from './DisplayProperty';

import sortProperties from '../../Helper/sortProperties';
import filterProperties from '../../Helper/filterProperties';

function PropertyListings() {
	const user = CheckLogin()[0];
	const [loading, setLoading] = useState(true);

	// shown properties (may be filtered)
	const [propertyList, setPropertyList] = useState([]);
	// all properties (used to reset filter)
	const [allPropertyList, setAllPropertyList] = useState([]);
	// what properties are sorted by stored in localStorage

	// onload, queries properties by queries saved in localStorage
	useEffect(() => {
		fetch('https://mcmaster-housing-clone-api.vercel.app/property')
			.then((response) => response.json())
			.then((data) => {
				// if localStorage.filters empty, sort all properties by sortBy in localStorage or default LATEST
				if (localStorage.filters === undefined) {
					if (localStorage.sortBy !== undefined) {
						sortProperties(JSON.parse(localStorage.sortBy), data, setPropertyList);
					} else {
						sortProperties('LATEST', data, setPropertyList);
					}
				}
				// if localStorage.filters not empty, then sortBy also not empty (default LATEST when filtered)
				// filter all properties by filters in localStorage, sort filtered by the sortBy in localStorage
				else {
					const newList = filterProperties(data, JSON.parse(localStorage.filters));
					sortProperties(JSON.parse(localStorage.sortBy), newList, setPropertyList);
				}
				setAllPropertyList(data);
				setLoading(false);
			});
	}, []);

	if (user === null) {
		return <Login />;
	} else {
		return (
			<main className="property-listing-page">
				<PropertySidebar
					propertyList={propertyList}
					setPropertyList={setPropertyList}
					allPropertyList={allPropertyList}
				/>

				<section className="property-listings">
					{loading ? (
						<div>Loading...</div>
					) : (
						propertyList.map((property) => {
							return <DisplayProperty property={property} />;
						})
					)}
				</section>
			</main>
		);
	}
}

export default PropertyListings;
