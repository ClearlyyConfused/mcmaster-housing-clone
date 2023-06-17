import './PropertySidebar.css';
import PropertySortTab from './PropertySortTab';
import PropertyFilterTab from './PropertyFilterTab';

function PropertySidebar({ propertyList, setPropertyList, allPropertyList, sortby, setSortby }) {
	return (
		<section className="property-side-bar">
			<PropertySortTab propertyList={propertyList} setPropertyList={setPropertyList} setSortby={setSortby} />
			<PropertyFilterTab
				sortby={sortby}
				setPropertyList={setPropertyList}
				allPropertyList={allPropertyList}
			/>
		</section>
	);
}

export default PropertySidebar;
