var mymap = L.map('mapid').setView([21.038128, 105.822291], 13);
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
    iconSize: [90, 90],
    iconAnchor: [45, 45],
    popupAnchor: [-3, -76],
});

var iconBeo = L.icon({
    iconUrl: "img/beo.png",
    iconSize: [80, 80],
    iconAnchor: [40, 40],
    popupAnchor: [-3, -76],
});

var iconFood = L.Icon.extend({
    options: {
        iconSize: [80, 80],
        iconAnchor: [40, 40],
        popupAnchor: [-3, -76],
    }
});

var iconPho = new iconFood({ iconUrl: "img/pho.png" }),
    iconBun = new iconFood({ iconUrl: "img/bun.png" }),
    iconBanhGato = new iconFood({ iconUrl: "img/banhGato.png" }),
    iconBanhMi = new iconFood({ iconUrl: "img/banhMi.png" }),
    iconCafe = new iconFood({ iconUrl: "img/cafe.png" }),
    iconcafeMeo = new iconFood({ iconUrl: "img/cafeMeo.png" }),
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
markerBe.bindPopup("<b>Hello world!</b><br>I am a popup.");

var markerBeo = L.marker([21.043056, 105.784553], { icon: iconBeo }).addTo(mymap);
markerBeo.bindPopup("<b>Hello world!</b><br>I am a popup.");

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);