console.log('app.js is running')

var app = {
  title: "this is a title",
  subtitle: "this is a sub title"
}

var template = (
<div>
<h1>{app.title}</h1> 
<p>{app.subtitle}</p>
<ol>
  <li>first item</li>
  <li>secend item</li>
</ol>
</div>
);

var user = {
  name:'moti',
  age:23,
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
<p>age:{user.age}</p>
{getlocation(user.location)}
</div>

);

var appRoot = document.getElementById('app');

ReactDOM.render(templatetwo, appRoot)