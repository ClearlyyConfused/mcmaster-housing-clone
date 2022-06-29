import { useState } from 'react';

import PropertySort from './PropertySort';
import PropertyFilter from './PropertyFilter';

function PropertySidebar({ propertyList, setPropertyList }) {
	const [sortby, setSortby] = useState('LATEST');

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

	return (
		<section className="property-side-bar">
			<PropertySort
				sortProperties={sortProperties}
				sortby={sortby}
				setSortby={setSortby}
			/>
			<PropertyFilter sortProperties={sortProperties} sortby={sortby} />
		</section>
	);
}

export default PropertySidebar;
