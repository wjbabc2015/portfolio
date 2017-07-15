var chinaCenter = new google.maps.LatLng(38.028321, 103.864336);
var usaCenter = new google.maps.LatLng(40.530557, -97.810040);

var icons = {
  general: {
    icon: "images/pin24.png"
  },
  unique: {
    icon: "images/pin48.png"
  }
};

var roadTripCoordinates = [
          {lat: 35.035513, lng: -80.825293},
          {lat: 33.771915, lng: -84.733150},
          {lat: 33.544237, lng: -86.811799},
          {lat: 35.090822, lng: -89.883798},
          {lat: 35.176860, lng: -101.877216},
          {lat: 35.194056, lng: -111.619239},
          {lat: 36.895223, lng: -111.492993},
          {lat: 37.698648, lng: -112.692334},
          {lat: 36.134249, lng: -115.175182},
          {lat: 33.998990, lng: -118.247181},
          {lat: 36.625512, lng: -121.550631},
          {lat: 37.939943, lng: -119.634766},
          {lat: 39.544906, lng: -119.774284},
          {lat: 40.768417, lng: -111.974367},
          {lat: 42.845597, lng: -109.842619},
          {lat: 44.476189, lng: -110.359967},
          {lat: 41.337490, lng: -105.703832},
          {lat: 40.855893, lng: -96.524636},
          {lat: 37.588886, lng: -88.931385},
          {lat: 36.082635, lng: -85.102310},
          {lat: 35.272770, lng: -82.232823},
          {lat: 35.035513, lng: -80.825293}
    ];

function initialize() {
  var mapPropChina = {
      center:chinaCenter,
      zoom: 4,
      draggable: true,
      scrollwheel: false,
      mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var mapPropUSA = {
      center:usaCenter,
      zoom: 4,
      draggable: true,
      scrollwheel: false,
      mapTypeId:google.maps.MapTypeId.ROADMAP
  }
  
  var mapChina = new google.maps.Map(document.getElementById("chinaMap"),mapPropChina);
  var mapUSA = new google.maps.Map(document.getElementById("usaMap"),mapPropUSA);

  var infoChina = new google.maps.InfoWindow();
  var infoUSA = new google.maps.InfoWindow(); 
  var markerChina, i;
  var markerUSA, j;

  //polyline setup
  var roadTrip = new google.maps.Polyline({
    path: roadTripCoordinates,
    geodesic: true,
    strokeColor: '#4986E7',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  roadTrip.setMap(mapUSA);

  for (i = 0; i < chinaMarker.length; i ++){
    var position = new google.maps.LatLng(chinaMarker[i].position[0], chinaMarker[i].position[1]);

    markerChina = new google.maps.Marker({
      position: position,
      title: chinaMarker[i].title,
      icon: icons[chinaMarker[i].type].icon
    });

    markerChina.setMap(mapChina);

    google.maps.event.addListener(markerChina, 'click', (function(markerChina, i){
      return function(){
        infoChina.setContent(chinaMarker[i].info);
        infoChina.open(mapChina, markerChina);
      }
    })(markerChina, i));
  }

  for (j = 0; j < usaMarker.length; j ++){
    var position = new google.maps.LatLng(usaMarker[j].position[0], usaMarker[j].position[1]);

    markerUSA = new google.maps.Marker({
      position: position,
      title: usaMarker[j].title,
      icon: icons[usaMarker[j].type].icon
    });

    markerUSA.setMap(mapUSA);

    google.maps.event.addListener(markerUSA, 'click', (function(markerUSA, j){
      return function(){
        infoChina.setContent(usaMarker[j].info);
        infoChina.open(mapUSA, markerUSA);
      }
    })(markerUSA, j));
  } 
};


$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    initialize();
    //alert(usaMarker[0].position);
});