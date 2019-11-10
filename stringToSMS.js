function solution (S,K) {
	
	let N = 0;
	
	// test if splitting by K is doable for every word
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


// test
let S = 'sms messages are really short';
let K = 12;

console.log(solution (S, K));
