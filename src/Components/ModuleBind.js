import React, { Component } from 'react';


class ModuleBind extends Component {
  
  constructor( props ){
    super( props );
    
    this.state = {
      firstname: 'Nevin'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event){
    // Without this.handleClick.bind(this), the this object will be undefined. 
    console.log(this.state.firstname);  //Print Nevin
    
  }
  
  render(){
    return (
      <button type="button" onClick={this.handleClick}>
      Click Me
      </button>
    );
  }
}

export default ModuleBind