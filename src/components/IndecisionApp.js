import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
<<<<<<< HEAD
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
state = {
    options : [],
    SelectedOption:undefined
}
handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
};

handleDeleteOption = (optiontoremove) => {
    console.log('hdo' , optiontoremove);
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optiontoremove !== option;
      })
    }));
};

handlepick = () => {
    const randomnum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomnum];
    this.setState(() => ({
      selectedOption: option
    }));
};

handleaddOption = (option) => {
    if(!option) {
      return 'enter valid value to add option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'this option already exits'
    }

    this.setState((prevState) => ({  options:prevState.options.concat(option) }));
};

handleCloseSelectedoption = () => {
 this.setState(() => ({ selectedOption: undefined }));
 //console.log('click')
};

componentDidMount = () => {
=======

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
>>>>>>> a0125bf22fd19283106fe8a53a58a14587993d64
  try {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
  
    if(options){
      this.setState(() => ({ options }));
    } 
  } catch (e) {
  
    //do nothing al all
    }
<<<<<<< HEAD
}
  
componentDidUpdate = (prevProps, prevState) => {
=======
  }
  
  componentDidUpdate(prevProps, prevState){
>>>>>>> a0125bf22fd19283106fe8a53a58a14587993d64
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
<<<<<<< HEAD
}
  
componentWillUnMount = () => {
    console.log('componentWillUnMount')
}
=======
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
>>>>>>> a0125bf22fd19283106fe8a53a58a14587993d64
  
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
<<<<<<< HEAD
        <OptionModal selectedOption={this.state.selectedOption}
        handleCloseSelectedoption={this.handleCloseSelectedoption}
        />
=======
  
>>>>>>> a0125bf22fd19283106fe8a53a58a14587993d64
      </div>
      );
    }
  }
  
<<<<<<< HEAD
=======
IndecisionApp.defaultProps = {
    options: []
}
>>>>>>> a0125bf22fd19283106fe8a53a58a14587993d64
