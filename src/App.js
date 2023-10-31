import React from 'react';
import './styles/map.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MapView from './screens/map';
import About from './screens/about';


class App extends React.Component {
  render() {
    return (
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MapView />} />
            <Route path="/About" element={<About />} />

          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
