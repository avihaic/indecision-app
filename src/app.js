//babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch
class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.state = {
     options : ['one','two','three']
    }
  }

  handleDeleteOptions(){
    this.setState(() => {
      return{
        options: []
      };
    });
  };

  render(){
    const title = 'Indecision App';
    const subtitle = 'Put your life in computer hands';
    
    return (
      <div>
      <Header title={title} subtitle={subtitle}/>
      <Action hasOption={this.state.options.length > 0}/>
      <Options
      options={this.state.options}
      handleDeleteOptions={this.handleDeleteOptions}
      />
      <AddOption/>
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
 handlepick(){
  alert('handlepick');
 } 

 render(){
    return (
      <div>
      <button 
      onClick={this.handlepick}
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
  addoption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if(option){
      alert(option);
    }
  };

  render(){
    return (
    <div>
    <form onSubmit={this.addoption}>
    <input type="text" name="option"/>
    <button>add option</button>
    </form>
    </div>);
  }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));