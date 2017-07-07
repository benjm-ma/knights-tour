/**
 * Methods and properties which are used to enforce 
 * the rules specific to knights tour.
 *
 * Rules: 
 *  1. The knight cannot revisit any spaces on
 *  	the board.
 */
var stampit= require('stampit'),
  square= require('./square.js'),
  chessBoard= require('./chessBoard.js');

const tourSquare= stampit()
  .props({
    visited: false,
  })
  .methods({
    /** wasVisited
     * Toggle square's visitation status to visited.
     */
    wasVisited(){
      this.visited= true;
      return this;
    },

    /** isVisited 
     * Determines if the knight has already visited 
     * this square.
     * @return {boolean} - 
     */
    isVisited(){
      return this.visited;
    },
  })
  .init( function( { visited } ){
    this.visited= visited || this.visited;
  })
  .compose( square ),

  tourGame= stampit()
  .props({
    // Represents the number of squares the knight has
    // yet to traverse.
    movesLeft: 0,
    // The number of moves the knight has available
    // at its current position.
    availableMoves: 0,
  })
  .methods({

    /** getMovesLeft
     * Return the number of squares the knight still
     * has to traverse.
     * @return {Number}
     */
    getMovesLeft(){
      return this.movesLeft;
    },

    /** getAvailableMoves
     * Returns the number of available moves 
     * @return {Number}
     */
    getAvailableMoves(){
      return this.availableMoves;
    },

    /** updateAvailableMoves
     * Update the number of possible moves the knight has
     * available at its current position.
     * @param {Number} moves - The number of moves 
     * 	available to the knight
     */
    updateAvailableMoves( moves ){
      this.availableMoves= moves;
      return this;
    },

    /** reduceMovesLeft
     * Reduces the amount of squares the knight must
     * traverse on the board.
     *
     */
    function reduceMovesLeft(){
      this.movesLeft-= 1;
    },
  })
  .init( function( { availableMoves, movesLeft } ){
    this.availableMoves= availableMoves || this.availableMoves;
    this.movesLeft= movesLeft || this.movesLeft;
  });

var rules_api= {
  tourGame: tourGame,
  tourSquare: tourSquare
};
  
module.exports= rules_api;
