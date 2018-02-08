
function initMap() {
  let laboratoriaLima = {lat: -12.1260837, lng: -77.0228761};
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: laboratoriaLima
  });
  let marker = new google.maps.Marker({
    position: laboratoriaLima,
    map: map
  });

  // Autocompletar
  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer;
  directionsDisplay.setMap(map);//funcion para buscar la ruta en el mapa
  let startAutoComp = (document.getElementById('start'));
  let autocompliteStart = new google.maps.places.Autocomplete(startAutoComp);
  autocompliteStart.bindTo('bounds', map);
  let EndAutoComp = (document.getElementById('end'));
  let autocompliteEnd = new google.maps.places.Autocomplete(EndAutoComp);
  autocompliteEnd.bindTo('bounds', map);

  function search() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(functionExito, functionError);
    }
  }

  document.getElementById("encuentrame").addEventListener("click", search);

  let latitud, longitud;
  let  functionExito = function(position) {
  }
}


