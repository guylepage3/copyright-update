import React from 'react';

class CopyrightUpdate extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      new Date().getFullYear()
    );
  }
}
export default CopyrightUpdate;