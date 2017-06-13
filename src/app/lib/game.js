/** game
 * Holds configuration properties and methods for the 
 * game knights tour.
 * Win Condition: 0 Spaces Left 
 * Lose Condition: 0 Available Spaces
 */
var _= require('lodash/core'),
  square= require('./square.js'),
  board= require('./board.js'),
  gamePiece= require('./gamePiece.js'),
  knightBehaviour= require('./knight.js'),
  rules= require('./rules.js'),

  game= {
    
    //
    knight: {},
    //
    boardSize: boardSize || 6, 
    //
    startingPos: startingPos || {
      iCoords: { col: 'c', row: 3 },
      coords: { col: 2, row: 2 }
    },
    //
    gameBoard: gameBoard || [],

    // Total spaces to be traversed on the board
    spacesLeft: spacesLeft || Math.exp(boardSize, 2) || Math.exp( 6, 2 ),
    /** reduceSpacesLeft
     * Reduces the amount of spaces the knight must
     * traverse.
     * @return this
     */
    reduceSpacesLeft: function reduceSpacesLeft(){
      if( spacesLeft !== 0 )
	spacesLeft--;
      else
	/*TODO: WINNER! What happens now?*/
      return this;
    },

    // Total spaces available to the knight
    availableSpaces: 0,
    /** setAvailableSpaces
     * Sets the available spaces that the knight can move to
     * based on the knight's current coord position.
     * @param {object} spaces - Integer value of spaces available
     * @return this
     */
    setAvailableSpaces: function setAvailableSpaces( spaces ){
      if( spaces !== 0 )
	availableSpaces= spaces;
      else
	/* TODO: LOSER! What happens now?*/
      return this;
    },

    /* TODO: Assemble the pieces to make a game */

    /**
     *
     */
    play: function play(){ // Some assembly required

      /* initialize board */
      this.gameBoard= board.generate( this.boardSize );

      /* initialize knight */
      this.knight= knightBehaviour.createKnight( 
	gamePiece.createGamePiece( {}, {
	  this.startingPos.coords,
	  this.startingPos.iCoords
	});
      );
      

    },

  }
