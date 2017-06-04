import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mapboxgl from 'mapbox-gl';
import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl"



class App extends Component {
  ///////////////////////////////////////constructor
  cosntructor() {

  }
  ///////////////////////////////////////componentDidMount
  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>NO LALA LAND</h2>
        </div>
        <div id="map">
          <ReactMapboxGl
            style="mapbox://styles/mapbox/streets-v10"
            accessToken="pk.eyJ1IjoiY2xhYXJhZnkiLCJhIjoiY2ozZ2RjZHo1MDA0bjMzanl3eTdrbTV6bSJ9.gX0zPVpXPIFQYzrexV8XoA"
            containerStyle={{
              height: "90vh",
              width: "100vw"
            }}
            center={[0,0]}
            >
          {/* <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
          </Layer> */}
          </ReactMapboxGl>
        </div>
      </div>
    )
  }
}


export default App;
