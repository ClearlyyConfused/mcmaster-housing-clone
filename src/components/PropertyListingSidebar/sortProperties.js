function sortProperties(type, propertyList, setPropertyList) {
	let newList;
	if (type === 'PRICE ^') {
		newList = [...propertyList].sort((a, b) => a.cost_per_month - b.cost_per_month);
	} else if (type === 'PRICE v') {
		newList = [...propertyList].sort((a, b) => b.cost_per_month - a.cost_per_month);
	} else if (type === 'OLDEST') {
		newList = [...propertyList].sort((a, b) => new Date(a.date) - new Date(b.date));
	} else if (type === 'LATEST') {
		newList = [...propertyList].sort((a, b) => new Date(b.date) - new Date(a.date));
	} else {
		newList = [...propertyList];
	}
	setPropertyList(newList);
	localStorage.setItem('queries', JSON.stringify({ propertyList: newList, sortby: type }));
}

export default sortProperties;
