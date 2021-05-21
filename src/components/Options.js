import React from 'react';
import Option from './Option';

const Options = (props) => {
    return(
  <div>
  <button onClick={props.handleDeleteOptions}>Remove all</button>
  {props.options.length === 0 && <p>enter some value to get started</p>}
  {
     props.options.map((option,key) => (
      <Option
       key={key}
       optionText={option}
       handleDeleteOption={props.handleDeleteOption}
       />
     ))
  }
  </div>
  );
}

export default Options;


 /* class Options extends React.Component{
    render(){
      return(
      <div>
      <button onClick={this.props.handleDeleteOptions}>Remove all</button>
      {
         this.props.options.map((option,key) => <Option key={key} optionText={option}/>)
      }
  
      </div>);
    }
  } */

