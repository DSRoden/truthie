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

Question.find = function(query,cb){
  Question.collection.find(query).toArray(function(err,qstns) {
    for(var i = 0; i < qstns.length; i++){
      qstns[i] = linktoProto(qstns[i]); 
      //qstns[i].users = linktoProto(qstns[i].users);
    }
    cb(err, qstns);
  });
};

Question.findById = function(id, cb){
  id = (typeof id === 'string') ? Mongo.ObjectID(id) : id;
  Question.collection.findOne({_id:id}, function(err, qstn){
     cb(err, linktoProto(qstn));
  });
};

Question.deleteById = function(id, cb){
  id = (typeof id === 'string') ? Mongo.ObjectID(id) : id;
  Question.collection.findAndRemove({_id : id}, cb);
};
module.exports = Question;

// PRIVATE FUNCTIONS //

function linktoProto(qstn){
  qstn = _.create(Question.prototype, qstn);

  for(var i = 0; i < qstn.users.length; i++) {
    qstn.users[i] = _.create(User.prototype, qstn.users[i]);

    //for(var j = 0; j < qstn.users[i].answers.length; i++) {
      //qstn.users[i].answers[j] = _.create(Answer.prototype, qstn.users[i].answers[j]);
    //}

    //for(var k = 0; j < qstn.users[i].predictions.length; i++) {
      //qstn.users[i].predictions[k] = _.create(Answer.prototype, qstn.users[i].predictions[k]);
    //}
  }
  
    //for(var j = 0; j < qstn.users[j].answers.length; j++) {
      //qstn.users[j].answers[j] = _.create(Answer.prototype, qstn.users[j].answers[j]);
    //}
  return qstn;
}




