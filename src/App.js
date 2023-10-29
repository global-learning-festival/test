import React from 'react';
import './styles/map.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MapView from './screens/map';


class App extends React.Component {
  render() {
    return (
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MapView />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
