import { useState } from 'react';
import sortProperties from './sortProperties';

function PropertyFilter({ sortby, setPropertyList, allPropertyList }) {
	const [minPrice, setMinPrice] = useState(
		localStorage.filters !== undefined ? JSON.parse(localStorage.filters).minPrice : 0
	);
	const [maxPrice, setMaxPrice] = useState(
		localStorage.filters !== undefined ? JSON.parse(localStorage.filters).maxPrice : 1000
	);
	const [maxDistance, setMaxDistance] = useState(
		localStorage.filters !== undefined ? JSON.parse(localStorage.filters).maxDistance : 10
	);

	function changeMinPrice(event) {
		setMinPrice(event.target.value);
	}

	function changeMaxPrice(event) {
		setMaxPrice(event.target.value);
	}

	function changeMaxDistance(event) {
		setMaxDistance(event.target.value);
	}

	function filterProperties(filter) {
		console.log(filter);
		let newList = [];
		for (const property of allPropertyList) {
			if (
				property.cost_per_month >= filter.minPrice &&
				property.cost_per_month <= filter.maxPrice &&
				property.distance <= filter.maxDistance
			) {
				newList.push(property);
			}
		}
		localStorage.setItem(
			'filters',
			JSON.stringify({ minPrice: minPrice, maxPrice: maxPrice, maxDistance: maxDistance })
		);
		sortProperties(sortby, newList, setPropertyList);
	}

	return (
		<div className="filter-tab">
			<form
				className="filter-items"
				onSubmit={(event) => {
					event.preventDefault();
					filterProperties({
						minPrice: parseInt(minPrice),
						maxPrice: parseInt(maxPrice),
						maxDistance: parseInt(maxDistance),
					});
				}}
			>
				<div>
					<label htmlFor="minPrice">Min Price</label>
					<input
						name="minPrice"
						type="number"
						value={minPrice}
						onChange={changeMinPrice}
						min="0"
						max="3000"
					/>
				</div>
				<div>
					<label htmlFor="maxPrice">Max Price</label>
					<input
						name="maxPrice"
						type="number"
						value={maxPrice}
						onChange={changeMaxPrice}
						min="0"
						max="3000"
					/>
				</div>
				<div>
					<label htmlFor="maxDistance">Max Distance</label>
					<input
						name="maxDistance"
						type="number"
						value={maxDistance}
						onChange={changeMaxDistance}
						min="0"
						max="15"
					/>
				</div>
				<input className="filter-submit" type="submit" value="Filter" />
			</form>
		</div>
	);
}

export default PropertyFilter;
