//babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch
class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlepick = this.handlepick.bind(this);
    this.handleaddOption = this.handleaddOption.bind(this);
    this.removeoption = this.removeoption.bind(this);

    this.state = {
     options : props.options
    }
  };

  handleDeleteOptions(){
    this.setState(() => {
      return{
        options: []
      };
    });
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

    this.setState((prevState) => {
      return{
        options:prevState.options.concat(option)
      };
    });
  };

  handledeleteOption(){
    console.log('aaaaaaaaa');
/*     this.setState((prevState) => {
      return{
        deleteoptions:prevState.options.concat(option)
      };
    }); */
  };

  removeoption(){
    console.log('click remove');
  }

  render(){
    const subtitle = 'Put your life in computer hands';
    return (
      <div>
      <Header subtitle={subtitle}/>
      <Action
      hasOption={this.state.options.length > 0}
      handlepick = {this.handlepick}
      />
      <Btnremove removeoption={this.removeoption}/>

      <Options
      options={this.state.options}
      handleDeleteOptions={this.handleDeleteOptions}
      />
      <AddOption handleaddOption={this.handleaddOption}/>
    </div>
    );
  }
}

/* class Header extends React.Component{
  render(){
    return(
      <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
      </div>
      ) 
  }
} */

IndecisionApp.defaultProps = {
  options: [],
}

const Header = (props) => {
  return (
    <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
};

Header.defaultProps = {
  title: 'Indecision App'
};

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

const Btnremove = (props) => {
  return (
    <div>
    <button onClick={props.removeoption}>Remove option</button>
    </div> 
  );
}

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

const Options = (props) => {
      return(
    <div>
    <button onClick={props.handleDeleteOptions}>Remove all</button>
    {
       props.options.map((option,key) => <Option removeoption={props.removeoption} key={key} optionText={option}/>)
    }
    </div>
    );
}


/*  class Option extends React.Component{
    render(){
      return <div>
      <input type='checkbox' name="checkbox" value={this.props.optionText}/>{this.props.optionText}
      </div>
    }
}  */

const Option = (props) => {
  return(
    <div><input onClick={props.removeoption} type='checkbox' value={props.optionText}/>{props.optionText}</div>
  );
} 

class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handleaddOption = this.handleaddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleaddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleaddOption(option);

    this.setState(() => {
      return { error };
    });
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

//functional component
/* const User = (props) => {
  return (
    <div>
    <p>name: {props.name}</p>
    <p>age: {props.age}</p>
    </div>
  )
} */

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));