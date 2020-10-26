//1. developed a web app in which

/**
 function validate(){
   if(!navigator.geolocation){
     console.log('No soporta la Geolocalizacion');
   }else{
     console.log(Buscando...);
     navigator.geolocation.getCurrentPosition(success);
   }
 }
 */
/*var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error);*/


  //geolocalizador constante
  /*function success(pos) {
    let coordinates = pos.coords;

    console.log('Your current position is, until you move:');
    console.log(`Latitude : ${coordinates.latitude}`);
    console.log(`Longitude: ${coordinates.longitude}`);
    console.log(`More or less ${coordinates.accuracy} meters.`);

    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: coordinates.latitude, lng: coordinates.longitude},
      zoom: 14
  });

  var coordsDiv = document.getElementById('coords');
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(coordsDiv);
    map.addListener('mousemove', function(event) {
    console.log(coordsDiv = 'lat: ' + event.latLng.lat() + ', lng: ' + event.latLng.lng());
    });
  
};
 navigator.geolocation.watchPosition(success);*/


 //calcular distancia recorrida
 
  /**function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
} */

//2. Try the geolocation with LeafletJS.

/*function success(pos) {
    var crd = pos.coords;
    console.log("Entra ahora");
    var map = L.map('mapid').setView([crd.latitude, crd.longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([crd.latitude, crd.longitude]).addTo(map)
        .bindPopup('Aqui estamos.<br> Easily customizable.')
        .openPopup();

  }
  navigator.geolocation.getCurrentPosition(success);*/


  //3 encontrar tu direccion
 /* function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
           center: {lat: 37.1512198, lng: -3.6167244999999997},
           zoom: 16
         });
    
         var coordsDiv = document.getElementById('coords');
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(coordsDiv);
        map.addListener('mousemove', function(event) {
             console.log(coordsDiv = 'lat: ' + event.latLng.lat() + ', lng: ' + event.latLng.lng());
        });
            
        var myLatLng = {lat: 37.1512198, lng: -3.6167244999999997};

    
     }
  initMap();*/