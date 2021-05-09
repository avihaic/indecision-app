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