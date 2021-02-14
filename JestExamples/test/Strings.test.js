'use strict';

// jshint expr: true

describe('Tests to demonstrate methods to build strings', function () {
   it('should return a concatenated string', function () {
      let greeting = 'Hello' + ' ' + 'Shawn';
      expect(greeting).toBe('Hello Shawn');

      let secondGreeting = 'Hello ';
      secondGreeting += 'Mark';
      expect(secondGreeting).toBe('Hello Mark');
   });

   it('should return multi-line string', function () {
      // This doesn't seem very useful since indenting will result in all spaces being included
      let greeting = 'Hello\
 Shawn';
      expect(greeting).toBe('Hello Shawn');
   });

   it('should return interpolated string', function() {
      let name = 'Stacey';
      let greeting = 'Hello';
      let interpolatedGreeting = `${greeting} ${name}`;
      expect(interpolatedGreeting).toBe('Hello Stacey');
   });
});

describe('Tests to demonstrate basic string methods and properties', function () {
   it('should return the length of a string', function () {
      let title = "of mice and men";
      expect(title.length).toBe(15);
   });

   it('should return a substring', function () {
      // Use the substring method
      let title = "of mice and men";
      let snip = title.substring(3, 7);
      expect(snip.length).toBe(4);
      expect(snip).toBe("mice");

      // Use the very similar slice method
      const str = 'The quick brown fox jumps over the lazy dog.';
      let lastWord = str.slice(-4, -1); // slice the last word without the . at the end
      expect(lastWord).toBe("dog");
      let firstWord = str.slice(0, 3); // slice the first 3 characters
      expect(firstWord).toBe("The");
      let fromJumps = str.slice(20);  // Slice from 21 to the end
      expect(fromJumps).toBe("jumps over the lazy dog.");
   });

   it('should return a new string with some characters replaced.  It demonstrates immutability as well.', function () {
      let title = "To watch a mockingbird";
      let newTitle = title.replace("watch", "kill");
      expect(title).toBe("To watch a mockingbird");
      expect(newTitle).toBe("To kill a mockingbird");
   });
});