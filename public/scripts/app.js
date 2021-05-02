"use strict";

console.log('app.js is running');

var app = {
  title: "indecision app",
  subtitle: "put your life in the hands of a computer",
  options: []
};

var remove = function remove() {
  if (app.options.length > 0) {
    app.options.length = 0;
    renderoptionsapp();
  }
};

var onformsubmit = function onformsubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderoptionsapp();
  }
};

var appRoot = document.getElementById('app');

var renderoptionsapp = function renderoptionsapp() {

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
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? 'here are your options' : "no option"
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: remove },
      "remove all"
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
    ),
    React.createElement(
      "form",
      { onSubmit: onformsubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "add option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};
renderoptionsapp();
