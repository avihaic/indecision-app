"use strict";

console.log('app.js is running');

function subtitle(subtitle) {
  if (subtitle) return React.createElement(
    "p",
    null,
    app.subtitle
  );
}

var app = {
  title: "this is a title",
  subtitle: "this is a sub title",
  option: ['one', ' two']
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  app.option.length > 0 ? React.createElement(
    "p",
    null,
    app.option
  ) : "no option",
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
  age: 28,
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
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "age:",
    user.age
  ),
  getlocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
