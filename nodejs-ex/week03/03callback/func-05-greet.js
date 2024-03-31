function greetFunc() {
	console.log('hello');
}

greetFunc();

let greeting = greetFunc; // greeting은 객체로 취급
greeting();
