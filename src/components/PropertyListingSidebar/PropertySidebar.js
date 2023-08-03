import './PropertySidebar.css';
import PropertySortTab from './PropertySortTab';
import PropertyFilterTab from './PropertyFilterTab';

function PropertySidebar({ propertyList, setPropertyList, allPropertyList, resetPropertyPage }) {
	return (
		<section className="property-side-bar">
			<PropertySortTab propertyList={propertyList} setPropertyList={setPropertyList} />
			<PropertyFilterTab
				setPropertyList={setPropertyList}
				allPropertyList={allPropertyList}
				resetPropertyPage={resetPropertyPage}
			/>
		</section>
	);
}

export default PropertySidebar;
