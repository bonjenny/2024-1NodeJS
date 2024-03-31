function main(value) {
	value();
}
function sub() {
	console.log('SUB');
}
main(sub);

// 이렇게도 치환 가능
function main(value) {
	value();
}
main(function sub() {
	console.log('SUB');
});

// 이렇게도 치환 가능
function main(value) {
	value();
}
main(function () {
	console.log('SUB');
});

// 이렇게도 치환 가능
function main(value) {
	value();
}
main(() => {
	console.log('SUB');
});

// 이렇게도 치환 가능
function main(value) {
	value();
}
main(() => console.log('SUB'));
