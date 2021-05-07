console.log('app.js is running')
//babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch

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

const onmakedecision = () => {
  const randomnum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomnum];
  alert(option);
};

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
    <button disabled={app.options.length === 0} onClick={onmakedecision}>what should i do?</button>
    <button  onClick={remove}>remove all</button>
    <ol>
    {
      app.options.map((option,key) => {
        return <li key={key}>{option}</li>
      })
    }

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


