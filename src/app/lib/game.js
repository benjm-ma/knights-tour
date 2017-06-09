/** game
 * The actual game logic specific to knights tour
 * Win Condition: 0 Spaces Left 
 * Lose Condition: 0 Available Spaces
 */
var _= require('lodash/core'),
  square= require('./square.js'),
  board= require('./board.js'),
  player= require('./gamePiece.js'),
  rules= require('./rules.js'),

  game= {
    
    // Total spaces to be traversed on the board
    spacesLeft: 0,
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
     * @param spaces - Integer value of spaces available
     * @return this
     */
    setAvailableSpaces: function setAvailableSpaces( spaces ){
      if( spaces !== 0 )
	availableSpaces= spaces;
      else
	/* TODO: LOSER! What happens now?*/
      return this;
    }

  }
