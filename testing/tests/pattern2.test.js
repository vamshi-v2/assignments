const {pattern2, OneLine} = require('../scr/pattern2');

 describe('pattern2 test cases:', () => {
  test('test case 1 for pattern2 :', () => {
    const exp = `   1
  232
 34543
4567654`
expect(pattern2(4)).toBe(exp)}
  );

  test('test case 2 for pattern2 : ', () => {
expect(() => pattern2(-6)).toThrow("Input should be positive");
 });

  test('test case 3 for pattern2 : ', () => {
    let res=OneLine(3,4);
    const exp=` 34543`;
    expect(res).toBe(exp);
 });

 });