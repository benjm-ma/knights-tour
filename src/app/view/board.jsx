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
