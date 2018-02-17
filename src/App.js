import React from 'react';
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl';
import geojson from './geo.json';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoibWFnZ28iLCJhIjoiYXdzWFR2cyJ9.ke0Vc_1-0TRvq0XhMuYKpA"
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      marker: null,
    };
  }
  render() {
    return (
      <Map
        style="mapbox://styles/maggo/cjdrs8ju22ole2sp9jhliltms"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
        center={[13.4011148, 52.5216238]}
        zoom={[10]}
      >
        {geojson.map((marker) => (
          <Marker
            coordinates={marker.location}
            anchor="bottom"
            onClick={() => this.setState({marker})}
            offset={-20}
          >
            <div className="marker">
              {marker.name}
            </div>
          </Marker>
        ))}
        {this.state.marker && (
          <Popup
            coordinates={this.state.marker.location}
          >
            <h1>Popup</h1>
          </Popup>
        )}
      </Map>
    )
  } 
}
