import sortProperties from './sortProperties';

function PropertySort({ propertyList, setPropertyList }) {
	// whenever dropdown value changes, call sortProperties with new sortBy
	function handleChange() {
		if (document.getElementById('sortby').value === 'Price ^') {
			sortProperties('PRICE ^', propertyList, setPropertyList);
		}
		if (document.getElementById('sortby').value === 'Price v') {
			sortProperties('PRICE v', propertyList, setPropertyList);
		}
		if (document.getElementById('sortby').value === 'LATEST') {
			sortProperties('LATEST', propertyList, setPropertyList);
		}
		if (document.getElementById('sortby').value === 'OLDEST') {
			sortProperties('OLDEST', propertyList, setPropertyList);
		}
	}

	return (
		<div className="sortby-tab">
			<select onChange={handleChange} name="sortby" id="sortby">
				<option
					selected={
						localStorage.sortBy !== undefined
							? JSON.parse(localStorage.sortBy) === 'LATEST'
								? 'SELECT'
								: ''
							: ''
					}
					value="LATEST"
				>
					LATEST
				</option>
				<option
					selected={
						localStorage.sortBy !== undefined
							? JSON.parse(localStorage.sortBy) === 'OLDEST'
								? 'SELECT'
								: ''
							: ''
					}
					value="OLDEST"
				>
					OLDEST
				</option>
				<option
					selected={
						localStorage.sortBy !== undefined
							? JSON.parse(localStorage.sortBy) === 'PRICE ^'
								? 'PRICE ^'
								: ''
							: ''
					}
					value="Price ^"
				>
					Price ^
				</option>
				<option
					selected={
						localStorage.sortBy !== undefined
							? JSON.parse(localStorage.sortBy) === 'PRICE v'
								? 'PRICE v'
								: ''
							: ''
					}
					value="Price v"
				>
					Price v
				</option>
			</select>
		</div>
	);
}

export default PropertySort;
