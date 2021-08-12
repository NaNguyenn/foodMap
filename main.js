var mymap = L.map('mapid').setView([21.037853, 105.821825], 16);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibmd1eWVuMTkxNTE5OTgiLCJhIjoiY2tyeW96cWFmMGtzbzJwbzkxaDViemJzZiJ9.up7cDlf5Y5NVMSQMb7w1Tw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

var iconBe = L.icon({
    iconUrl: "img/be.png",
    iconSize: [100, 100],
    iconAnchor: [50, 50],
    popupAnchor: [0, -20],
});

var iconBeo = L.icon({
    iconUrl: "img/beo.png",
    iconSize: [80, 80],
    iconAnchor: [40, 40],
    popupAnchor: [0, -20],
});

var iconFood = L.Icon.extend({
    options: {
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [-3, -76],
    }
});

var iconPho = new iconFood({ iconUrl: "img/pho.png" }),
    iconBun = new iconFood({ iconUrl: "img/bun.png" }),
    iconBanhGato = new iconFood({ iconUrl: "img/banhGato.png" }),
    iconBanhMi = new iconFood({ iconUrl: "img/banhMi.png" }),
    iconCafe = new iconFood({ iconUrl: "img/cafe.png" }),
    iconCafeMeo = new iconFood({ iconUrl: "img/cafeMeo.png" }),
    iconCuon = new iconFood({ iconUrl: "img/cuon.png" }),
    iconHotdog = new iconFood({ iconUrl: "img/hotdog.png" }),
    iconKem = new iconFood({ iconUrl: "img/kem.png" }),
    iconNemChua = new iconFood({ iconUrl: "img/nemChua.png" }),
    iconNgocThach = new iconFood({ iconUrl: "img/ngocThach.png" }),
    iconNuong = new iconFood({ iconUrl: "img/nuong.png" }),
    iconOc = new iconFood({ iconUrl: "img/oc.png" }),
    iconPizza = new iconFood({ iconUrl: "img/pizza.png" }),
    iconSpaghetti = new iconFood({ iconUrl: "img/spaghetti.png" }),
    iconTaco = new iconFood({ iconUrl: "img/taco.png" }),
    iconTrung = new iconFood({ iconUrl: "img/trung.png" });

var markerBe = L.marker([21.037853, 105.821825], { icon: iconBe }).addTo(mymap);
markerBe.bindPopup("Mình là em bé Vịt iu nhứt.");

var markerBeo = L.marker([21.043056, 105.784553], { icon: iconBeo }).addTo(mymap);
markerBeo.bindPopup("Mình là Vịt.");

var markerPho = L.marker([21.002941, 105.835982], { icon: iconPho }).addTo(mymap);
var markerBun = L.marker([21.043881, 105.794011], { icon: iconBun }).addTo(mymap);
var markerBanhGato = L.marker([21.041563, 105.787353], { icon: iconBanhGato }).addTo(mymap);
var markerBanhMi = L.marker([21.041022, 105.783212], { icon: iconBanhMi }).addTo(mymap);
var markerCafe = L.marker([21.04312, 105.823992], { icon: iconCafe }).addTo(mymap);
var markerCafeMeo = L.marker([21.030082, 105.823252], { icon: iconCafeMeo }).addTo(mymap);
var markerCuon = L.marker([21.041447, 105.792149], { icon: iconCuon }).addTo(mymap);
var markerHotdog = L.marker([21.038584, 105.78568], { icon: iconHotdog }).addTo(mymap);
var markerKem = L.marker([21.077923, 105.817748], { icon: iconKem }).addTo(mymap);
var markerNemChua = L.marker([21.040083, 105.828016], { icon: iconNemChua }).addTo(mymap);
var markerNgocThach = L.marker([21.034527, 105.783658], { icon: iconNgocThach }).addTo(mymap);
var markerNuong = L.marker([20.994145, 105.849237], { icon: iconNuong }).addTo(mymap);
var markerOc = L.marker([21.043611, 105.793721], { icon: iconOc }).addTo(mymap);
var markerPizza = L.marker([21.024914, 105.854339], { icon: iconPizza }).addTo(mymap);
var markerSpaghetti = L.marker([21.015634, 105.855197], { icon: iconSpaghetti }).addTo(mymap);
var markerTaco = L.marker([21.072846, 105.814605], { icon: iconTaco }).addTo(mymap);
var markerTrung = L.marker([21.00542, 105.846368], { icon: iconTrung }).addTo(mymap);


function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);