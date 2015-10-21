/*
JS code snippet to find out all prime numbers till n
*/
function getPrimesTill(n){
	var i, j, len, limit, result = [];
    for(i=2;i<n;i++){
    	limit = i/2;
        len = result.length;
        isPrime = true;
        for(j=0;len && result[j]<=limit;j++){
            if(i%result[j] == 0){
            	isPrime = false;
                break;
            }
        }
        if(isPrime) result.push(i);
    }
    return result;
}

console.log(getPrimesTill(500)); // print all prime numbers till 500
