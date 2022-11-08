require(["esri/config","esri/Map", "esri/views/MapView"], function (esriConfig,Map, MapView) {

    esriConfig.apiKey = "AAPKe975aa7445864baf9bb81bfaa913ac96fJu-zNda6AM4SXOQZNQRBqtL6CniLD8HnmA0AGrIAZ_x0P2Saw6XrAoUNXL8UbiG";

    const map = new Map({
      basemap: "arcgis-topographic" // Basemap layer service
    });

    const view = new MapView({
        map: map,
        center: [-118.805, 34.027], // Longitude, latitude
        zoom: 13, // Zoom level
        container: "viewDiv" // Div element
      });

});


