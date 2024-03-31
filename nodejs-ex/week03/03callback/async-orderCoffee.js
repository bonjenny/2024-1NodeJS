// 비동기 예제
// 03callback/async-orderCoffee.js

function orderCoffee(coffee, time) {
	setTimeout(() => {
		console.log(`${coffee} 제조완료`);
	}, time);
}

orderCoffee('아메리카노', 4000); // 3) 4초 뒤 실행
orderCoffee('레몬티', 2000); // 1) 2초 뒤 실행
orderCoffee('아이스커피', 3000); // 2) 3초 뒤 실행
