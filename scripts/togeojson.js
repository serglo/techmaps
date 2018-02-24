const fs = require("fs");
const request = require("request");

let geojson = {
  type: "FeatureCollection",
  features: []
};

const file = fs.readFileSync("./final.json");
const locations = JSON.parse(file.toString());

locations.forEach(location => {
  const data = {
    type: "Feature",
    properties: {
      id: location.id,
      name: location.name,
      industry: location.industry
    }
  };

  if (location.address) {
    data.properties.lon = location.location[0];
    data.properties.lat = location.location[1];
    data.properties.address = location.address;

    data.geometry = {
      type: "Point",
      coordinates: [location.location[1], location.location[0]]
    };
  }

  geojson.features.push(data);
});

setTimeout(() => {
  console.log(geojson, geojson.length);
  fs.writeFile("../src/geo.json", JSON.stringify(geojson, null, 2), () => {
    console.log("saved!");
  });
}, 2000);
