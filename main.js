var mymap = L.map('mapid').setView([21.038128, 105.822291], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibmd1eWVuMTkxNTE5OTgiLCJhIjoiY2tyeW96cWFmMGtzbzJwbzkxaDViemJzZiJ9.up7cDlf5Y5NVMSQMb7w1Tw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

var myIcon = L.icon({
    iconUrl: "img/be.png",
    iconSize: [80, 80],
    iconAnchor: [40, 40],
    popupAnchor: [-3, -76],
});

var marker = L.marker([21.038128, 105.822291], { icon: myIcon }).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.");

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);