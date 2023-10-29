import React from 'react';
import MapComponent from '../components/mapdetail';

import '../styles/map.css'


class MapView extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
                <header>
                    <h1>Welcome to Singapore Polytechnic</h1>
                </header>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <main>
                    <MapComponent />
                </main>
             
            </div>


    );
  }

}


export default MapView;