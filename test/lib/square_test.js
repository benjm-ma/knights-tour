/**
 * Test cases that applies to board squares
 * independant of rules.
 */
var expect= require('chai').expect,
  square= require('../../src/app/lib/square.js');

  // State should be instance safe.
describe( 'Square', function(){

  it( 'should return a set of two array indices '+
      'denoting its position within the board', function(){

    expect( square({ col: 0, row: 0 }).getICoord() ).to.deep.equal( { col: 0, row: 0 } );

  });

});
