/**
 *
 */
var _= require('lodash/core'),
  squarePrototype= {
    
    // TODO: Remove 'visited' prop and 'wasVisited' method from square. 
    // They relate to the rules and not the square itself.
   
    // Set to true if the square has been visited by the knight
    visited: false,

    /**
     *
     */
    wasVisited: function wasVisited(){
      this.visited= true;
      return this;
    },
    
    // Numerical coord system as seen by the system
    iCoord: iCoord || {
      col: 0,
      row: 0
    },
    /** setICoord
     * 
     * @param {number} col - Parent Array Index
     * @param {number} row - Child Array Index
     * @return this
     */
    setICoord: function setICoord( col, row ){
      this.iCoord= {
	col: col,
	row: row
      };
      return this;
    },
    /** getICoord
     *
     * @return this.Coord
     */
    getICoord: function getICoord(){
      return this.iCoord;
    },

    /** getCoord
     * Returns the letter-number pair of this square's
     * position on the board.
     * @param {number} asciiVal - The first ascii value representation 
     * 	of the letter range being used (either a-z or A-Z).
     * @return {object} this.Coord - 
     */
    getCoord: function getICoord( asciiVal ){
      return { 
	col: String.fromCharCode( asciiVal+ this.iCoord.col ),
	row: this.iCoord.row+ 1

      };
    },

  },

  /** generateSquare
   * @return
   */
  generateSquare= function generateSquare( props ){
    return _.create( squarePrototype, props );
  },

  square_api= {
    generateSquare: generateSquare
  };

module.exports= square_api;
