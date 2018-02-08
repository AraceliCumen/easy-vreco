
// La funcionalidad de tu proyecto


function initMap() {
  let laboratoriaLima = {lat: -25.363, lng: 131.044};
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: laboratoriaLima
  });
  let marker = new google.maps.Marker({
    position: laboratoriaLima,
    map: map
  });
}

function search() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(functionExito, functionError);
  }
}

var latitud, longitud;
var functionExito = function(position) {
}

