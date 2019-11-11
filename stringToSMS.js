function solution (S, K) {

	// test if input is valid for function
	if (typeof(K)!=='number' || Math.floor(K)!==K || K<1 || K>500 ||
		typeof(S)!=='string' || /[^a-z ]/i.test(S) || S.includes('  ') ||
		S==='' || S.length>500  || S[0]===' ' || S[S.length-1]===' ') {
		console.log('error: invalid input');
		return;
	}
	
	
	let N = 0;
	// console.log(S) // to watch what's going on
	
	// test if splitting by K is possible for every word
	let testS = S.split(' ');
	for ( let j = 0; j < testS.length; j++) {
		if ( testS[j].length > K) {
			return -1;
		}
	}

    // counting sms
	while (S.length > K) {
		for ( let i = K; i >= 0; i--) {
			if (S[i] === ' ') {
				S = S.slice(i+1);
				// console.log(S) // to watch what's going on
				N++;
				break;
			}
		}
	}

	// for the last part if it exists
	if ( S.length > 0) {
		N++;
	}
		
	return N;
}



// test function

// S > K, anything in S < K
let S = 'SMS messases are really short';
let K = 12;
console.log(solution (S, K)); // output: 3

// S > K, something in S > K
S = 'hello iAmEight';
K = 7;
console.log(solution (S, K)); // output: -1

// S < K
S = 'iAmEight';
K = 9;
console.log(solution (S, K)); // output: 1

// S = K
S = 'iAmEight';
K = 8;
console.log(solution (S, K)); // output: 1

// last item in S = K
S = 'hello iAmEight';
K = 8;
console.log(solution (S, K)); // output: 2

// S = K + 1
S = 'o iAmEight';
K = 9;
console.log(solution (S, K)); // output: 2

/*
// test input

// K is not a number
S = 'iAmEight iAmEight iAmEight';
K = '9';
console.log(solution (S, K)); // output: error: invalid input; undefined

// K is not int
S = 'iAmEight iAmEight iAmEight';
K = 9.5;
console.log(solution (S, K)); // output: error: invalid input; undefined

// K < 1
S = 'iAmEight iAmEight iAmEight';
K = -9;
console.log(solution (S, K)); // output: error: invalid input; undefined

// K > 500
S = 'iAmEight iAmEight iAmEight';
K = 501;
console.log(solution (S, K)); // output: error: invalid input; undefined

// S is not a string
S = 99;
K = 9;
console.log(solution (S, K)); // output: error: invalid input; undefined

// S has wrong characters
S = '#@)₴?$0!';
K = 9;
console.log(solution (S, K)); // output: error: invalid input; undefined

// S has 2 spaces inside
S = 'iAmEight  iAmEight iAmEight';
K = 9;
console.log(solution (S, K)); // output: error: invalid input; undefined

// S is an empty string
S = '';
K = 9;
console.log(solution (S, K)); // output: error: invalid input; undefined

// S has more than 500 characters
S = 'caecilii caeco caelo calere campum canes captet capti captiosa \
careat carere careret caret caritatem carum causa causae causam causas \
cedentem celeritas censes censet centurionum cepisse ceramico cernantur \
cernimus certa certae certamen certe certissimam ceteris cetero \
ceterorum ceteros choro chorusque chremes chrysippe chrysippi chrysippo \
cibo cillum circumcisaque cives civibus civitas civitatis civium clamat \
clariora claris clarorum class claudicare clita coercendi coerceri \
cogitarent cogitemus';
K = 99;
console.log(solution (S, K)); // output: error: invalid input; undefined

// S has spaces at start
S = ' iAmEight iAmEight iAmEight';
K = 9;
console.log(solution (S, K)); // output: error: invalid input; undefined

// S has spaces at the end
S = 'iAmEight iAmEight iAmEight ';
K = 9;
console.log(solution (S, K)); // output: error: invalid input; undefined
*/