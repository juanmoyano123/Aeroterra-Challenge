require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",

  "esri/layers/GraphicsLayer",
], function (esriConfig, Map, MapView, Graphic, GraphicsLayer) {
  esriConfig.apiKey =
    "AAPKe975aa7445864baf9bb81bfaa913ac96fJu-zNda6AM4SXOQZNQRBqtL6CniLD8HnmA0AGrIAZ_x0P2Saw6XrAoUNXL8UbiG";

  const map = new Map({
    basemap: "arcgis-topographic", // Basemap layer service
  });

  const view = new MapView({
    map: map,
    center: [-118.805, 34.027], // Longitude, latitude
    zoom: 13, // Zoom level
    container: "viewDiv", // Div element
  });

  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);
});

let handleSubmit = document.querySelector("#handleSubmit");
handleSubmit.addEventListener("click", addToPoiList);

function addToPoiList(e) {
  e.preventDefault();
  let desc = document.querySelector("#description").value;
  let adr = document.querySelector("#adress").value;
  let pho = document.querySelector("#phone");
  let coord = document.querySelector("#coordinates").value;
  let typ = document.querySelector("#type").value;

  poiConstructor(desc, adr, pho, coord, typ);
  poiList.push(poi);
  console.log(poiList);
}

let poiList = [];
function poiConstructor(description, adress, phone, coordinates, type) {
  let poi = {
    pdescription: description,
    padress: adress,
    pphone: phone,
    pcoordinates: coordinates,
    ptype: type,
  };
  console.log(poi);
  poiList.push(poi);
  console.log(poiList);
}
