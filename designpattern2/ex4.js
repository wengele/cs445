const fibonacci = (function () {
    let memo = new Map();
    function fun(n) {
        if (n <= 1) {
            return n;
        }

        if (memo.has(n)) {
            return memo.get(n);
        }

        const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
        memo.set(n, result);

        return result;
    }
    return fun;
})();


console.time('memoriziation  start time');
console.log(fibonacci(52));
console.timeEnd('memoriziation End time');