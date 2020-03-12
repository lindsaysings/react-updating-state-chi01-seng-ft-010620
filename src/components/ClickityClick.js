// Code ClickityClick Component Here
import React, { Component } from 'react';

class ClickityClick extends Component{
  constructor(props){
    super()
    this.state={
      hasBeenClicked: false,
      likes: 0
    }
  }

  handleLikes = (event) => {
    event.persist()
    // let newLikes = this.state.likes + 1
    // this.setState({
    //   likes: newLikes
    // })
    this.setState(previousState => {
      return{
        likes: previousState.likes + 1
      }
    })
  }

  handleButtonClick = (event) => {
    event.persist()
    console.log(event.target)
    this.setState({
      hasBeenClicked: true
    })
  }

  render(){
    return(
      <div>yolo
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleButtonClick}>CLICK HERE</button>
        <button onClick={this.handleLikes}>{this.state.likes} Likes</button>
      </div>
    )
  }
}

export default ClickityClick;
