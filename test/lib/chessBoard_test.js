var _= require('lodash/fp'),
  expect= require('chai').expect,
  chessBoard= require('../../src/app/lib/chessBoard.js');
  board= require('../../src/app/lib/board.js');

describe( 'Chess Board', function(){

  const cb= chessBoard( { dimension: 8, boardStruct: board.generateBoard( 8 ) } );


  it( 'should translate array index coords '+
      'into proper chess style coords', function(){

	expect( cb.getSquareAtCoord( { col: 'f', row: 3 } ).getICoord(), 
	  'Cannot properly translate and retrieve index coordinates' )
	  .to.deep.equal( { col: 5, row: 2 } );
  });

});

