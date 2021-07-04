function piWithFixedDecimal(decimal) {
    let i = 1n;
    let x = 3n * (10n ** 1020n);
    let pi = x;
    while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
    }
    var calculatedPi = (pi / (10n ** 20n));
   
    stringPi = calculatedPi.toString();
    var stringPi = stringPi.slice(0,decimal);
    stringPi = stringPi.slice(0, 1) + "." + stringPi.slice(1);
    return stringPi;
}


module.exports = {
    piWithFixedDecimal
}