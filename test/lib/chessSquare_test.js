/**
 * Test cases that apply to chess board squares
 */
var expect= require('chai').expect,
  sqr= require('../../src/app/lib/square.js'),
  cSqr= require('../../src/app/lib/chessSquare.js');

describe( 'Chess Board Square', function(){

    let s1= sqr.createSquare( { iCoord: { col: 3, row: 2 } } ),
      cS1= cSqr.createChessSquare( s1 );
  
    it( 'should return chessboard style coordinates', function(){
      let asciiLowerCase= 97,
	asciiUpperCase= 65;

      expect( cS1.getCoord(asciiLowerCase) ).to.deep.equal({ col: 'd', row: 3 });
      expect( cS1.getCoord(asciiUpperCase) ).to.deep.equal({ col: 'D', row: 3 });
    });

});
