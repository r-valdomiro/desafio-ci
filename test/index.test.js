const main = require('../src/index')
 
test('should be concatenate two strings', () => {
    expect(main.concatenate('Roberto', 'Valdomiro')).toBe('Roberto Valdomiro');
});