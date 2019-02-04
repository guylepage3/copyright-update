import React, { Component } from 'react';

class CopyrightUpdate extends Component {
  render() {
    return React.createElement(
      "div",
      {className: 'copyright-update'},
      this.props.style,
      null,
      '\u00A9 ',
      new Date().getFullYear()
    );
  }
}
export default CopyrightUpdate;
