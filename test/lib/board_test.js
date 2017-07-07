var expect= require('chai').expect,
  sqrFactory= require('../../src/app/lib/square.js'),
  cSqrFactory= require('../../src/app/lib/chessSquare.js'),
  ktSqrFactory= require('../../src/app/lib/ktSquare.js'),
  boardFactory= require('../../src/app/lib/board.js');


/**
 *
 */
describe( 'Board', function(){

  let sqrBoard= boardFactory.createBoard( { dimension: 6 }, sqrFactory ),
    cSqrBoard= boardFactory.createBoard( { dimension: 6 }, cSqrFactory ),
    ktSqrBoard= boardFactory.createBoard( { dimension: 6 }, ktSqrFactory );

  it( 'Should be able to return a square object provided index coordinates', function(){
    expect( sqrBoard.getSquareAtIndex( 5, 5 ) ).to.be.a( 'square' );
  });

  it( 'Should return it\'s own dimensions', function(){
    expect( sqrBoard.getDimension() ).to.equal( 6 );
  });

  it( 'Should return it\'s own size', function(){
    expect( sqrBoard.getSize() ).to.equal( 36 );
  });

  it( 'Should be able to generate a multi-dimensional array '+ 
    'of a set of squares of any type that supports '+
    '".createSquare( prop )".', function(){

      expect( sqrBoard.getSquareAtIndex( 5, 5 ).getICoord() )
	.to.deep.equal(  { row: 5, col: 5 }  );
      expect( cSqrBoard.getSquareAtIndex( 5, 5 ).getICoord() )
	.to.deep.equal(  { row: 5, col: 5 }  );
      expect( ktSqrBoard.getSquareAtIndex( 5, 5 ).getICoord() )
	.to.deep.equal(  { row: 5, col: 5 }  );
  });

});
