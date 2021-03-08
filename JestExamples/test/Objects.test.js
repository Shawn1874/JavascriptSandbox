'use strict';

// jshint expr: true

describe('Test object oriented programming concepts', function () {

  it('Creation and copy construction', function () {
    // month is a zero based index so 2 is March.  Day is a 1 based index.  
    let chris = new Object({
      name: 'Chris',
      age: 38,
      greeting: function () {
        console.log('Hi! I\'m ' + this.name + '.');
      }
    });

    expect(chris.name).toBe("Chris");
    expect(chris.age).toBe(38);
    chris.greeting();

    // This is essentially a copy constructor
    let bob = Object.create(chris);

    expect(bob.name).toBe("Chris");
    expect(bob.age).toBe(38);

  });

  it('Test adding properties dynamicall to an object', function () {
    let chris = new Object({
      firstName: 'Chris',
      age: 38,
      greeting: function () {
        console.log('Hi! I\'m ' + this.name + '.');
      }
    });

    chris.lastName = 'Johnson';

    expect(chris.firstName).toBe("Chris");
    expect(chris.lastName).toBe("Johnson");
    expect(chris.age).toBe(38);
  });

});