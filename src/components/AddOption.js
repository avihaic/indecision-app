import React from 'react';

export default class AddOption extends React.Component{
  state = {
    error: undefined
  }
    handleaddOption = (e) => {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleaddOption(option);
  
      this.setState(() => ({ error }));
      if(!error)
      e.target.elements.option.value = '';
    }
  
    render(){
      return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleaddOption}>
      <input type="text" name="option"/>
      <button>add option</button>
      </form>
      </div>);
    }
  }