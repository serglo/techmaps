import React from "react";
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";
import geojson from "./geo.json";
import Filters from "./components/Filters";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoibWFnZ28iLCJhIjoiYXdzWFR2cyJ9.ke0Vc_1-0TRvq0XhMuYKpA"
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      marker: null,
      filters: [],
      filterVisible: false
    };
  }

  onSelectFilter = e => {
    const { filters, filterVisible } = this.state;
    const { checked, value } = e.target;
    if (checked) {
      this.setState({
        filters: [...filters, value]
      });
    } else {
      this.setState({
        filters: filters.filter(filter => filter !== value)
      });
    }
  };

  onToggleFilter = e => this.setState({ filterVisible: e.target.checked });

  render() {
    const { filters, filterVisible } = this.state;
    const filteredGeoJSON = {
      ...geojson,
      features: geojson.features.filter(
        feature =>
          filterVisible ? filters.includes(feature.properties.industry) : true
      )
    };
    return (
      <div>
        <Filters
          visible={filterVisible}
          filters={filters}
          onSelectFilter={this.onSelectFilter}
          onToggleFilter={this.onToggleFilter}
        />
        <Map
          style="mapbox://styles/mapbox/dark-v9"
          center={[13.4011148, 52.5216238]}
          zoom={[10]}
          containerStyle={{
            height: "100vh",
            width: "100vw"
          }}
        >
          <GeoJSONLayer
            data={filteredGeoJSON}
            symbolLayout={{
              "text-field": "{name}",
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 0.6],
              "text-anchor": "top"
            }}
            symbolPaint={{
              "text-color": "white"
            }}
            circleLayout={{ visibility: "visible" }}
            circlePaint={{ "circle-color": "white" }}
          />
        </Map>
      </div>
    );
  }
}
