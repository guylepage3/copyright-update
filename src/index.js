import React from 'react';

class CopyrightUpdate extends React.Component {
  render() {
    return (
      &copy; document.write(Date().split(' ')[3])
    );
  }
}
export default CopyrightUpdate;