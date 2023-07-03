import './PropertyListings.css';
import { useState, useEffect } from 'react';

import CheckLogin from '../../Auth/CheckLogin';

import Login from '../../Auth/Login/LoginPage';
import PropertySidebar from '../../components//PropertyListingSidebar/PropertySidebar';
import DisplayProperty from './DisplayProperty';
import sortProperties from '../../components/PropertyListingSidebar/sortProperties';

function PropertyListings() {
	const user = CheckLogin()[0];
	const [loading, setLoading] = useState(true);

	// shown properties (may be filtered)
	const [propertyList, setPropertyList] = useState([]);
	// all properties (used to reset filter)
	const [allPropertyList, setAllPropertyList] = useState([]);
	// what to sort properties by
	const [sortby, setSortby] = useState(
		localStorage.queries !== undefined ? JSON.parse(localStorage.queries).sortby : 'LATEST'
	);

	// onload, queries property set by queries saved in localStorage
	useEffect(() => {
		fetch('https://mcmaster-housing-clone-api.vercel.app/property')
			.then((response) => response.json())
			.then((data) => {
				// fetch all properties as data

				// if localStorage empty (no sort by, no filters), sort all properties by latest
				if (localStorage.queries === undefined && localStorage.filters === undefined) {
					sortProperties('LATEST', data, setPropertyList);
				}
				// if localStorage.filters empty (sort by, no filters), sort all properties by the sort by in localStorage
				else if (localStorage.filters === undefined) {
					sortProperties(JSON.parse(localStorage.queries).sortby, data, setPropertyList);
				}
				// if localStorage.filters not empty, then sortby also not empty (default LATEST when filtered)
				// filter all properties (data) by filters in localStorage, sort filtered by the sort by in localStorage
				else {
					let newList = [];
					for (const property of data) {
						if (
							property.cost_per_month >= JSON.parse(localStorage.filters).minPrice &&
							property.cost_per_month <= JSON.parse(localStorage.filters).maxPrice &&
							property.distance <= JSON.parse(localStorage.filters).maxDistance &&
							property.distance !== -1
						) {
							newList.push(property);
						}
					}
					sortProperties(JSON.parse(localStorage.queries).sortby, newList, setPropertyList);
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
					sortby={sortby}
					setSortby={setSortby}
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
