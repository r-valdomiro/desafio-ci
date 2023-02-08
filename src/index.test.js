const main = require('./index')
 
test('should be concatenate two strings', () => {
    expect(main.concatenate('Roberto', 'Valdomiro')).toBe('RobertoValdomiro');
});