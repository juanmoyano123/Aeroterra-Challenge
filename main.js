require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer",
  "esri/widgets/Search"
], function (esriConfig, Map, MapView, Graphic, GraphicsLayer,Search ) {
  esriConfig.apiKey =
    "AAPKe975aa7445864baf9bb81bfaa913ac96fJu-zNda6AM4SXOQZNQRBqtL6CniLD8HnmA0AGrIAZ_x0P2Saw6XrAoUNXL8UbiG";

  const map = new Map({
    basemap: "arcgis-navigation"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-122.3321,47.6062],
    zoom: 12
  });

  const search = new Search({  //Add Search widget
    view: view
  });

  view.ui.add(search, "top-right"); //Add to the map

});




let handleSubmit = document.querySelector("#handleSubmit");
handleSubmit.addEventListener("click", addToPoiList);
function addToPoiList(e) {
  e.preventDefault();
  let desc = document.querySelector("#description").value;
  let adr = document.querySelector("#adress").value;
  let pho = document.querySelector("#phone");
  let coord = document.querySelector("#coordinates").value.split(",");
  let typ = document.querySelector("#type").value;
  poiConstructor(desc, adr, pho, coord, typ);
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
  localStorage.setItem("poiList", JSON.stringify(poiList));
  console.log(poiList);
}

/* 
  //POINT-------------------------------------------------------------------------

  const point = {
    //Create a point
    type: "point",
    longitude: -118.80657463861,
    latitude: 34.0005930608889,
  };

  const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // White
      width: 1,
    },
  };
  const pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol,
  });
  graphicsLayer.add(pointGraphic);

  //PopUp-------------------------------------------------------------------------

  const popupTrailheads = {
    title: "Trailhead",
    content:
      "<b>Trail:</b> {TRL_NAME}<br><b>City:</b> {CITY_JUR}<br><b>Cross Street:</b> {X_STREET}<br><b>Parking:</b> {PARKING}<br><b>Elevation:</b> {ELEV_FT} ft",
  };
  const trailheads = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0",
    outFields: ["TRL_NAME", "CITY_JUR", "X_STREET", "PARKING", "ELEV_FT"],
    popupTemplate: popupTrailheads,
  });

  map.add(trailheads); */
