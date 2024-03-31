// 콜백함수: 함수의 매개변수로 또 다른 함수를 호출한다.

function repeat(count, callback) {
	for (let idx = 1; idx <= count; idx++) {
		callback(idx);
	}
}
repeat(5, function (idx) {
	console.log(idx);
}); // repeat
repeat(5, function (idx) {
	console.log(idx * 2);
}); // repeatDouble
repeat(5, function (idx) {
	console.log(idx * 3);
}); // repeatTripple

// 이렇게도 사용 가능
function repeat(count, callback) {
	for (let idx = 1; idx <= count; idx++) {
		callback(idx);
	}
}
repeat(5, (idx) => console.log(idx)); // repeat
repeat(5, (idx) => console.log(idx * 2)); // repeatDouble
repeat(5, (idx) => console.log(idx * 3)); // repeatTripple
