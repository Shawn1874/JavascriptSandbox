'use strict';

// jshint expr: true

var chai = require('chai'),
   expect = chai.expect;

chai.should();

describe('Tests for basic array initialization and element access', function () {
   let fibonacci = [2, 3, 5, 8,  13];
   it('should return the value at specified index', function () {
      fibonacci[2].should.eql(5);

   });

   it('should add elements using [], push, or shift', function () {
      fibonacci[fibonacci.length] = 21;
      fibonacci.push(34);
      fibonacci.unshift(1);
      fibonacci.length.should.eql(8);
      fibonacci[0].should.eql(1);
   });
});

describe('Tests for joining and searching arrays', function () {
   let words = ["we", "hold", "these", "truths", "to be", "self-evident"];
   let teams = ["49ers", "chargers", "dolphins", "rams", "chiefs"]

   it('Should join the words of the array into a sentence', function () {
      let sentence = words.join(" ");
      sentence.should.eql("we hold these truths to be self-evident");
   });

   it('should return a the team name if found', function () {
      let team = teams.indexOf("49ers");
      team.should.eql(0);
   });

   function cTeams(name) {
      return name[0] == 'c';
   }

   it('should return a all teams that have name starting with a c', function () {
      let result = teams.filter(cTeams);
      result.length.should.eql(2);
   });
});