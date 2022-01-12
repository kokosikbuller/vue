function fib(a, b) {
	if (halper(a) && halper(b)) {
		let n = a;
		let m = b;
		let p = n % m;
		for (let i = 0; p != 0; i++) {
			n = m;
			m = p;
			p = n % m;
		}
		return m;
	}
	throw new Error('Не число Фибоначи');
}

console.log(fib(4, 5));

function halper(num) {
	let a = 1;
	let b = 1;
	let c = 1;
	for (let i = 0; num > c; i++) {
		c = a + b;
		a = b;
		b = c;
	}
	if (num === c) {
		return true;
	}
	return false;
}
