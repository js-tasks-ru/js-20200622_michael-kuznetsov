/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {

	let retValue = Object.assign({},obj);
	for (let key in fields) {
		if (obj.hasOwnProperty(fields[key]) == true) {
			delete retValue[fields[key]];
		}
	}
	return retValue;

};
