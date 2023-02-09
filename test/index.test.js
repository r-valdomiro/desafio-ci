const main = require('../src/index')
 
test('should concatenate two strings', () => {
    expect(main.concatenate('Roberto', 'Valdomiro')).toBe('Roberto Valdomiro');
});

test('should sum two values', () => {
    expect(main.sum(2, 2)).toBe(4);
});

test('should subtract one value to another', () => {
    expect(main.subtract(5, 2)).toBe(3);
});