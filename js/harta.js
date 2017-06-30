function myMap() {
var mapProp= {
    center:new google.maps.LatLng(46.7667,23.6),
    zoom:13,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}