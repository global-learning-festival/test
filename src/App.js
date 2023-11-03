import React from 'react';
import './styles/map.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './screens/about';
import Home from './screens/home';


class App extends React.Component {
  render() {
    return (
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />

          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
