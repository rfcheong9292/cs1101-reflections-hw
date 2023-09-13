const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));
const test = list(1, list(2, 3), 4);


function flatten(xs) {
    return is_number(xs) 
           ? pair(head(xs), flatten(tail(xs)))
           : flatten(head(xs));
}


accumulate((x, y) => pair(x, y), null, test);

//flatten(LoL);





