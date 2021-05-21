//babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch
//npm uninstall -g babel-cli live-server
class IndecisionApp extends React.Component {
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

/* class Option extends React.Component{
    render(){
      return  <div>{this.props.optionText}</div> 
    }
} */

  const Option = (props) => {
    return (
      <div>
      {props.optionText}
      <button onClick={(e) => {props.handleDeleteOption(props.optionText)}}>remove</button>
      </div>
    );
  };

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

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));