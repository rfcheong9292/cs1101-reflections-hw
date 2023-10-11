function make_withdraw(balance, password) {
    let attempts_left = 3;
    function withdraw(amount, entry) {
        if (attempts_left === 0) {
            return "Account disabled";
        } else if (balance >= amount && password === entry) {
            balance = balance - amount;
            attempts_left = 3;
            return balance;
        } else if(balance < amount) {
            attempts_left = 3;
            return "Insufficient funds";
        } else {
            attempts_left = attempts_left - 1;
            return "Wrong password; no withdraw";
        }
    }
    return withdraw;
}

const acc = make_withdraw(100, "my_password");
