console.log('app.js is running')

function subtitle(subtitle){
  if(subtitle)
  return <p>{app.subtitle}</p>
}

var app = {
  title: "this is a title",
  subtitle: "this is a sub title",
  option:['one', ' two']
}

var template = (
<div>
<h1>{app.title}</h1> 
{app.subtitle && <p>{app.subtitle}</p>}
{app.option.length > 0 ? <p>{app.option}</p> : "no option"}

<ol>
  <li>first item</li>
  <li>secend item</li>
</ol>

</div>
);

var user = {
  name:'moti',
  age:28,
  location:'heifa'
}

function getlocation(location){
  if(location){
    return <p>location: {location}</p>
  }
}
var templatetwo = (
<div>
<h1>{user.name ? user.name : 'Anonymous'}</h1>
{(user.age && user.age >= 18) && <p>age:{user.age}</p>}
{getlocation(user.location)}
</div>

);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)