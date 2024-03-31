function funcA() {
	console.log('funcA');
}

funcA(); // 소괄호를 붙이면 함수를 실행하라는 뜻
let varA = funcA; // ! 주의: funcA 할당 시 소괄호를 붙이지 않음. 왜? 함수는 참조형 데이터(Reference Type)이기 때문
console.log(varA);
