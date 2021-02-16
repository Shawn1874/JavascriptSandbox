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