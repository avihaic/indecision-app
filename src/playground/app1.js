//babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch
class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlepick = this.handlepick.bind(this);
    this.handleaddOption = this.handleaddOption.bind(this);

    this.state = {
     options : props.options,
     option: []
    }
  };

  handleDeleteOptions(){
    this.setState(() => {
      return{
        options: [],
      };
    });
  };

handleDeleteOption(){
  this.setState((prevState) => {
    options: prevState.options.filter((option) => {
          !options1.includes(option)
    })
  });
}

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

const Options = (props) => {
      return(
    <div>
    <button onClick={props.handleDeleteOptions}>Remove all</button>
    <button onClick={props.handleDeleteOption}>Remove Option</button>
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

class  Option extends React.Component{
  constructor(propd){
    super(props);
    this.state = {
      option: []
    }
  }

  render(){
    return(
      <div>
      <input onClick={
        this.setState((prevState) =>
        ({  options:prevState.options.concat(option) })) type='checkbox'}/>
        {props.optionText} 
        
      </div>
    );
  }

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


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));