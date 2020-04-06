/// <reference path="typings/mocha/mocha.d.ts"/>
'use strict';

// jshint expr: true

var chai = require('chai'),
  expect = chai.expect;

var ops = require('../src/Operators');
var nu = require('../src/NumberUtilities');

chai.should();

describe('isEven', function() {
  it('should return true when number is even', function() {
    nu.isEven(4).should.be.true;
    nu.isEven(24).should.be.true;
  });
  
  it('should return false when number is odd', function() {
    nu.isEven(5).should.be.false;
    nu.isEven(15).should.be.false;
  });
});