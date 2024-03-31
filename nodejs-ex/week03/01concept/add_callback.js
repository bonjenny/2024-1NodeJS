// ./concept/add_callback.js
function add(a, b, callback) {
	var result = a + b;
	callback(result);
}
