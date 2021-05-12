'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch
var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlepick = _this.handlepick.bind(_this);
    _this.handleaddOption = _this.handleaddOption.bind(_this);
    _this.removeoption = _this.removeoption.bind(_this);

    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'handlepick',
    value: function handlepick() {
      var randomnum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomnum];
      alert(option);
    }
  }, {
    key: 'handleaddOption',
    value: function handleaddOption(option) {
      if (!option) {
        return 'enter valid value to add option';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'this option already exits';
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: 'handledeleteOption',
    value: function handledeleteOption() {
      console.log('aaaaaaaaa');
      /*     this.setState((prevState) => {
            return{
              deleteoptions:prevState.options.concat(option)
            };
          }); */
    }
  }, {
    key: 'removeoption',
    value: function removeoption() {
      console.log('click remove');
    }
  }, {
    key: 'render',
    value: function render() {
      var subtitle = 'Put your life in computer hands';
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOption: this.state.options.length > 0,
          handlepick: this.handlepick
        }),
        React.createElement(Btnremove, { removeoption: this.removeoption }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, { handleaddOption: this.handleaddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

/* class Header extends React.Component{
  render(){
    return(
      <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
      </div>
      ) 
  }
} */

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision App'
};

/* class Action extends React.Component{
 render(){
    return (
      <div>
      <button 
      onClick={this.props.handlepick}
      disabled={!this.props.hasOption}
      >
      What should i do?</button>
      </div>
    ); 
 }
} */

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handlepick,
        disabled: !props.hasOption
      },
      'What should i do?'
    )
  );
};

var Btnremove = function Btnremove(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.removeoption },
      'Remove option'
    )
  );
};

/* class Options extends React.Component{
  render(){
    return(
    <div>
    <button onClick={this.props.handleDeleteOptions}>Remove all</button>
    {
       this.props.options.map((option,key) => <Option key={key} optionText={option}/>)
    }

    </div>);
  }
} */

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove all'
    ),
    props.options.map(function (option, key) {
      return React.createElement(Option, { removeoption: props.removeoption, key: key, optionText: option });
    })
  );
};

/*  class Option extends React.Component{
    render(){
      return <div>
      <input type='checkbox' name="checkbox" value={this.props.optionText}/>{this.props.optionText}
      </div>
    }
}  */

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    React.createElement('input', { onClick: props.removeoption, type: 'checkbox', value: props.optionText }),
    props.optionText
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleaddOption = _this2.handleaddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleaddOption',
    value: function handleaddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleaddOption(option);

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleaddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'add option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

//functional component
/* const User = (props) => {
  return (
    <div>
    <p>name: {props.name}</p>
    <p>age: {props.age}</p>
    </div>
  )
} */

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
