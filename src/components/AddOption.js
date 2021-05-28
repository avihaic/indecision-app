import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
<<<<<<< HEAD
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form  className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
=======
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
>>>>>>> ad7d756867377c69086a5aba3c12866ea90a448b
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
