/**
 * Test cases that applies to board squares
 * independant of rules.
 */
var assert= require('chai').assert(),
  sqr= require('../../src/app/lib/square.js');

  // State should be instance safe.
describe( 'Square', function(){
  describe( 'generateSquare()', function(){
    
    //TODO: Test functionality of generateSquare()
    let s1= sqr.generateSquare( {} ),
      s2= sqr.generateSquare({
	iCoord: { col: 3, row: 2 }
      });

    // Are they seperate instances?
    
  });
  describe( 'setICoord()', function(){
    //TODO: Test functionality of setICoord()
  });
  describe( 'setCoord()', function(){
    //TODO: Test functionality of setCoord()
  });
});
