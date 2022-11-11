var map = L.map("map").setView([45.5, -0.09], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 50,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let handleSubmit = document.querySelector("#handleSubmit");
handleSubmit.addEventListener("click", addToPoiList);

function addToPoiList(e) {
  e.preventDefault();
  let desc = document.querySelector("#description").value;
  let adr = document.querySelector("#adress").value;
  let pho = document.querySelector("#phone").value;
  let coordinates = document.querySelector("#coordinates").value.split(",");
  let typ = document.querySelector("#type").value;
  poiConstructor(desc, adr, pho, coordinates, typ);
  let point = [coordinates[0], coordinates[1]];
  map.flyTo(point, 13);
  L.marker(point)
    .addTo(map)
    .bindPopup(
      `Description: ${desc}<br> Adress: ${adr}<br> Phone:${pho}<br> Coordinates:${coordinates}`
    )
    .openPopup();
}

let deleteButton = document.getElementById("handleDelete");
const deleteFunction = () => {
  localStorage.clear("polist");
};

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
  localStorage.setItem("poiList", JSON.stringify(poiList));
  /*renderPointsMap(poiList);*/
  renderListPoi(poiList);
}

/* function renderPointsMap(array) {
  array.map((e) => {
    map.flyTo(e.pcoordinates, 13);
    L.marker(e.pcoordinates)
      .addTo(map)
      .bindPopup(
        `Description: ${e.pdescription}<br> Adress: ${e.padress}<br>Coordinates: ${e.pcoordinates} Phone:${e.pphone}`
      )
      .openPopup();
  });
} */

function renderListPoi(array) {
  let poiItemList = document.getElementById("poiItemList");
  poiItemList.innerHTML = "";
  array.map((e) => {
    let liPoi = document.createElement("ul");
    liPoi.className = "list";
    liPoi.innerHTML = "";
    liPoi.innerHTML = `<li>Description: ${e.pdescription}<br> Adress: ${e.padress}<br>Coordinates: (${e.pcoordinates}) <br>Phone:${e.pphone}</li>`;
    poiItemList.appendChild(liPoi);
  });
}
