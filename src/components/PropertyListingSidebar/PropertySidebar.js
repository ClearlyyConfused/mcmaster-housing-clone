import { useState } from 'react';

import './PropertySidebar.css';
import PropertySort from './PropertySortTab';
import PropertyFilter from './PropertyFilterTab';

function PropertySidebar({ propertyList, setPropertyList, allPropertyList, sortby, setSortby }) {
	return (
		<section className="property-side-bar">
			<PropertySort
				propertyList={propertyList}
				setPropertyList={setPropertyList}
				sortby={sortby}
				setSortby={setSortby}
			/>
			<PropertyFilter sortby={sortby} setPropertyList={setPropertyList} allPropertyList={allPropertyList} />
		</section>
	);
}

export default PropertySidebar;
