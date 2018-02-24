import React from "react";
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";
import geojson from "./geo.json";
import { INDUSTRIES } from "./constants/industries";

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
    const { filters } = this.state;
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
        <div id="filters" className="filters">
          <ul>
            <li>
              Techmaps.io 💻🗺️ <br />
              <a
                className="addnewbusiness"
                href="https://techmaps.typeform.com/to/WnqKsS"
              >
                add new business
              </a>
            </li>
            <li id="toggle">
              <label htmlFor="filter">
                <input
                  onChange={() =>
                    this.setState({ filterVisible: !this.state.filterVisible })
                  }
                  id="filter"
                  type="checkbox"
                />Filter ⛏
              </label>
            </li>
            {Object.entries(INDUSTRIES).map(
              ([id, industry]) =>
                this.state.filterVisible && (
                  <li key={id}>
                    <label htmlFor={id}>
                      <input
                        onChange={this.onSelectFilter}
                        id={id}
                        type="checkbox"
                        value={id}
                      />
                      <span role="img" aria-hidden>
                        {industry.icon}
                      </span>
                      {industry.label}
                    </label>
                  </li>
                )
            )}
          </ul>
        </div>
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
