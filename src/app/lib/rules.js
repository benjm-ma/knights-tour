/**
 * 
 * Use this as utilities to enforce 
 * the rules on the player object (the knight).
 *
 * Rules: 
 *  1. The knight must move in an L-shape...
 *  2. The knight cannot revisit any spaces on
 *  	the board.
 */
var _= require('lodash/core'), //Might not need this

  

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

  /** hasBeenThere
   * Determines if the knight has already visited 
   * the space in question.
   * @param space: obj - 
   * @return boolean
   */
  hasBeenThere= function hasBeenThere( space ){
    var beenThere;
    return beenThere;
  },

  rules_api= {
    moveIsLegal: moveIsLegal
  }

module.exports= rules_api;

