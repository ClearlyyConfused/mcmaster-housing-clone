function sortProperties(sortBy, propertyList, setPropertyList) {
	let newList;
	if (sortBy === 'PRICE ^') {
		newList = [...propertyList].sort((a, b) => a.cost_per_month - b.cost_per_month);
	} else if (sortBy === 'PRICE v') {
		newList = [...propertyList].sort((a, b) => b.cost_per_month - a.cost_per_month);
	} else if (sortBy === 'OLDEST') {
		newList = [...propertyList].sort((a, b) => new Date(a.date) - new Date(b.date));
	} else if (sortBy === 'LATEST') {
		newList = [...propertyList].sort((a, b) => new Date(b.date) - new Date(a.date));
	} else {
		newList = [...propertyList];
	}
	setPropertyList(newList);
	// updates sortBy in localStorage
	localStorage.setItem('sortBy', JSON.stringify(sortBy));
}

export default sortProperties;
