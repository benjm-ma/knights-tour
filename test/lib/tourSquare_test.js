/**
 *
 */
var expect= require('chai').expect,
  tourSquare= require('../../src/app/lib/tourRules.js').tourSquare;

describe( 'Knights Tour Square', function(){

  let ktSquare= tourSquare();

  it('should only be traversed once', function(){

    ktSquare.wasVisited();

    expect( ktSquare.isVisited() ).to.be.true;

  });

});
