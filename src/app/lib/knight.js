
var _= require('lodash/core'),
  knightPrototype= {

    /** moveIsLegal
     * Determines if a particular move is 
     * legal based off of the current position
     * on the board.
     *
     * origin       dest
     * [i, j] => [i+2, j+1]
     * [i, j] => [i+1, j+2]
     *
     * @param dest: obj - 
     * @return boolean
     */
    moveIsLegal= function moveIsLegal( dest ){
      var isLegal= true;

      if( Math.abs( dest.col - this.col ) === 1 ){ // Moved up or down
	if( Math.abs( dest.row - this.row ) !== 2 )
	  isLegal= false;
      }else if( Math.abs( dest.col - this.col ) === 2 ){ // Moved Side to Side
	  if( Math.abs( dest.row - this.row ) !== 1 )
	    isLegal= false;
      }

      return isLegal;
    },

  },

  /** createKnight
   * Composes a knight given a game piece
   * @return {object} 
   */
  createKnight= function createKnight( gamePiece ){
    return _.assign( gamePiece, knightPrototype );
  },

  knight_api={
    createKnight: createKnight
  },

  module.exports= knight_api;
