

/*
function flatten(xs) {
    return accumulate((x, y) => append(x, y), null, xs);
    //return first_value(tail(xs));
}

//const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));
//flatten(LoL);


function tree_sum(xs) {
    return is_null(xs)
         ? 0
         : is_number(xs)
         ? xs
         : tree_sum(head(xs)) + tree_sum(tail(xs));
}
*/
//const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
//tree_sum(my_tree);

function accumulate_tree(f, op, initial, tree) {
    function youranswerhere(f, op) {
        return (x, y) => op(f(x), accumulate_tree(f, op, initial, tail(tree)));
    }
    return accumulate(youranswerhere(f, op), initial, tree);
}

function tree_sum(tree) {
    return accumulate_tree(x => x, (x, y) => x + y, 0 , tree);
}

const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
tree_sum(my_tree);