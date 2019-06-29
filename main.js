/*Task 1*/
function convert(amount) {
	return amount * 8;
}

/*Task 2*/
function reverse(str) {
	let arr = str.split('');
	return arr.reverse().join('');
}

/*Task 3*/
function printStairs(n) {
	var str = '',
		i;
	for (i = 0; i < n; i++) {
		str += '#'
		console.log(str)
	}
}

/*Task 4*/
function sumRange(start, end) {
	let sum = 0,
		i;
	for (i = start; i <= end; i++) {
		sum += i;
	}
	return sum;
}


/*Task 5*/
function min(a, b, c) {
	return (a < b && a < c) ? a : (b < a && b < c) ? b : c;
}

/*Task 7*/
function firstAndLastToUpper(str) {
	return str.charAt(0).toUpperCase() + str.slice(1, (str.length - 1)) + str.charAt(str.length - 1).toUpperCase();
}
