import React from 'react';
import Square from './square.jsx';
import Knight from './knight.jsx';

class Board extends React.Component {

  /**
   * Renders the knight at the specified coordinate
   */
  renderKnightAt(coord){
    return <Square value="k" />
  }

  render(){
    return(
      <div class="Board">
	{/* TODO */}
      </div>
    );
  }

}

/*
 * 1. Player clicks square
 * 2. Validate if the attempted move is legal 
 * 	if the move is legal:
 * 		t) render the knight there
 * 		f) do nothing
 */
