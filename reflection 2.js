function sum(term, a, next, b) {
    
    return iter(term, a, next, b, 0);
}

function iter(term, a, next, b, total) {
    return (a > b) ? total
                   : iter(term, next(a), next, b, total + term(a));
    
}

function my_sum(n) { 
    return sum(x => x*(x+1), 1, x => x + 1, n); 
}


my_sum(3);