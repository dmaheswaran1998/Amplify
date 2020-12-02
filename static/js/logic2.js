// Creating map object
var myMap = L.map("map", {
  center: [40.7, -73.95],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: "pk.eyJ1IjoiZG1haGVzd2FyYW4iLCJhIjoiY2tldHF1ejF1MnJkeTJybXMxcHNvY3NvciJ9.a3bZ7Z8_Np-WOjC2zUAjKg"
}).addTo(myMap);

// Grab the data with d3
d3.json("/map_data", function(response) {


  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var location = response[i]
    console.log(location);

    markers.addLayer(L.marker([location.Coordinates[1], location.Coordinates[0]]).bindPopup(response[i].Title));



   

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});
