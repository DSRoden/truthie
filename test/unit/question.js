/* jshint expr:true */
/* global describe, it, before, beforeEach */

'use strict';

var expect = require('chai').expect;
var Question = require('../../app/models/question');
var User = require('../../app/models/user.js');
var Answer = require('../../app/models/answer.js');
var Prediction = require('../../app/models/prediction.js');
var connection = require('../../app/lib/mongodb');
var Mongo = require('mongodb');

var Q1, Q2;

describe('Question', function() {
  before(function(done){
    connection('truthie-test', function(){
      done();
    });
  });

  beforeEach(function(done){
    Question.collection.remove(function(){
    Q1 = new Question('q1', 'For q1, choose a/b/c/d'); 
    Q2 = new Question('q2', 'For q2, choose a/b/c/d'); 
    
    var jane = new User('Jane','25', 'Female');
    var joe = new User('Joe','25', 'Male');
    var sally = new User('Sally','23', 'Male');
    var sam = new User('Joe','22', 'Male');
    
    var a1 = new Answer('q1','b');
    var a1_1 = new Answer('q1', 'b');
    var a1_2 = new Answer('q1', 'd');
    var a1_3 = new Answer('q1', 'a');

    var a2 = new Answer('q2','c');
    var a2_1 = new Answer('q2', 'c');
    var a2_2 = new Answer('q2', 'b');
    var a2_3 = new Answer('q2', 'a');
     
    jane.answers.push(a1, a2);
    joe.answers.push(a1_1, a2_1);
    sally.answers.push(a1_2, a2_2);
    sam.answers.push(a1_3, a2_3);
    
    Q1.users.push(jane, joe, sally, sam);
    Q2.users.push(jane, joe, sally, sam);
    
    Q1.save(function(){
      Q2.save(function(){
        done();
      });
    });
   });
  });

  describe('constructor', function() {
    it('should create a new Question object', function(){
      var Q1 = new Question('q1', 'For q1, choose a/b/c/d');
      var jane = new User('Jane','32', 'Female');
      var a1 = new Answer('q1', 'b');
      var p1 = new Prediction('q1', '70');
      
      jane.answers.push(a1);
      jane.predictions.push(p1);
      Q1.users.push(jane);
      
      expect(Q1).to.be.instanceof(Question);
      expect(Q1.name).to.equal('q1');
      expect(Q1.content).to.equal('For q1, choose a/b/c/d');
      expect(Q1.users).to.have.length(1);
      expect(Q1.users[0].answers[0]).to.equal(a1);
      expect(Q1.users[0].predictions[0]).to.equal(p1);

      expect(Q1.ansArray).to.have.length(0);
      expect(Q1.predArray).to.have.length(0);
      expect(Q1.hiscore).to.equal(0);
      expect(Q1.loscore).to.equal(0);
    });
  });

  describe('#save', function(){
    it('should save a question to Question.collection', function(){
      expect(Q1._id).to.be.instanceof(Mongo.ObjectID);
    });
   });


  //End Braces
});


