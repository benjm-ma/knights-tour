
/** generateBoard
 * generates a board based off of a given size
 * @param size: 
 * @return board
 */
var square= require('./square.js'),

  board= {

    //
    spaces: [[]],
    /**
     *
     */
    setSpaces: function setSpaces( array ){
      this.spaces= array;
      return this;
    },
    

  },

  generateBoard= function generateBoard( size ){
    var size= size || 6,
      board= [],
      asciiVal= 97; //lowercase letters prefered

    for( let col= 0; col< size; col++ ){
      for( let row= 0; row< size; i++ ){
	board[col].push(
	  [row]= square.generateSquare({
	    iCoord: { col: col, row: row },
	    coord: { 
	      col: asciiVal+ col, 
	      row: row 
	    } 
	  }); 
	);
      }
    }

    return board;
   },

  /** unvisitedSquares
   * Instance dependant
   */
  unvisitedSquares= function unvisitedSquares( board ){
    
  }




  board_api= {
    generateBoard: generateBoard
  }

module.exports= board_api;
