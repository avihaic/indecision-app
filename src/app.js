class IndecisionApp extends React.Component{
  render(){
    const title = 'Indecision App';
    const subtitle = 'Put your life in computer hands';
    const options = ['one','two','three'];

    return (
      <div>
      <Header title={title} subtitle={subtitle}/>
      <Action />
      <Options options={options}/>
      <AddOption options={options}/>
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
      <button onClick={this.handlepick}>What should i do?</button>
      </div>); 
 }
}

class Options extends React.Component{
  constructor(props){
  super(props)
  this.removeall = this.removeall.bind(this);
  }
  removeall(){
    console.log(this.props.options);
  }

  render(){
    return(
    <div>
    <button onClick={this.removeall}>Remove all</button>
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