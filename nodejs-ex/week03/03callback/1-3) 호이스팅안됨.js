/*
hello(); // 호이스팅 안됨 - hello is not a function
var hello = function (name) {
	console.log('hello');
};
hello();
*/

// hello(); // 호이스팅 안됨 - Cannot access 'hello' before initialization
const hello = function (name) {
	console.log('hello');
};
hello();
