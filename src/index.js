import React from "react";

const CopyrightUpdate = () => {
  return (
    <div className="copyright-update" style={{ display: 'inline-block' }}>
      &copy; {new Date().getFullYear()}
    </div>
  );
}

export default CopyrightUpdate;
