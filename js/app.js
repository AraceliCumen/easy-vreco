// La funcionalidad de tu proyecto
 initMap = () => {
  // variable para la ruta
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  let laboratoriaLima = {lat: -12.1260837, lng: -77.0228761};
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: laboratoriaLima
  });
  let marker = new google.maps.Marker({
    position: laboratoriaLima,
    map: map
  });


  //dibujar la ruta
  directionsDisplay.setMap(map);
  // Autocompletar
  let startAutoComp = (document.getElementById('start'));
  let autocompliteStart = new google.maps.places.Autocomplete(startAutoComp);
  autocompliteStart.bindTo('bounds', map);
  let EndAutoComp = (document.getElementById('end'));
  let autocompliteEnd = new google.maps.places.Autocomplete(EndAutoComp);
  autocompliteEnd.bindTo('bounds', map);

  // evento boton trazar ruta
  document.getElementById('ruta').addEventListener('click', () => { 
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });
}

// calcular la ruta
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
      origin: document.getElementById('start').value,
      destination: document.getElementById('end').value,
      travelMode: 'DRIVING'
  }, function (response, status) {
      if (status === 'OK') {
          directionsDisplay.setDirections(response);
      } else {
          window.alert('Directions request failed due to ' + status);
      }
  });
}

