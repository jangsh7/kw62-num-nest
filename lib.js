function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}

function factorial(num) {
    if (num < 0) return undefined; // 음수x
    if (num === 0 || num === 1)
        return 1; // 0!, 1!
    let f = 1;
    for (let i = 2; i <= num; i++) {
        f *= i;
    }
    return f;
}

module.exports = {
    avg,
    prime,
    factorial
}
