import './PropertySidebar.css';
import PropertySortTab from './PropertySortTab';
import PropertyFilterTab from './PropertyFilterTab';

function PropertySidebar({ propertyList, setPropertyList, allPropertyList }) {
	return (
		<section className="property-side-bar">
			<PropertySortTab propertyList={propertyList} setPropertyList={setPropertyList} />
			<PropertyFilterTab setPropertyList={setPropertyList} allPropertyList={allPropertyList} />
		</section>
	);
}

export default PropertySidebar;
