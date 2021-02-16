'use strict';

// jshint expr: true

var ops = require('../src/Operators');

describe('Test basic numeric operators', function() {

  it('subtract should return the difference of the numbers', function testSubtraction() {
    expect(ops.subtract(10, 5)).toBe(5);
  });
  
  it('add should return the sum of the numbers', function  testAddition() {
    expect(ops.add(5, 5)).toBe(10);
    expect(ops.add(3, 7)).toBe(10);
  });
  
  it('multiply should return the product of the numbers', function  testMultiplication() {
    expect(ops.multiply(25, 5)).toBe(125);
    expect(ops.multiply(3, 7)).toBe(21);
    expect(ops.multiply(1.5, 2)).toBe(3);
  });
  
  it('divide should return the quotient of the numbers', function testDivision() {
    expect(ops.divide(25, 5)).toBe(5);
    expect(ops.divide(1000, 10)).toBe(100);
  });

  it('Test the exponent operator', function testExponentialOperator() {
    expect(ops.raiseToPower(2, 4)).toBe(16);
  });

  it('Test the remainder or modulo operator', function testModulo() {
    expect(ops.getRemainder(10, 5)).toBe(0);
    expect(ops.getRemainder(25, 7)).toBe(4);
  })
});

describe('Test logical, comparison, and bitwise operators', function() {
  it('tests the logical operators', function testLogicalOperators() {
      expect( true || true).toBe.truthy;
      expect( true && true).toBe.truthy;
      expect( true || false).toBe.truthy;
      expect( true && false).toBe.falsy;
  })

  it('tests the comparison operators', function testComparisonOperators() {
      expect(5 == 5).toBe.truthy;
      expect(5 != 7).toBe.truthy;
      expect(5 == 7).toBe.falsy;
      expect(!0).toBe.truthy;
      expect(5 === '5').toBe.falsy;
      expect (5 == '5').toBe.truthy;  // different types, but == doesn't compare types
      expect (5 !== '5').toBe.truthy;  // different types
      expect (5 > 4 && 5 >= 5).toBe.truthy;
      expect (100 < 101 && 100 <= 100).toBe.truthy;
      expect ( (5 * 5 == 25) ? true : false).toBe.truthy;
  })

  it('tests the bitwise operators', function testBitwiseOperators() {
    expect(0xf & 0x0).toBe(0);
    expect(0xf | 0x0).toBe(0xf);
    expect(0xf ^ 0xa).toBe(0x5);
    expect(~2).toBe(-3);  // weird but  all numbers are signed 32 bits
    expect( 5 << 1).toBe(10);
  })
});

describe('Test the string operators', function () {
  it('test string concatentation operator', function testStringCat() {
      expect("Hello" + " World").toBe("Hello World");
  })
});

describe('Test the type operators', function () {
  it('test the type of operator', function testTypeOf() {
      expect(typeof(5)).toBe("number");
      expect(typeof('Shawn')).toBe("string");
      expect(typeof(true)).toBe("boolean");
      expect(typeof(nothing)).toBe("undefined");  // variable nothing isn't defined
      var unassignedVariable;
      expect(typeof(unassignedVariable)).toBe("undefined"); // variable isn't assigned a value
      expect(typeof [1,2,3,4]).toBe("object");  // arrays are objects
      expect(typeof({name : "shawn", favoriteColor : "red"})).toBe("object");
      expect(typeof(null)).toBe("object");
  });

  it('test the instanceof operator', function testInstanceOf() {
    class Person {
      constructor(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
      }
    }
    let Steve = new Person("Steve", "Jones", 35, "green");
    expect(Steve instanceof Person).toBe.truthy;
  });
});