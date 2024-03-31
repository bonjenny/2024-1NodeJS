// 화살표함수(Arrow Function)

// 1) 함수 선언식
function hello(name) {
	return 'Hello' + name;
}

// 2) 함수 표현식
const hello2 = function (name) {
	return 'Hello' + name;
};

// 3)
const hello3 = (name) => {
	return 'Hello' + name;
};

//  4) 인수가 1개일 때 () 생략 가능
const hello4 = (name) => {
	return 'Hello' + name;
};

// 5) 화살표함수의 유일한 문장이 return 일 때 return 과 { } 생략 가능
const hello5 = (name) => 'Hello' + name;
