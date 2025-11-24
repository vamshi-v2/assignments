const pattern1 = require('../scr/pattern1');

 describe('pattern1 test cases :', () => {
  test('test case 1 for pattern1 :', () => {
    const exp = `    1
   111
  11111
 1111111
111111111`
expect(pattern1(5)).toBe(exp)}
  );


  test('test case 2 for pattern1 :', () => {
expect(() => pattern1(-3)).toThrow("Input should be positive");
 });

 });