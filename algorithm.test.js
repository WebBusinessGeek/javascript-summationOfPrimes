describe("isPrime", function() {
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

        var resultArray = [result1, result2, result3, result4, result5];
        var correct = [false, false, false, false, false];
        expect(resultArray).toEqual(correct);
    })
});