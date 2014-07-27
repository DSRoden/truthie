/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Answer = require('../../app/models/answer.js'); 

describe('Answer', function(){
  describe('constructor', function() {
    it('Should create an answer object', function(){
    var a1 = new Answer('q1', 'b');
    
    expect(a1).to.be.instanceof(Answer);
    expect(a1.currentQ).to.equal('q1');
    expect(a1.currentA).to.equal('b');
    });
  });
});
