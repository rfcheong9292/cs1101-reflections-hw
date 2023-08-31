function iter(term, a, next, b, total) {
    return (a > b) ? total
                   : iter(term, next(a), next, b, total + term(a));
    
}

function my_sum(n) { 
    return iter(x => x*(x+1), 1, x => x + 1, n, 0); 
}


my_sum(3);