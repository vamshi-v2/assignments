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

 test("test case 3 for pattern1 (100 lines) :",()=>{
    const lines=3;
    const patt=pattern1(lines);
    let char= ((3/2)*lines*lines)+((1/2)*lines)-1;
    expect(patt.length).toBe(char);

 });

  test("test case 4 for pattern1 (n lines) :",()=>{
    const lines=3;
    const patt=pattern1(lines);
    let char= ((3/2)*lines*lines)+((1/2)*lines)-1;
    expect(patt.length).toBe(char);

 });

 });