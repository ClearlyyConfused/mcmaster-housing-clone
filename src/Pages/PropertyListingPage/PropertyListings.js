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
	const [sortby, setSortby] = useState('OLDEST');

	useEffect(() => {
		fetch('https://mcmaster-housing-clone-api.vercel.app/property')
			.then((response) => response.json())
			.then((data) => {
				console.log(localStorage.queries !== undefined);
				if (localStorage.queries === undefined) {
					data.sort((a, b) => new Date(b.date) - new Date(a.date));
					setPropertyList(data);
				} else {
					sortProperties(
						JSON.parse(localStorage.queries).sortby,
						JSON.parse(localStorage.queries).propertyList,
						setPropertyList
					);
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
