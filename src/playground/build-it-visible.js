/* console.log('app.js is running');

let visibility = false;

const showinfo = () => {    
visibility = !visibility;
renderapp();
};

const appRoot = document.getElementById('app');

const renderapp = () => {
    const template = (
    <div>
        <h1>visibility toggle</h1>
        <button onClick={showinfo}>{visibility ? 'hide info' : 'show info'}</button>
        {visibility && (<div><p>Hey there are my info </p></div>)}
    </div>
    );

    ReactDOM.render(template, appRoot);
};

renderapp(); */

class Visibilitytoggle extends React.Component{
    constructor(props){
        super(props);
        this.showinfo = this.showinfo.bind(this);
        this.state = {
            visibility : false
        };
    }

    showinfo()
    {   
        this.setState((prevState) => {
            return{
                    visibility : !prevState.visibility
            };    
        });
        
    }

    render(){
        return(
        <div>
            <h1>visibility toggle</h1>
            <button onClick={this.showinfo}>{this.state.visibility ? 'hide info' : 'show info'}</button>
            {this.state.visibility && (<div><p>Hey there are my info </p></div>)}
        </div>
        );
    }
}

ReactDOM.render(<Visibilitytoggle />, document.getElementById('app'));