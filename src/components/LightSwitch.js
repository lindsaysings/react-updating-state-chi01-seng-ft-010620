import React from 'react';

class LightSwitch extends React.Component{
  constructor(props){
    super()
    this.state={
      toggled: false
    }
  }

  handleClick = () => {
    this.setState(previousState =>  {
      return {
        toggled: !previousState.toggled
      }
    })
  }
  render(){
    return(
      <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
    )
  }
}

export default LightSwitch;
