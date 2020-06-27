/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
//	let objEntries = Object.entries(obj);
	let retValue = {};
	for (let key in fields) {
		if (obj.hasOwnProperty(fields[key]) == true) {
			retValue[fields[key]] = obj[fields[key]];
		}
	}
	return retValue;
};
