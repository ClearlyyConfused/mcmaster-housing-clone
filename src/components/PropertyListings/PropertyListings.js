import { useState, useEffect } from 'react';

import { auth } from '../../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import './PropertyListings.css';
import Login from '../Login';
import { propertyInfo } from '../Data';
import DisplayProperty from './DisplayProperty';
import PropertySidebar from './PropertySidebar';

function PropertyListings() {
	const [user] = useAuthState(auth);
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
