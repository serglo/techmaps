import React from "react";
import ReactMapboxGl, { Marker, GeoJSONLayer } from "react-mapbox-gl";
import geojson from "./geo.json";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoibWFnZ28iLCJhIjoiYXdzWFR2cyJ9.ke0Vc_1-0TRvq0XhMuYKpA"
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      marker: null,
      filter: null,
      filterVisible: false
    };
  }
  render() {
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
            {this.state.filterVisible && (
              <li>
                <label htmlFor="eCommerce">
                  <input
                    onChange={() => this.setState({ filter: "eCommerce" })}
                    id="eCommerce"
                    type="checkbox"
                  />🛒 eCommerce
                </label>
              </li>
            )}
            {this.state.filterVisible && (
              <li>
                <label htmlFor="AdTech">
                  <input
                    onChange={() => this.setState({ filter: "AdTech" })}
                    id="AdTech"
                    type="checkbox"
                  />📰 AdTech
                </label>
              </li>
            )}
            {this.state.filterVisible && (
              <li>
                <label htmlFor="FinTech">
                  <input
                    onChange={() => this.setState({ filter: "FinTech" })}
                    id="FinTech"
                    type="checkbox"
                  />💸 FinTech
                </label>
              </li>
            )}
            {this.state.filterVisible && (
              <li>
                <label htmlFor="Retail">
                  <input
                    onChange={() => this.setState({ filter: "Retail" })}
                    id="Retail"
                    type="checkbox"
                  />🛍 Retail
                </label>
              </li>
            )}
            {this.state.filterVisible && (
              <li>
                <label htmlFor="Games">
                  <input
                    onChange={() => this.setState({ filter: "Games" })}
                    id="Games"
                    type="checkbox"
                  />🎮 Games
                </label>
              </li>
            )}
            {this.state.filterVisible && (
              <li>
                <label htmlFor="Food Delivery">
                  <input
                    onChange={() => this.setState({ filter: "Food Delivery" })}
                    id="Food Delivery"
                    type="checkbox"
                  />🍕 Food Delivery
                </label>
              </li>
            )}
            {this.state.filterVisible && (
              <li>
                <label htmlFor="Travel">
                  <input
                    onChange={() => this.setState({ filter: "Travel" })}
                    id="Travel"
                    type="checkbox"
                  />✈️ Travel
                </label>
              </li>
            )}
            {this.state.filterVisible && (
              <li>
                <label htmlFor="Real Estate">
                  <input
                    onChange={() => this.setState({ filter: "Real Estate" })}
                    id="Real Estate"
                    type="checkbox"
                  />🏠 Real Estate
                </label>
              </li>
            )}
            {this.state.filterVisible && (
              <li>
                <label htmlFor="EduTech">
                  <input
                    onChange={() => this.setState({ filter: "EduTech" })}
                    id="EduTech"
                    type="checkbox"
                  />🎓 EduTech
                </label>
              </li>
            )}
            {this.state.filterVisible && (
              <li>
                <label htmlFor="Health">
                  <input
                    onChange={() => this.setState({ filter: "Health" })}
                    id="Health"
                    type="checkbox"
                  />❤️ Health
                </label>
              </li>
            )}
            {this.state.filterVisible && (
              <li>
                <label htmlFor="Service">
                  <input
                    onChange={() => this.setState({ filter: "Service" })}
                    id="Service"
                    type="checkbox"
                  />💁 Service
                </label>
              </li>
            )}
            {this.state.filterVisible && (
              <li>
                <label htmlFor="HR">
                  <input
                    onChange={() => this.setState({ filter: "HR" })}
                    id="HR"
                    type="checkbox"
                  />💼 HR
                </label>
              </li>
            )}
            {this.state.filterVisible && (
              <li>
                <label htmlFor="Music">
                  <input
                    onChange={() => this.setState({ filter: "Music" })}
                    id="Music"
                    type="checkbox"
                  />🎧 Music
                </label>
              </li>
            )}
            {this.state.filterVisible && (
              <li>
                <label htmlFor="Other">
                  <input
                    onChange={() => this.setState({ filter: "Other" })}
                    id="Other"
                    type="checkbox"
                  />🤷 Other
                </label>
              </li>
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
            data={geojson}
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
