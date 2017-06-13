/** gamePiece.js
 * 
 *
 */
var _= require('lodash/core'),

  gamePiecePrototype= {
    // Current human readable coordinates
    // of the gamePiece's position.
    currentCoord: {
      col: '',
      row: 0
    },
    /** setCurrentCoord
     * Sets the human readable coordinates.
     * Should not be invoked directly but through
     * moveTo.
     * @param {number} col - Letter value of column
     * @param {number} row - Number value of row
     * @return {object} this 
     */
    setCurrentCoord: function setCurrentCoord( col, row ){
      this.currentCoord= {
	col: col,
	row: row
      };

      return this;
    },
    
    // Current array index value coordinates 
    // of game pieces position.
    currentICoord: {
      col: 0,
      row: 0
    },
    /** setCurrentICoord
     * Sets the array index value coordinates.
     * Should not be invoked directly but through
     * moveTo.
     * @param {number} col - Index of parent array
     * @param {number} row - Index of child array
     * @return {object} this
     */
    setCurrentICoord: function setCurrentICoord( col, row ){

      this.currentICoord= {
	col: col,
	row: row
      };
      return this;
    },

    /** moveTo
     * Sets a new position for the game piece.
     * @param {object} coords - An object containing a (col, row) pair
     * 	in a human readable form.
     * @param {object} iCoords - An object containing a (col, row) pair
     * 	in the form of array indices.
     */
    moveTo: function moveTo( coords, iCoords ){

      this.setCurrentCoord( coords.col, coords.row );
      this.setCurrentICoord( iCoords.col, iCoords.row );

      return this;
    },

    /** moveIsLegal
     * Determines if the intended move made by the player
     * was legal based on the type of game piece.
     * This method is to be overrided by behaviour specific to the
     * type of game piece it is to be composed with.
     * @return {boolean} isLegal
     */
    moveIsLegal: function moveIsLegal(){
      let isLegal= true;
      return isLegal;
    }
  },

  /**
   *
   */
  createGamePiece= function createGamePiece( props ){
    return _.create( gamePiecePrototype, props );
  }
   


