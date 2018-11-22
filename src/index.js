import React from 'react';

class CopyrightUpdate extends React.Component {
  render() {
    return React.createElement(
      "div",
      {className: 'copyright-update'},
      null,
      '\u00A9 ',
      new Date().getFullYear()
    );
  }
}
export default CopyrightUpdate;