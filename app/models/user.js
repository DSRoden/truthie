'use strict';

var Answer = require('./answer.js');
var Prediction = require('./prediction.js');

function User(name, age, gender){
   this.name = name;
   this.age = parseInt(age);
   this.gender = gender;

   this.points = 0;
   this.answers = [];
   this.predictions = [];

}

User.prototype.collectA = function(){
 this.answers.push(Answer);
};

User.prototype.collectP = function(){
  this.predictions.push(Prediction);
};


module.exports = User;

