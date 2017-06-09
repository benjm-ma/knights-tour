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
    iCoord: {
      col: 0,
      row: 0
    },
    /** setICoord
     * 
     * @param col - Parent Array Index
     * @param row - Child Array Index
     * @return this
     */
    setICoord: function setICoord( col, row ){
      this.iCoord= {
	col: col,
	row: row
      }
      return this;
    },
    /** getICoord
     *
     * @return this.Coord
     */
    getICoord: function getICoord(){
      return this.iCoord;
    },

    // Human readable coord system
    coord: {
      col: '',
      row: 0
    },
    /** setCoord
     * Sets the human readable coord system
     * @param col - Letter value of column
     * @param row - Number value of Row
     * @return this
     */
    setCoord: function setCoord( col, row ){
      this.coord= {
	col: col,
	row: row
      };
      return this;
    },
    /** getCoord
     *
     * @return this.Coord
     */
    getCoord: function getICoord(){
      return this.Coord;
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
  },

  module.exports= square_api;
