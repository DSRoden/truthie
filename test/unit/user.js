/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var User = require('../../app/models/user.js');
var Answer = require('../../app/models/answer.js');
var Prediction = require('../../app/models/prediction.js');

describe('User', function() {
  describe('constructor', function() {
    it('Should create a new user', function () {
    var jane = new User('Jane','32', 'Female');
   
    expect(jane).to.be.instanceof(User);
    expect(jane.name).to.equal('Jane');
    expect(jane.age).to.be.a('number');
    expect(jane.age).to.equal(32);
    expect(jane.gender).to.equal('Female');
    expect(jane.points).to.equal(0);
    expect(jane.answers).to.have.length(0);
    expect(jane.predictions).to.have.length(0);
    });
  });
 
  describe('#collectA', function() {
    it('Should push answer object to user answers array', function() {
    var jane = new User('Jane','32', 'Female');
    var a1 = new Answer('q1','b');
    jane.answers.push(a1); 
   
    expect(jane.answers).to.have.length(1);
    expect(jane.answers[0]).to.equal(a1);
    expect(jane.answers[0].currentQ).to.equal('q1');
    expect(jane.answers[0].currentA).to.equal('b');
    });
  });

  describe('#collectP', function(){
    it('Should push prediction object to user predictions array', function(){
    var jane = new User('Jane','32', 'Female');
    var p1 = new Prediction('q1', '70');
    jane.predictions.push(p1);

    expect(jane.predictions).to.have.length(1);
    expect(jane.predictions[0]).to.equal(p1);
    expect(jane.predictions[0].currentQ).to.equal('q1');
    expect(jane.predictions[0].currentP).to.equal(70);
    });
  });
//End Bracket
});
