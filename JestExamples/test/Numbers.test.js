'use strict';

// jshint expr: true

describe('Parsing Int Tests', function () {
   it('should return Nan when the input cannot be parsed', function () {
      let result = parseInt('hello', 2);
      expect(result).toBe(NaN);

      result = parseInt('546', 2);
      expect(result).toBe(NaN);
   });

   it('should a valid integers if the input can be converted and the radix is within the range of 2 and 36', function () {

      let result = parseInt('101', 2);
      expect(result).toBe(5);

      result = parseInt('0x2F', 16);
      expect(result).toBe(47);
   });
});

describe('Parsing float Tests', function () {
   it('should return Nan when the input cannot be parsed', function () {
      let result = parseInt('a.d');
      expect(result).toBe(NaN);

      result = parseInt('a46');
      expect(result).toBe(NaN);
   });

   it('should return a valid number if the input can be converted', function () {

      let result = parseFloat('  3.14  ');  // leading and trailing spaces are ignored
      expect(result).toBe(3.14);

      result = parseFloat('3.1415');
      expect(result).toBe(3.1415);

      result = parseFloat('314e-2');
      expect(result).toBe(3.14);

      result = parseFloat('0.0314E+2');
      expect(result).toBe(3.14);

      result = parseFloat('-10.5');
      expect(result).toBe(-10.5);
   });

   it('should return a valid number for characters up to the first one that can\'t be converted', function () {
      let result = parseFloat('3.14a15');  // leading and trailing spaces are ignored
      expect(result).toBe(3.14);

      result = parseFloat('25x');
   });
});