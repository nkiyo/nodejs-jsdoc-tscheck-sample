// import MyClass from './myclass'
const MyClass = require('./myclass');

// dev.to https://dev.to/bgord/simplify-repetitive-jest-test-cases-with-test-each-310m
const cases = [
  [1, 2, 'hoge', 'hoge', 'msg test1'],
  [1, 2, 'hage', 'hage', 'msg test2'],
  [-1, 2, 'hage', 'hage', 'msg test3'],
  [1, -2, 'hage', 'hage', 'msg test4'],
  [-1, -2, 'hage', 'hage', 'msg test5'],
]

describe("parameterized test sample", () => {
  test.each(cases)(
    "%p %p %p => %p %p",
    (firstArg, secondArg, thirdArg, expected) => {
      const mc = new MyClass(firstArg, secondArg, thirdArg);
      const acutual = mc.getS();
      expect(acutual).toEqual(expected);
    }
  )
})
