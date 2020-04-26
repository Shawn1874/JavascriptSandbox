'use strict';

// jshint expr: true

var chai = require('chai'),
   expect = chai.expect;

chai.should();

describe('Tests to demonstrate methods to build strings', function () {
   it('should return a concatenated string', function () {
      let greeting = 'Hello' + ' ' + 'Shawn';
      greeting.should.eql('Hello Shawn');

      let secondGreeting = 'Hello ';
      secondGreeting += 'Mark';
      secondGreeting.should.eql('Hello Mark');
   });

   it('should return multi-line string', function () {
      // This doesn't seem very useful since indenting will result in all spaces being included
      let greeting = 'Hello\
 Shawn';
      greeting.should.eql('Hello Shawn');
   });

   it('should return interpolated string', function() {
      let name = 'Stacey';
      let greeting = 'Hello';
      let interpolatedGreeting = `${greeting} ${name}`;
      interpolatedGreeting.should.eql('Hello Stacey');
   });
});

describe('Tests to demonstrate basic string methods and properties', function () {
   it('should return the length of a string', function () {
      let title = "of mice and men";
      expect(title.length.should.eq(15))
   });

   it('should return a substring', function () {
      // Use the substring method
      let title = "of mice and men";
      let snip = title.substring(3, 7);
      expect(snip.length.should.eq(4))
      expect(snip.should.eq("mice"));

      // Use the very similar slice method
      const str = 'The quick brown fox jumps over the lazy dog.';
      let lastWord = str.slice(-4, -1); // slice the last word without the . at the end
      expect(lastWord.should.eq("dog"));
      let firstWord = str.slice(0, 3); // slice the first 3 characters
      expect(firstWord.should.eq("The"));
      let fromJumps = str.slice(20);  // Slice from 21 to the end
      expect(fromJumps.should.eq("jumps over the lazy dog."));
   });

   it('should return a new string with some characters replaced.  It demonstrates immutability as well.', function () {
      let title = "To watch a mockingbird";
      let newTitle = title.replace("watch", "kill");
      expect(title.should.eq("To watch a mockingbird"));
      expect(newTitle.should.eq("To kill a mockingbird"));

   });
});