//babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch
class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlepick = this.handlepick.bind(this);
    this.handleaddOption = this.handleaddOption.bind(this);
    this.state = {
     options : []
    }
  }

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

  render(){
    const title = 'Indecision App';
    const subtitle = 'Put your life in computer hands';
    
    return (
      <div>
      <Header title={title} subtitle={subtitle}/>
      <Action
      hasOption={this.state.options.length > 0}
      handlepick = {this.handlepick}
      />
      <Options
      options={this.state.options}
      handleDeleteOptions={this.handleDeleteOptions}
      />
      <AddOption handleaddOption={this.handleaddOption}/>
    </div>
    );
  }
}

class Header extends React.Component{
  render(){
    return(
      <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
      </div>
      ) 
  }
}

class Action extends React.Component{
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
}

class Options extends React.Component{
  render(){
    return(
    <div>
    <button onClick={this.props.handleDeleteOptions}>Remove all</button>
    {
       this.props.options.map((option,key) => <Option key={key} optionText={option}/>)
    }

    </div>);
  }
}

class Option extends React.Component{
    render(){
      return  <div>{this.props.optionText}</div> 
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