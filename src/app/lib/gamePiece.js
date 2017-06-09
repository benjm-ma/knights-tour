/** knight
 * 
 *
 */

var gamePiece= {
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
   * @param col: Int - letter value of column
   * @param row: Int - Number value of row
   * @return this: obj
   */
  setCurrentCoord: function setCurrentCoord( col, row ){
    this.currentCoord= {
      col: col,
      row: row
    };

    return this;
  },
  
  // Current array index value coordinates 
  // of knight's position.
  currentICoord: {
    col: 0,
    row: 0
  },
  /** setCurrentICoord
   * Sets the array index value coordinates.
   * Should not be invoked directly but through
   * moveTo.
   * @param col: Int - Index of parent array
   * @param row: Int - Index of child array
   * @return this: obj
   */
  setCurrentICoord: function setCurrentICoord( col, row ){

    this.currentICoord= {
      col: col,
      row: row
    };
    return this;
  },

  /** moveTo
   * Sets a new position for the knight.
   * @param coords: obj - (col, row) pair
   * @param iCoords: obj - (col, row) pair
   */
  moveTo: function moveTo( coords, iCoords ){

    this.setCurrentCoord( coords.col, coords.row );
    this.setCurrentICoord( iCoords.col, iCoords.row );

    return this;
  }

}
