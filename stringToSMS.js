function solution (S, K) {

	// test if input is valid for function
	if (typeof(K)!=='number' || Math.floor(K)!==K || K<1 || K>500 ||
		typeof(S)!=='string' || S==='' || S.length>500 || S.includes('  ') ||
		S[0]===' ' ||S[S.length-1]===' ' || /[^a-z ]/i.test(S) ) {
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



// test area

// ok
let S = 'SMS messases are really short';
let K = 12;
console.log(solution (S, K), '\n'); // output: 3

// K is too small
S = 'SMS messases are really short';
K = 3;
console.log(solution (S, K), '\n'); // output: -1

// wrong characters in string
S = '#@)₴?$0';
K = 10;
console.log(solution (S, K), '\n'); // output: error: invalid input; undefined 

