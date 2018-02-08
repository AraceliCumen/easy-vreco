
// La funcionalidad de tu proyecto

function initMap() {
  const laboratoriaLima = {
    lat: -12.1260837,
    lng: -77.0228761
  };
  /* Autocompletado */
  let inputGoing = document.getElementById('start');
  let inputDestiny = document.getElementById('end');

  new google.maps.places.Autocomplete(inputGoing);
  new google.maps.places.Autocomplete(inputDestiny);
  /* Fin de  Autocompletado */

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: laboratoriaLima
  });
  let marker = new google.maps.Marker({
    position: laboratoriaLima,
    map: map,
  });

  /* trazando la ruta*/
  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer;

  let calculateAndDisplayRoute = (directionsService, directionsDisplay) => {
    directionsService.route({
      origin: inputGoing.value,
      destination: inputDestiny.value,
      travelMode: 'DRIVING'

    }, (response, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('No encontramos una ruta');
      }
    });
  };
  directionsDisplay.setMap(map);
  let drawRoute = () => {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  document.getElementById('route').addEventListener('click', drawRoute);


  function search() {
    if (navigator.geolocation) {//
      let latitud, longitud;

      let funcionExito = (posicion) => {
        latitud = posicion.coords.latitude;
        longitud = posicion.coords.longitude;

        let map = new google.maps.Map(document.getElementById('map'));
        map.setZoom(15);
        map.setCenter({
          lat: latitud,
          lng: longitud
        });


        /* Trazar ruta */
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;

        let calculateAndDisplayRoute = (directionsService, directionsDisplay) => {
          directionsService.route({
            origin: inputGoing.value,
            destination: inputDestiny.value,
            travelMode: 'DRIVING'

          }, (response, status) => {
            if (status === 'OK') {
              directionsDisplay.setDirections(response);
            } else {
              window.alert('No encontramos una ruta');
            }
          });
        };
        directionsDisplay.setMap(map);
        let drawRoute = () => {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        document.getElementById('route').addEventListener('click', drawRoute);
        /* Fin de trazar ruta */

        let myPosition = new google.maps.Marker({
          position: {
            lat: latitud,
            lng: longitud
          },
          map: map,
          animation: google.maps.Animation.DROP
        });
      };

      let funcionError = (error) => {
        alert('No tenemos tu ubicación');
      };
      navigator.geolocation.getCurrentPosition(funcionExito, funcionError);//
    }
  }
  document.getElementById('position').addEventListener('click', search);
};
