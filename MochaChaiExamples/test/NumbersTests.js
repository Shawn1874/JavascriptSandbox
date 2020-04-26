/// <reference path="typings/mocha/mocha.d.ts"/>
'use strict';

// jshint expr: true

var chai = require('chai'),
   expect = chai.expect;

chai.should();

describe('Parsing Int Tests', function () {
   it('should return Nan when the input cannot be parsed', function () {
      let result = parseInt('hello', 2);
      result.should.eql(NaN);

      result = parseInt('546', 2);
      result.should.eql(NaN);
   });

   it('should a valid integers if the input can be converted and the radix is within the range of 2 and 36', function () {

      let result = parseInt('101', 2);
      result.should.eql(5);

      result = parseInt('0x2F', 16);
      result.should.eql(47);
   });
});

describe('Parsing float Tests', function () {
   it('should return Nan when the input cannot be parsed', function () {
      let result = parseInt('a.d');
      result.should.eql(NaN);

      result = parseInt('a46');
      result.should.eql(NaN);
   });

   it('should return a valid number if the input can be converted', function () {

      let result = parseFloat('  3.14  ');  // leading and trailing spaces are ignored
      result.should.eql(3.14);

      result = parseFloat('3.1415');
      result.should.eql(3.1415);

      result = parseFloat('314e-2');
      result.should.eql(3.14);

      result = parseFloat('0.0314E+2');
      result.should.eql(3.14);

      result = parseFloat('-10.5');
      result.should.eql(-10.5);
   });

   it('should return a valid number for characters up to the first one that can\'t be converted', function () {
      let result = parseFloat('3.14a15');  // leading and trailing spaces are ignored
      result.should.eql(3.14);

      result = parseFloat('25x');
   });
});