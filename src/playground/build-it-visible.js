/* console.log('app.js is running');

const app = {
    title: 'Visibility Toggle',
    info: 'Hey . these are some details you can now see!'
}

 const showinfo = () => {

  let divid = document.getElementById('info');
  let btn = document.getElementById('btn');

  if(divid.style.display == 'block'){
    divid.style.display = 'none';
    btn.innerHTML = 'show details';
  }else{
    divid.style.display = 'block';
    btn.innerHTML = 'hide details';
  }

 };

const appRoot = document.getElementById('app');

const renderapp = () => {
    const template = (
    <div>
        <h1>{app.title}</h1>
        <button id="btn" onClick={showinfo}>show details</button>
        <div id="info" style={{display:'none'}}>{app.info}</div>
    </div>
    );

    ReactDOM.render(template, appRoot);
};

renderapp(); */

console.log('app.js is running');

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

renderapp();