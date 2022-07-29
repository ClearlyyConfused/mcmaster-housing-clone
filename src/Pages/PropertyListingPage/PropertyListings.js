import './PropertyListings.css';
import { useState, useEffect } from 'react';

import CheckLogin from '../../Auth/CheckLogin';

import Login from '../../Auth/Login/LoginPage';
import PropertySidebar from '../../components//PropertyListingSidebar/PropertySidebar';
import DisplayProperty from './DisplayProperty';

function PropertyListings() {
	const user = CheckLogin()[0];
	const [propertyList, setPropertyList] = useState([]);
	const [allPropertyList, setAllPropertyList] = useState([]);

	useEffect(() => {
		fetch('https://offcampus-mcmaster-api.herokuapp.com/property')
			.then((response) => response.json())
			.then((data) => {
				data.sort((a, b) => new Date(b.date) - new Date(a.date));
				setPropertyList(data);
				setAllPropertyList(data);
			});
	}, []);

	return user === null ? (
		<Login />
	) : (
		<main className="property-listing-page">
			<PropertySidebar
				propertyList={propertyList}
				setPropertyList={setPropertyList}
				allPropertyList={allPropertyList}
			/>

			<section className="property-listings">
				{propertyList.map((property) => {
					return <DisplayProperty property={property} />;
				})}
			</section>
		</main>
	);
}

export default PropertyListings;
