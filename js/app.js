/* Inicializamos con una funcion que contendra los eventos a utilizar */
window.addEventListener('load', () => {
  document.getElementById('find-me').addEventListener('click', search);
});

initMap = () => {
  let laboratoriaLima = {
    lat: -12.1260837,
    lng: -77.0228761
  };
  
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: laboratoriaLima
  });

  let marker = new google.maps.Marker({
    position: laboratoriaLima,
    map: map
  });

  var infoWindow = new google.maps.InfoWindow({map: map});
  
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
  
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  // Autocompletar
  let startAutoComp = (document.getElementById('start'));
  let autocompliteStart = new google.maps.places.Autocomplete(startAutoComp);
  autocompliteStart.bindTo('bounds', map);
  let EndAutoComp = (document.getElementById('end'));
  let autocompliteEnd = new google.maps.places.Autocomplete(EndAutoComp);
  autocompliteEnd.bindTo('bounds', map);
};

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}