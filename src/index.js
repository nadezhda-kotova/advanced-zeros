module.exports = function getZerosCount(number, base) {
    let maxPrimeNumber = 0;
    let primeNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31,
        37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
        101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163,
        167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257
    ];
    for (i = 0; primeNumber[i] <= base; i++) {
        if (base % primeNumber[i] == 0) {
            maxPrimeNumber = primeNumber[i]
        }
    }
    let degree = 0;
    let baseN = base;
    while (baseN % maxPrimeNumber == 0) {
        degree++;
        baseN = baseN / maxPrimeNumber;
    };
    let count = 0;
    while (number > 0) {
        number = Math.floor(number / maxPrimeNumber);
        count = count + number;
    }
    return Math.floor(count / degree);
}
