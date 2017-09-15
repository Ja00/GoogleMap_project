var DEFAULT_ZOOM = 15;
// var GOOGLE_API_KEY = 'AIzaSyBZ8PZCoEFJzI7-3PEFcz_-n3PNJO8KRcw';
var service; 
var map;
var DEFAULT_RADIUS = 1500;
var DEFAULT_LAT = 37.773872;
var DEFARULT_LNG = -122.43129;

$(function() {
function initMap() {
 
 var input = document.getElementById('pac-input');
 var searchBox = new google.maps.places.SearchBox(input);  
  
 map = new google.maps.Map($('#map')[0], {
     zoom: DEFAULT_ZOOM,
     center: {
      lat: DEFAULT_LAT,
      lng: DEFAULT_LNG
     }
   });
 map.controls[google.maps.ControlPosition.TOP_LEFT].push(input); 
 map.addListener('counds_changed', function() {
    searchBox.setBounds(map.getBounds());
 });
 
 var request = {
  location: new google.maps.Latlng(DEFAULT_LAT, DEFAULT_LNG),
  radius: DEFAULT_RADIUS,
  type: 'restaurant'
  };

service = new google.maps.places.PlacesService(map);
service.textSearch(request, callback);  
}

initMap();

function callback(results, status) {
  if(status === google.maps.places.PlacesServiceStatus.OK) {
    var current_infowindow;
    _.each(results, function(place){
      var marker = new google.maps.Marker({
        position: {
          'lat': place.geometry.location.lat(),
          'lng': place.geometry.location.lng()
        },
        map:map
      });
      
      var infowindow_content = 
          '<div id="content"> + '<h1 id="firstHeading">' + place.name + '</h1>'+
          '</div>';
      var infowindow = new google.maps.InfoWindow({
          content: infowindow_content
      });

      marker.addListener('click', function() {
        if (current_infowindow) {
          current_infowindow.close();
         }
        infowindow.open(map, marker);
        current_infowindow = infowindow;
      });
    });
  }
}    
});
