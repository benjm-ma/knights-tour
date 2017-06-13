/** board.js
 *
 *
 */

var square= require('./square.js'),

  /** generateBoard
   * Generates an multi-dimensional array representing a board 
   * based off of a given size.
   * @param {number} size - The dimensions of the board
   * @return {object} column - Multi-dimensional array represening
   * 	a board.
   */
  generate= function generateBoard( size ){
    var size= size || 6,
      column= [],
      row= [],
      asciiVal= 97; //lowercase letters prefered

    // Populate columns with rows
    for( let col= 0; col< size; col++ ){
      for( let row= 0; row< size; i++ ){
	row.push(
	 square.generateSquare({
	    iCoord: { col: col, row: row },
	    coord: { 
	      col: String.fromCharCode( asciiVal+ col ), 
	      row: row 
	    } 
	  }) 
	);
	column.push(row);
      }
      row= []; // Reset row
    }

    return column;
   },

  board_api= {
    generateBoard: generateBoard
  }

module.exports= board_api;
