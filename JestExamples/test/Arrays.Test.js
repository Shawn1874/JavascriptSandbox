'use strict';

// jshint expr: true

describe('Tests for basic array initialization and element access', function () {
   
   it('should return the value at specified index', function () {
      let fibonacci = [1, 2, 3, 5, 8, 13];
      expect(fibonacci[2]).toBe(3);

   });

   it('should add elements using [], push, or shift', function () {
      let fibonacci = [2, 3, 5, 8, 13];
      fibonacci.push(21);
      expect(fibonacci[5]).toBe(21);

      fibonacci.unshift(1);
      expect(fibonacci[0]).toBe(1);
      expect(fibonacci[6]).toBe(21);

      fibonacci[fibonacci.length] = 34;
      expect(fibonacci[7]).toBe(34);
   });
});

describe('Tests for joining and searching arrays', function () {
   let words = ["we", "hold", "these", "truths", "to be", "self-evident"];
   let teams = ["49ers", "chargers", "dolphins", "rams", "chiefs"]

   it('Should join the words of the array into a sentence', function () {
      let sentence = words.join(" ");
      expect(sentence).toBe("we hold these truths to be self-evident");
   });

   it('should return a the team name if found', function () {
      let team = teams.indexOf("49ers");
      expect(team).toBe(0);
   });

   function cTeams(name) {
      return name[0] == 'c';
   }

   it('should return a all teams that have name starting with a c', function () {
      let result = teams.filter(cTeams);
      expect(result.length).toBe(2);
   });
});


describe('Tests of splicing and slicing arrays', function () {
   it('Should build a new array slicing some elements from original', function () {
      let teams = ["49ers", "chargers", "dolphins", "rams", "chiefs"]
      let sliced = teams.slice(0, 2);
      expect(teams.length).toBe(5);
      expect(sliced.length).toBe(2);
      expect(sliced[0]).toBe("49ers");
      expect(sliced[1]).toBe("chargers");
   });

   
   it('Should build a new array with elements removed from the original', function () {
      let words = ["we", "hold", "these", "truths", "that", "all", "men", "to be", "self-evident"];

      //verify original length
      expect(words.length).toBe(9);
      let sliced = words.splice(4, 3);
      
      // Verify new length and content of the two arrays
      expect(words.length).toBe(6);
      expect(sliced.length).toBe(3);
      expect(sliced[0]).toBe("that");
      expect(sliced[2]).toBe("men");
   });

   it('Should build a new array with elements removed from the original', function () {
      let declaration = ["we", "hold", "that", "all", "be", "self-evident"];

      //verify original length
      expect(declaration.length).toBe(6);
      let spliced = declaration.splice(2, 2, "these", "truths", "to");
      
      // Verify new length and content of the two arrays
      expect(declaration.length).toBe(7);
      expect(declaration[0]).toBe("we");
      expect(declaration[2]).toBe("these");
      expect(declaration[3]).toBe("truths");
      expect(declaration[4]).toBe("to");

      expect(spliced.length).toBe(2);
      expect(spliced[0]).toBe("that");
      expect(spliced[1]).toBe("all");
   });
});