import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {
    constructor(props){
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlepick = this.handlepick.bind(this);
      this.handleaddOption = this.handleaddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
  
      this.state = {
       options : props.options
      };
    }
  
  componentDidMount(){
  try {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
  
    if(options){
      this.setState(() => ({ options }));
    } 
  } catch (e) {
  
    //do nothing al all
    }
  }
  
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  
  componentWillUnMount(){
    console.log('componentWillUnMount')
  }
  
  handleDeleteOptions(){
      this.setState(() => ({ options: [] }));
  };
  
  handleDeleteOption(optiontoremove){
      console.log('hdo' , optiontoremove);
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => {
          return optiontoremove !== option;
        })
      }));
  };
  
  handlepick(){
      const randomnum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomnum];
      alert(option);
  };
  
  handleaddOption(option){
      if(!option) {
        return 'enter valid value to add option'
      } else if (this.state.options.indexOf(option) > -1) {
        return 'this option already exits'
      }
  
      this.setState((prevState) => ({  options:prevState.options.concat(option) }));
  };
  
    render(){
      const subtitle = 'Put your life in computer hands';
      return (
        <div>
        <Header subtitle={subtitle}/>
        <Action
        hasOption={this.state.options.length > 0}
        handlepick = {this.handlepick}
        />
  
        <Options
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleaddOption={this.handleaddOption}/>
  
      </div>
      );
    }
  }
  
IndecisionApp.defaultProps = {
    options: []
}