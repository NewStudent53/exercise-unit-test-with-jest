// Importa funcioones desde el archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// pueba para la función sum
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// fromeuro to dollar
test('converts 3.5 Euros to Dollars', () => {
    let dollars = fromEuroToDollar(3.5);
    expect(dollars).toBeCloseTo(3.745);
});

// fromDollarToYen
test('converts 10 Dollars to Yen', () => {
    let yen = fromDollarToYen(10);
    expect(yen).toBeCloseTo(146.7289719626168);
});

// fromYenToPound
test('converts 200 Yen to Pounds', () => {
    let pounds = fromYenToPound(200);
    expect(pounds).toBeCloseTo(1.1114754098360656);
});
