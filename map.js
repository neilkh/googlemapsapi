$(document).ready(function(){

/*setup*/
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapProp = {
    center:new google.maps.LatLng(-33.8, 151.2),
    zoom: 5,
  };
  map = new google.maps.Map(mapCanvas, mapProp);
}

google.maps.event.addDomListener(window, 'load', myMap);

/*put marker with message*/
$("#cords").on("submit", function(event) {
  var lat = $("input[name=latitude]").val();
  var lng = $("input[name=longitude]").val();
  var msg = $("input[name=message]").val();
  
  var coordinate = new google.maps.LatLng(lat, lng);
  var marker = new google.maps.Marker({ position: coordinate,})
  marker.setMap(map)

  var infoWindow = new google.maps.InfoWindow({
    content: '<div class="infoWindow">' + msg + '</div>'
  });
  
  infoWindow.open(map,marker);
  google.maps.event.addListener(marker, 'click', function(){ infoWindow.open(map,marker); });

  return false
});

});