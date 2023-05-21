import React, { useState } from "react";

const Welcome = () => {
  const [dialogVisible, setDialogVisible] = useState(true);

  const handleCloseDialog = () => {
    setDialogVisible(false);
  };

  if (!dialogVisible) {
    return null; // Don't render the dialog if it's not visible
  }

  return (
    <div className="welcome-dialog-container">
      <div className="welcome-dialog-content">
        <div className="welcome-dialog-header">
          <button className="close-button" onClick={handleCloseDialog}>
            <span>&times;</span>
          </button>
        </div>
        <div className="dialog-text">
          <p className="preview-label">This is a skill demonstration preview.</p>
          <p className="safeguard-label">
          🔬  Project's goal is to showcase developer's skill in order to improve client's trust.
          </p>
          <p className="warning-label">
          🚨  While this is fully AI based project, it may occasionally
            generate incorrect or misleading information and produce stupid content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
