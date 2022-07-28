import './PropertyListings.css';
import { useState, useEffect } from 'react';

import CheckLogin from '../../Auth/CheckLogin';
import { propertyInfo } from '../../components/Data';

import Login from '../../Auth/Login/LoginPage';
import PropertySidebar from '../../components//PropertyListingSidebar/PropertySidebar';
import DisplayProperty from './DisplayProperty';

function PropertyListings() {
	const user = CheckLogin()[0];
	const [propertyList, setPropertyList] = useState(propertyInfo);

	useEffect(() => {
		let newList;
		newList = [...propertyList].sort((a, b) => new Date(b.date) - new Date(a.date));
		setPropertyList(newList);
	}, []);

	return user === null ? (
		<Login />
	) : (
		<main className="property-listing-page">
			<PropertySidebar propertyList={propertyList} setPropertyList={setPropertyList} />

			<section className="property-listings">
				{propertyList.map((property) => {
					return <DisplayProperty property={property} />;
				})}
			</section>
		</main>
	);
}

export default PropertyListings;
