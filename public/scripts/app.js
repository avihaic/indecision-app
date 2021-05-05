"use strict";

console.log('app.js is running');
//babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch

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

var onmakedecision = function onmakedecision() {
  var randomnum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomnum];
  alert(option);
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
      "button",
      { disabled: app.options.length === 0, onClick: onmakedecision },
      "what should i do?"
    ),
    React.createElement(
      "button",
      { onClick: remove },
      "remove all"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option, key) {
        return React.createElement(
          "li",
          { key: key },
          option
        );
      })
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
