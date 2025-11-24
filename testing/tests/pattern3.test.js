const pattern3= require("../scr/pattern3");

describe("pattern3 test cases :",() => {
test("test case 1 for pattern3 :",()=>{
    const exp=`   1 
  1 1 
 1 2 1 
1 3 3 1 `
expect(pattern3(4)).toBe(exp);}
);

  test('test case 2 for pattern3 :', () => {
expect(() => pattern3(-7)).toThrow("Input should be positive");
 });

});