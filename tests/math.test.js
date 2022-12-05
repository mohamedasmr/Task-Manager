const { calcTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math')


test('Should calculate total with tip', () => {
    const total = calcTip(10, .3)
    expect(total).toBe(13)
})

test('Should clac total with default tip', () => {
    const total = calcTip(10)
    expect(total).toBe(12.5)
})

test('Should convert temp fahrenheit', () => {
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test('Should convert temp celsius', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})
