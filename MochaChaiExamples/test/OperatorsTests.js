/// <reference path="typings/mocha/mocha.d.ts"/>
'use strict';

// jshint expr: true

var chai = require('chai'),
  expect = chai.expect;

var ops = require('../src/Operators');

chai.should();

describe('Test basic numeric operators', function() {

  it('subtract should return the difference of the numbers', function testSubtraction() {
    ops.subtract(10, 5).should.equal(5);
  });
  
  it('add should return the sum of the numbers', function  testAddition() {
    ops.add(5, 5).should.equal(10);
    ops.add(3, 7).should.equal(10);
  });
  
  it('multiply should return the product of the numbers', function  testMultiplication() {
    ops.multiply(25, 5).should.equal(125);
    ops.multiply(3, 7).should.equal(21);
    ops.multiply(1.5, 2).should.equal(3);
  });
  
  it('divide should return the quotient of the numbers', function testDivision() {
    ops.divide(25, 5).should.equal(5);
    ops.divide(1000, 10).should.equal(100);
  });

  it('Test the exponent operator', function testExponentialOperator() {
      ops.raiseToPower(2, 4).should.equals(16);
  });

  it('Test the remainder or modulo operator', function testModulo() {
      ops.getRemainder(10, 5).should.equals(0);
      ops.getRemainder(25, 7).should.equals(4);
  })

  it('tests the logical operators', function testLogicalOperators() {
      expect( true || true).to.be.true;
      expect( true && true).to.be.true;
      expect( true || false).to.be.true;
      expect( true && false).to.be.false;
  })

  it('tests the comparison operators', function testComparisonOperators() {
      expect(5 == 5).to.be.true;
      expect(5 != 7).to.be.true;
      expect(5 == 7).to.be.false;
      expect(!0).to.be.true;
      expect(5 === '5').to.be.false;
      expect (5 == '5').to.be.true;  // different types, but == doesn't compare types
      expect (5 !== '5').to.be.true;  // different types
      expect (5 > 4 && 5 >= 5).to.be.true;
      expect (100 < 101 && 100 <= 100).to.be.true;
      expect ( (5 * 5 == 25) ? true : false).to.be.true;
  })

  it('tests the bitwise operators', function testBitwiseOperators() {
    expect(0xf & 0x0).to.equal(0);
    expect(0xf | 0x0).to.equal(0xf);
    expect(0xf ^ 0xa).to.equal(0x5);
    expect(~2).to.eq(-3);  // weird but  all numbers are signed 32 bits
    expect( 5 << 1).to.equal(10);
  })

  it('test string concatentation operator', function testStringCat() {
      expect("Hello" + " World").eq("Hello World");
  })
});