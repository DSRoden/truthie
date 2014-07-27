/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Prediction = require('../../app/models/prediction.js');

describe('Prediction', function() {
  describe('constructor', function() {
    it('should create a prediction object', function(){
    var p1 = new Prediction('q1', '70');
    
    expect(p1).to.be.instanceof(Prediction);
    expect(p1.currentQ).to.equal('q1');
    expect(p1.currentP).to.be.a('number');
    expect(p1.currentP).to.equal(70);
    });
  });
  //End Braces
});
