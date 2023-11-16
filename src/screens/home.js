
import React from 'react';
import MapComponent from '../components/mapdetail';
import { Routes, Route } from 'react-router-dom';



import '../styles/map.css'
import '../styles/nav.css'

import LoginPromptModal from '../components/LoginPromptModal';

class Home extends React.Component {
  constructor(props) {
    super(props);

    // Initialize the state for the modal
    this.state = {
      isLoginModalOpen: false,
    };
  }

  // Function to open the login prompt modal
  openLoginModal = () => {
    this.setState({ isLoginModalOpen: true });
  };

  // Function to close the login prompt modal
  closeLoginModal = () => {
    this.setState({ isLoginModalOpen: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.openLoginModal}>Click Me (Requires Login)</button>
        <LoginPromptModal
          isOpen={this.state.isLoginModalOpen}
          onClose={this.closeLoginModal}
          onLogin={() => {
            // Redirect the user to the desired login page or authentication flow
            window.location.replace("/about"); // Example: Redirect to the "/about" page
          }}
        />
      </div>
    );
  }
}

export default Home;

