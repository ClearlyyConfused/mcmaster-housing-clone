import sortProperties from './sortProperties';

function PropertySort({ setSortby, propertyList, setPropertyList }) {
	function handleChange() {
		if (document.getElementById('sortby').value === 'Price ^') {
			setSortby('PRICE ^');
			sortProperties('PRICE ^', propertyList, setPropertyList);
		}
		if (document.getElementById('sortby').value === 'Price v') {
			setSortby('PRICE v');
			sortProperties('PRICE v', propertyList, setPropertyList);
		}
		if (document.getElementById('sortby').value === 'LATEST') {
			setSortby('LATEST');
			sortProperties('LATEST', propertyList, setPropertyList);
		}
		if (document.getElementById('sortby').value === 'OLDEST') {
			setSortby('OLDEST');
			sortProperties('OLDEST', propertyList, setPropertyList);
		}
	}

	return (
		<div className="sortby-tab">
			<select onChange={handleChange} name="sortby" id="sortby">
				<option value="LATEST">LATEST</option>
				<option value="OLDEST">OLDEST</option>
				<option value="Price ^">Price ^</option>
				<option value="Price v">Price v</option>
			</select>
		</div>
	);
}

export default PropertySort;
