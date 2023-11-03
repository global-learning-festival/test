import React from 'react';
import MapComponent from '../components/mapdetail';

import '../styles/map.css'
import '../styles/nav.css'


class Home extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
                
                <nav class="nav">
                    <ul>               
                    <img class="logo" src="src../assets/water-refill-icon.png"></img>
                      <li><a class="active" href="/">Home</a></li>
                        <li><a href="/About">About</a></li>
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


export default Home;