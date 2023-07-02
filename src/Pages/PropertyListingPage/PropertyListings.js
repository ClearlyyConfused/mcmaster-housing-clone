import './PropertyListings.css';
import { useState, useEffect } from 'react';

import CheckLogin from '../../Auth/CheckLogin';

import Login from '../../Auth/Login/LoginPage';
import PropertySidebar from '../../components//PropertyListingSidebar/PropertySidebar';
import DisplayProperty from './DisplayProperty';
import DisplayedProperty from './DisplayedProperty';
import sortProperties from '../../components/PropertyListingSidebar/sortProperties';

function PropertyListings() {
	const user = CheckLogin()[0];
	const [propertyList, setPropertyList] = useState([]);
	const [allPropertyList, setAllPropertyList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [displayedProperty, setDisplayedProperty] = useState(undefined);
	const [sortby, setSortby] = useState(
		localStorage.queries !== undefined ? JSON.parse(localStorage.queries).sortby : 'LATEST'
	);

	useEffect(() => {
		fetch('https://mcmaster-housing-clone-api.vercel.app/property')
			.then((response) => response.json())
			.then((data) => {
				if (localStorage.queries === undefined && localStorage.filters === undefined) {
					data.sort((a, b) => new Date(b.date) - new Date(a.date));
					sortProperties('LATEST', data, setPropertyList);
				} else {
					if (localStorage.filters === undefined) {
						console.log('ran');
						data.sort((a, b) => new Date(b.date) - new Date(a.date));
						sortProperties(JSON.parse(localStorage.queries).sortby, data, setPropertyList);
					} else {
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
				}
				setAllPropertyList(data);
				setLoading(false);
			});
	}, []);

	if (user === null) {
		return <Login />;
	} else if (displayedProperty === undefined) {
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
							return <DisplayProperty property={property} setDisplayedProperty={setDisplayedProperty} />;
						})
					)}
				</section>
			</main>
		);
	} else {
		return (
			<main className="property-listing-page">
				<DisplayedProperty setDisplay={setDisplayedProperty} displayedProperty={displayedProperty} />
			</main>
		);
	}
}

export default PropertyListings;
