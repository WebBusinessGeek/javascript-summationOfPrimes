describe("isPrime", function() {
    it("should return false for number 1", function() {
        var result = isPrime(1);

        correct = false;
        expect(result).toEqual(correct);
    });
    it("should return true if number is a prime", function() {
        var result1 = isPrime(2);
        var result2 = isPrime(3);
        var result3 = isPrime(5);
        var result4 = isPrime(7);
        var result5 = isPrime(11);

        var resultArray = [result1, result2, result3, result4, result5];
        var correct = [true, true, true, true, true];
        expect(resultArray).toEqual(correct);
    });
    it("should return false if number is not a prime", function() {
        var result1 = isPrime(4);
        var result2 = isPrime(6);
        var result3 = isPrime(8);
        var result4 = isPrime(10);
        var result5 = isPrime(12);
        var result6 = isPrime(9);

        var resultArray = [result1, result2, result3, result4, result5, result6];
        var correct = [false, false, false, false, false, false];
        expect(resultArray).toEqual(correct);
    });
    it("should also include numbers greater than 50", function() {
        var result1 = isPrime(53);
        var result2 = isPrime(59);
        var result3 = isPrime(61);
        var result4 = isPrime(67);
        var result5 = isPrime(71);

        var resultArray = [result1,result2, result3, result4, result5];
        var correct = [true, true, true, true, true];
        expect(resultArray).toEqual(correct);
    })
});

describe("summationOfPrimes", function() {
    it("should add all primes within specified range and return the sum", function() {
        var result = summationOfPrimes(1,10);
        var correct = 17;
        expect(result).toBe(correct);
    });
});

describe("problem solved", function() {
    it("should return the correct answer", function() {
        var result = summationOfPrimes(1, 2000000);
        var correct = 142913828922;
        expect(result).toBe(correct);
    });
});