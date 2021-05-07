class Header extends React.Component{
  render(){
    return <p>this is from header</p>
  }
}

class Options extends React.Component{
  render(){
    return <div>Options component here</div>
  }
}

class AddOptions extends React.Component{
  render(){
    return <div>AddOptions component here</div>
  }
}

const jsx = (
  <div>
    <h1>Title</h1>
    <Header />
    <Options />
    <AddOptions />
  </div>
);

ReactDOM.render(jsx,document.getElementById('app'));