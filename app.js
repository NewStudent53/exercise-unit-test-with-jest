// funcion sum
const sum = (a, b) => {
    return a + b;
}

// log
console.log(sum(7, 3));

// los rates
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07, 
    "GBP": 0.87  
}

// Dolar===>yen
const fromDollarToYen = (dollar) => {
    let euro = dollar / oneEuroIs["USD"]; 
    let yen = euro * oneEuroIs["JPY"]; 
    return yen;
}

// yen===>libra
const fromYenToPound = (yen) => {
    let euro = yen / oneEuroIs["JPY"]; 
    let pound = euro * oneEuroIs["GBP"]; 
    return pound;
}

// exportar
module.exports = { sum, fromDollarToYen, fromYenToPound };
