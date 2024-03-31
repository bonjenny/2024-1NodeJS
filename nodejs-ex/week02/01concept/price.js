// 1) 가장 원시적인 방식
const price1 = (1000 + 2000) * 3;
const price2 = (1000 + 12000) * 3;

// 2) 기명함수
function getPrice(a, b) {
	return (a + b) * 3;
}

// 3) 일급객체
const price1Getter = function (a, b) {
	return (a + b) * 3;
};
price1Getter(1000, 2000);
