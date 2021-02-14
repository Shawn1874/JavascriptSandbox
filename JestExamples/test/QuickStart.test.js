'use strict';

// jshint expr: true


var ops = require('../src/Operators');
var nu = require('../src/NumberUtilities');

describe('isEven', function() {
  it('should return true when number is even', function() {
    expect(nu.isEven(4)).toBe.truthy;
    expect(nu.isEven(24)).toBe.truthy;
  });
  
  it('should return false when number is odd', function() {
    expect(nu.isEven(5)).toBe.falsy;
    expect(nu.isEven(33)).toBe.falsy;
  });
});