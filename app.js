function derive(coefficient, exponent) {
    let myExp = exponent - 1;
    let mySum = coefficient * exponent;
    return mySum + "x^" + myExp;
}

console.log(derive(7, 8)); // "56x^7"
console.log(derive(5, 9)); // "45x^8"