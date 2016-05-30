var room = {
	name = "",
	type = "",
	deck = "",
	MVZ = 1,
	DPZ = 1,
	systems = [],
};

function calcDims(a, b) {
	a = duct.dims[1]
	b = duct.dims[2]

	if (b > 0) {
		return a * b / 1000000
	} else {
		return a^2 * Math.PI / 4
	};
};

var duct = {
	number = 0,
	type = "",
	dims = [300, 400],
	area = calcDims

}