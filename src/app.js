console.log('app.js is running')


const app = {
  title: "indecision app",
  subtitle: "put your life in the hands of a computer",
  options:[]
};

const remove = () => {
  if(app.options.length > 0){
    app.options.length = 0;
    renderoptionsapp();
  }

}

const onformsubmit = (e) => {
e.preventDefault();

const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    renderoptionsapp();

  }
};


const appRoot = document.getElementById('app');

const renderoptionsapp = () => {

  const template = (
    <div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'here are your options' : "no option"}</p>
    <p>{app.options.length}</p>

    <button  onClick={remove}>remove all</button>
    <ol>
      <li>first item</li>
      <li>secend item</li>
    </ol>
    
    <form onSubmit={onformsubmit}>
    <input type="text" name="option" />
    <button>add option</button>
    </form>
    </div>
  );

    ReactDOM.render(template, appRoot);
}
renderoptionsapp();


