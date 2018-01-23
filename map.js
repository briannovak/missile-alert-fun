const mymap = L.map("mapid").setView([39.7562946,-105.0058066], 14);

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia21raW5nZG9uIiwiYSI6ImNqYjJmNHdmdjdsdmgycW5xbG95bnF0bjUifQ.WYLCkTZjGgyymjCJK--SYg",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: "mapbox.streets"
  }
).addTo(mymap);

const personIcon = L.icon({
  iconUrl: "/person.png",
  shadowUrl: "/personshadow.png",
  iconSize: [50, 75],
  shadowSize: [50, 50],
  iconAnchor: [0, 50],
  shadowAnchor: [-20, 15],
  popupAnchor: [10, -20]
});

const rocketIcon = L.icon({
  iconUrl: "/Missile.png",
  iconSize: [50, 50],
  iconAnchor: [30, 70],
  popupAnchor: [10, -20]
});

let geolocation = L.marker([39.7569544,-105.0084244], {
  icon: personIcon,
  riseOnHover: true
}).addTo(mymap);
geolocation.bindPopup(
  "You are Here!"
);



let goal1 = L.marker([39.7535232,-104.995464], {
  icon: rocketIcon,
  riseOnHover: true
}).addTo(mymap);
goal1.bindPopup(
  "Get to this location and enter your answer to receive your next clue!"
);
