import React from 'react';

import Rules from '../lib/rules.js';

class Square extends React.Component {
  constructor(){
    super();
    this.state= {
      occupied: false,
      coord: '',
    };
  }

  render(){
    return(
      <div className="square" onClick={ () => {} }>
        {/* TODO */}
      </div>
    );
  }
}
