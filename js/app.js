// La funcionalidad de tu proyecto
function initMap(){
  var peru = { lat: -9.082632, lng: -84.0431127};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: peru
  });
}
