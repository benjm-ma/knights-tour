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

