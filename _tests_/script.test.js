//const {generateText} = require ('../myScript');
//const { TestWatcher } = require('jest');

const {reverseNumber,alphabet_order, isPrime, codeA,CodeB} = require("../script");

test('test reverse num func', function()  {
  expect(reverseNumber(4321)).toEqual("1234");
});

test('alphabet_order', function() {
  expect(alphabet_order("weebmaster")).toHaveLength(10);
});

describe('test_prime',()=>{
  test("check truthy",()=>{
      //actual test
      expect(isPrime(11)).toBeTruthy();
  })
});

describe("codeA()", () => {
  test("toHavebeencalled", () => {
    //actual test
    codeB = jest.fn();
    codeA();
    expect(codeB).toHaveBeenCalled();
  });
});

describe("codeA()", () => {
  test("toHaveReturned", () => {
    //actual test
    codeB = jest.fn();
    codeA();
    expect(codeB).toHaveReturned();
  });
});





