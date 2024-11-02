const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});


test("prime([2]) should be true", () => {
    expect(prime(2)).toBe(true);  // 소수
})

test("prime([63]) should be false", () => {
    expect(prime(63)).toBe(false);  // 소수x
})


test("factorial([0]) should be 1", () => {
    expect(factorial(0)).toBe(1);   // 0! = 1
});

test("factorial([4]) should be 24", () => {
    expect(factorial(4)).toBe(24); // 4! = 24
});