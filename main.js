require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer",
], function (esriConfig, Map, MapView, Graphic, GraphicsLayer) {
  esriConfig.apiKey =
    "AAPKe975aa7445864baf9bb81bfaa913ac96fJu-zNda6AM4SXOQZNQRBqtL6CniLD8HnmA0AGrIAZ_x0P2Saw6XrAoUNXL8UbiG";

  const map = new Map({
    basemap: "arcgis-topographic", // Basemap layer service
  });

  const view = new MapView({
    map: map,
    center: [-158.805, 34.027], //Longitude, latitude
    zoom: 13,
    container: "viewDiv",
  });

  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);

  //Atributos de los puntos-----------------------------------

  const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // White
      width: 1,
    },
  };

  //Coordenadas de los puntos-----------------------------------

  const point = {
    type: "point",
    longitude: -158.80657463861,
    latitude: 34.0005930608889,
  };

  //PopUp Template de los puntos-----------------------------------

  const popupTemplate = {
    title: "{Name}",
    content: "{Description}",
  };
  const attributes = {
    Name: "Graphic",
    Description: "I am a polygon",
  };

  //Render del punto + Popup  de los puntos-----------------------------------

  const pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol,
    attributes: attributes,
    popupTemplate: popupTemplate,
  });

  graphicsLayer.add(pointGraphic);
});

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

let handleSubmit = document.querySelector("#handleSubmit");
handleSubmit.addEventListener("click", addToPoiList());
function addToPoiList(e) {
  e.preventDefault();
  let desc = document.querySelector("#description").value;
  let adr = document.querySelector("#adress").value;
  let pho = document.querySelector("#phone");
  let point = document.querySelector("#coordinates").value.split(",");
  let typ = document.querySelector("#type").value;
  poiConstructor(desc, adr, pho, point, typ);
}

/* 
const point = {
  type: "point",
  longitude: -158.80657463861,
  latitude: 34.0005930608889,
};

//PopUp Template de los puntos-----------------------------------

  const popupTemplate = {
    title: "{Name}",
    content: "{Description}",
  };
  const attributes = {
    Name: "Graphic",
    Description: "I am a polygon",
  };

//Render del punto + Popup  de los puntos-----------------------------------

const pointGraphic = new Graphic({
  geometry: point,
  symbol: simpleMarkerSymbol,
  attributes: attributes,
  popupTemplate: popupTemplate,
});
 */
