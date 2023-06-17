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
				<option
					selected={
						localStorage.queries !== undefined
							? JSON.parse(localStorage.queries).sortby === 'LATEST'
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
						localStorage.queries !== undefined
							? JSON.parse(localStorage.queries).sortby === 'OLDEST'
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
						localStorage.queries !== undefined
							? JSON.parse(localStorage.queries).sortby === 'OLDEST'
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
						localStorage.queries !== undefined
							? JSON.parse(localStorage.queries).sortby === 'OLDEST'
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
