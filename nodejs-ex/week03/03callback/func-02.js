// * varB는 일급객체
// varB(); // 호이스팅 불가 - Cannot access 'varB' before initialization
// funcB(); // 호이스팅 불가 - funcB is not defined

let varB = function funcB() {
	console.log('funcB');
};

// varB(); // 호이스팅 불가 - Cannot access 'varB' before initialization

// let varB = function () {
// 	console.log('funcB');
// };

varB();
// funcB();
console.log(varB);
