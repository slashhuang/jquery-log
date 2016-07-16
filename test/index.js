'use strict';
var assert = require('assert');
import logCore  from '../src/core.js'
describe("test log core logic", function(){
  it("should return right args", function(){
      logCore.on('1','2','4');
  });
});