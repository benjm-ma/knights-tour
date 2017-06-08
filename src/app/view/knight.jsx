import ReactSVG from 'react-svg';

class Knight extends React.Component {
  constructor(){
    this.state= {
      pos: '',
    }
  }

  render(){
    return(
      <ReactSVG className="knight" path="../public/svg/knight.svg" />
    );
  }
}
