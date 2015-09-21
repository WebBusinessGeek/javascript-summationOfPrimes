function isPrime(numberToCheck) {
    if(numberToCheck == 1) return false;
    if(numberToCheck == 2) return true;
    var counter = 2;
    var limit = Math.sqrt(numberToCheck);
    Math.round(limit);
    var result = true;
    while(counter <= limit) {
        if(numberToCheck % counter == 0) {
           result = false;
        }
        counter++;
    }
    return result;
}

function summationOfPrimes(rangeStart, rangeStop) {
    var counter = rangeStart;
    var sumOfPrimes = 0;
    while(counter < rangeStop) {
        if(isPrime(counter) == true) {
            sumOfPrimes += counter;
        }
        counter++;
    }
    return sumOfPrimes;
}

