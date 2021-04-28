"use strict";

console.log('app.js is running');

var app = {
  title: "this is a title",
  subtitle: "this is a sub title"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "first item"
    ),
    React.createElement(
      "li",
      null,
      "secend item"
    )
  )
);

var user = {
  name: 'moti',
  age: 23,
  location: 'heifa'
};

function getlocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "location: ",
      location
    );
  }
}
var templatetwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : 'Anonymous'
  ),
  React.createElement(
    "p",
    null,
    "age:",
    user.age
  ),
  getlocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templatetwo, appRoot);
