/* Inicializamos con una funcion que contendra los eventos a utilizar */
window.addEventListener('load', () => {
  document.getElementById('find-me').addEventListener('click', search);
});

function initMap() {
  let laboratoriaLima = {
    lat: -12.1191427,
    lng: -77.0349046
  };

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
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
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}