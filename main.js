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
  //poiConstructor(desc, adr, pho, coordinates, typ);
  let point = [coordinates[0], coordinates[1]];
  map.flyTo(point, 13);
  L.marker(point).addTo(map).bindPopup(`${desc}`).openPopup();
}

let deleteButton = document.getElementById("handleDelete");
const deleteFunction = () => {
  localStorage.clear("polist");
};

/* let poiList = [];
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
}
 */
