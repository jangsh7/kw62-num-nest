function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {
    if (n <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}

function factorial(num) {
    if (n < 0)
        return undefined; // 음수x
    if (n === 0 || n === 1)
        return 1; // 0!, 1!
    let f = 1;
    for (let i = 2; i <= n; i++) {
        f *= i;
    }
    return f;
}

module.exports = {
    avg,
    prime,
    factorial
}
