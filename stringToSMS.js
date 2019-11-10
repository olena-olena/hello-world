let S = 'sms messages are really short';
let K = 8;

function solution (S,K) {
	
	let N = 0;
	console.log(S)
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
				console.log(S)
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

console.log(solution (S, K));