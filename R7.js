//qn 2 a)
/*
function fib(n) {
    let calc = [0, 1];
    let length = 0;
    function helper(n) {
        length = array_length(calc);
        if (n < length) {
            return calc[n];
        } else {
            calc[n] = helper(n - 1) + helper(n - 2);
            return calc[n];
        }
    }
    return helper(n);
}

fib(7);

//b
function fib(n) {
    let a = 1;
    let b = 1;
    function helper(m) {
        if (equal(n, m)) {
            return b;
        } else {
            b = a + b;
            a = b - a;
            return helper(m + 1);
        }
    }
    return helper(0);
}

fib(7);
*/

