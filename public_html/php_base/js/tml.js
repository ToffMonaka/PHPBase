var tml = tml || {};

tml.getElementByIDName = function (id_name) {
	return (document.getElementById(id_name));
};

tml.getElementByTagName = function (element, tag_name) {
	return (element.getElementsByTagName(tag_name));
};

tml.getElementByClassName = function (element, class_name) {
	return (element.getElementsByClassName(class_name));
};

tml.getCSSValue = function (element, val_name, default_val) {
	let val = (window.getComputedStyle) ? window.getComputedStyle(element).getPropertyValue(val_name) : '';

	return ((val.length > 0) ? val : default_val);
};

tml.clamp = function (val, min_val, max_val) {
	return ((val < min_val) ? min_val : (val > max_val) ? max_val : val);
};

tml.getNumberFromString = function (str, default_val) {
	let val = default_val;

	if (str.length > 0) {
		val = Number(str);

		if (isNaN(val)) {
			val = default_val;
		}
	}

	return (val);
};

tml.getStringFromNumber = function (val) {
	let str = '' + val;

	return (str);
};

tml.getBinaryStringFromBinaryArray = function (bin_ary) {
	return (Array.from(bin_ary, val => String.fromCharCode(val)).join(''));
};

tml.getBinaryArrayFromBinaryString = function (bin_str) {
	return (Uint8Array.from(bin_str.split(''), val => val.charCodeAt(0)));
};

tml.getFileExt = function (file_name) {
	let index = file_name.lastIndexOf('.');

	if (index == -1) {
		return ('');
	}

	return (file_name.slice(index + 1));
};
