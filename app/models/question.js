'use strict';

var Mongo = require('mongodb');
var User = require('./user');
var Answer = require('./answer');
var Prediction = require('./prediction');
var _ = require('lodash');


function Question(name, content){
  this.name = name;
  this.content = content;

  this.users = [];
  this.ansArray = [];
  this.predArray =[];
  this.hiscore = 0;
  this.loscore = 0;
}

Object.defineProperty(Question, 'collection', {
  get: function(){
    return global.mongodb.collection('questions');
  }
});

Question.prototype.save = function(cb){
 Question.collection.save(this, cb);
};







module.exports = Question;
