import React, { Component } from 'react';

class CopyrightUpdate extends Component {
  render() {
    return (
      <div 
        className={`copyright-update ${this.props.className}`}
        style={this.props.style}
        >
        <span>
        &copy; {new Date().getFullYear()}
        </span>
      </div>
    );
  }
}
export default CopyrightUpdate;
