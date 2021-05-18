import React from 'react';
  
const Action = (props) => {
    return (
      <div>
      <button 
      onClick={props.handlepick}
      disabled={!props.hasOption}
      >
      What should i do?</button>
      </div>
    ); 
}

export default Action

    /* class Action extends React.Component{
   render(){
      return (
        <div>
        <button 
        onClick={this.props.handlepick}
        disabled={!this.props.hasOption}
        >
        What should i do?</button>
        </div>
      ); 
   }
  } */