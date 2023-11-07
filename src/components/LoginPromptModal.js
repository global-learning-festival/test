import React, { useState } from 'react';
import '../styles/popup.css'


function LoginPromptModal({ isOpen, onClose, onLogin }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="login-prompt-modal">
      <div className="modal-content">
        <p>Please log in to continue.</p>
        <button onClick={onLogin}>Yes</button>
        <button onClick={onClose}>No</button>
      </div>
    </div>
  );
}

export default LoginPromptModal;
