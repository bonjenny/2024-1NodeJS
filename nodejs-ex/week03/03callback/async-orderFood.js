// 비동기 예제 2
// 03callback/async-orderFood.js

function orderFood(callback) {
	/**
	 * setTimeout
	 * @param1 Func: Time(ms) 뒤 실행할 함수
	 * @param2 Time: 몇 초 뒤 실행될지, 시간(숫자)를 입력받음
	 */
	setTimeout(() => {
		const food = '갈비탕';
		callback(food);
	}, 3000);
}

function coolDownFood(food, callback) {
	setTimeout(() => {
		const coolDownedFood = `식은 ${food}`;
		callback(coolDownedFood);
	}, 2000);
}

function freezeFood(food, callback) {
	setTimeout(() => {
		const freezeedFood = `냉동 ${food}`;
		callback(freezeedFood);
	}, 5000);
}

orderFood((food) => {
	console.log(food); // 3초 뒤 갈비탕 출력
	// ! 콜백 지옥
	coolDownFood(food, (coolDownedFood) => {
		console.log(coolDownedFood); // 2초 뒤 식은 갈비탕 출력
		// ! 콜백 지옥
		freezeFood(food, (freezeedFood) => {
			console.log(freezeedFood); // 5초 뒤 냉동 갈비탕 출력
		});
	});
});

// todo: 이 콜백 지옥을 해결하기 위해 async, await이 나옴
